"use client";
import React, { useEffect, useState } from 'react';

const PersonalArea = () => {
  const [customer, setCustomer] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);

  const CUSTOMER_QUERY = `
    query getCustomerDetails {
      customer {
        firstName
        lastName
        emailAddress { emailAddress }
        defaultAddress {
          id
          address1
          city
          zip
          country
        }
        orders(first: 5) {
          edges {
            node {
              id
              totalPrice { amount currencyCode }
              lineItems(first: 5) {
                edges {
                  node {
                    title
                    quantity
                    image { url }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  const ADDRESS_UPDATE_MUTATION = `
    mutation customerAddressUpdate($address: CustomerAddressInput!, $addressId: ID!) {
      customerAddressUpdate(address: $address, addressId: $addressId) {
        customerAddress {
          id
          address1
          city
          zip
          country
        }
        userErrors {
          field
          message
        }
      }
    }
  `;

  const handleLogout = () => {
    localStorage.removeItem('customer_token');
    setCustomer(null);
  };

  const fetchData = async () => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      let token = urlParams.get('token');

      if (token) {
        localStorage.setItem('customer_token', token);
        window.history.replaceState({}, document.title, window.location.pathname);
      } else {
        token = localStorage.getItem('customer_token');
      }

      if (!token) {
        setLoading(false);
        return;
      }

      const shopId = process.env.NEXT_PUBLIC_SHOP_ID;
      const apiVersion = "2024-04";

      const response = await fetch(
        `https://shopify.com/${shopId}/account/customer/api/${apiVersion}/graphql`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token!,
          },
          body: JSON.stringify({ query: CUSTOMER_QUERY }),
        }
      );

      const result = await response.json();

      if (result.errors) {
        if (result.errors.some((e: any) => e.extensions?.code === 'UNAUTHORIZED')) {
          handleLogout();
        }
      } else {
        setCustomer(result.data?.customer);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddressUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUpdating(true);

    const token = localStorage.getItem('customer_token');
    const shopId = process.env.NEXT_PUBLIC_SHOP_ID;

    if (!customer?.defaultAddress?.id) {
      alert("No default address found");
      setIsUpdating(false);
      return;
    }

    const formData = new FormData(e.currentTarget as HTMLFormElement);

    const updatedAddress = {
      address1: formData.get('address1')?.toString(),
      city: formData.get('city')?.toString(),
      zip: formData.get('zip')?.toString(),
      territoryCode: formData.get('country')?.toString().trim().toUpperCase(), // ✅ fixed
    };

    try {
      const response = await fetch(
        `https://shopify.com/${shopId}/account/customer/api/2024-04/graphql`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token!,
          },
          body: JSON.stringify({
            query: ADDRESS_UPDATE_MUTATION,
            variables: {
              address: updatedAddress,
              addressId: customer.defaultAddress.id
            },
          }),
        }
      );

      const result = await response.json();

      if (result.errors) {
        alert(result.errors[0].message);
      } else if (result.data?.customerAddressUpdate?.userErrors?.length > 0) {
        alert(result.data.customerAddressUpdate.userErrors[0].message);
      } else if (result.data?.customerAddressUpdate?.customerAddress) {
        setCustomer((prev: any) => ({
          ...prev,
          defaultAddress: result.data.customerAddressUpdate.customerAddress
        }));
        alert("Address Updated Successfully!");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to update address. Please try again.");
    } finally {
      setIsUpdating(false);
    }
  };

  const handleLogin = async () => {
    const shopDomain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
    const clientId = process.env.NEXT_PUBLIC_SHOPIFY_CLIENT_ID;

    try {
      const response = await fetch(`https://${shopDomain}/.well-known/openid-configuration`);
      const config = await response.json();

      const authUrl = new URL(config.authorization_endpoint);
      authUrl.searchParams.append('client_id', clientId!);
      authUrl.searchParams.append('scope', 'openid email customer-account-api:full');
      authUrl.searchParams.append('response_type', 'code');
      authUrl.searchParams.append('redirect_uri', 'https://animal-cytoplasm-showing.ngrok-free.dev/api/auth/callback');
      authUrl.searchParams.append('state', 'random_state_123');
      authUrl.searchParams.append('nonce', 'random_nonce_123');

      window.location.href = authUrl.toString();
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-[#E2E6E1] text-[#1E4036] font-bold">
      Loading Portal...
    </div>
  );

  return (
    <section className="w-full min-h-screen bg-[#E2E6E1] pt-32 pb-0 font-sans flex flex-col items-center">
      <div className="max-w-[1240px] mx-auto px-6 w-full">
        {!customer ? (
          <div className="text-center py-20 bg-white/30 rounded-[30px] backdrop-blur-sm border border-white/50 shadow-xl">
            <h1 className="text-[#1E4036] text-4xl font-bold mb-6">Access Restricted</h1>
            <button
              onClick={handleLogin}
              className="bg-[#56A511] text-white px-10 py-4 rounded-full font-bold uppercase hover:bg-[#4a8e0f] transition-all shadow-lg"
            >
              Login with Shopify
            </button>
          </div>
        ) : (
          <>
            <div className="text-center mb-12">
              <h1 className="text-[#1E4036] text-5xl font-light mb-6">
                Welcome back, <span className="font-bold">{customer?.firstName || 'Valued Partner'}</span>
              </h1>
              <h2 className="text-[#1E4036] text-xl font-semibold mb-2 uppercase tracking-widest italic">
                B2B Customer Portal
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">

              {/* Recent Orders */}
              <div className="bg-[#F1EAE5] rounded-[30px] p-8 shadow-sm border border-white/20">
                <h3 className="text-[#1E4036] text-2xl font-bold mb-8">Recent Orders</h3>
                <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                  {customer?.orders?.edges?.map((order: any) => (
                    <div
                      key={order.node?.id}
                      className="bg-white/80 hover:bg-white rounded-[20px] p-5 flex items-center justify-between shadow-sm transition-all border border-transparent hover:border-[#56A511]/20"
                    >
                      <div className="flex items-center gap-5">
                        <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center border border-gray-100 overflow-hidden p-2">
                          <img
                            src={order.node.lineItems.edges[0]?.node.image?.url || "https://placehold.co/100x100?text=Product"}
                            alt="product"
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div>
                          <p className="text-[11px] font-black text-[#56A511] uppercase mb-1">
                            Qty: {order.node.lineItems.edges[0]?.node.quantity}
                          </p>
                          <h4 className="text-[#1E4036] text-lg font-medium leading-tight">
                            {order.node.lineItems.edges[0]?.node.title}
                          </h4>
                          <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-tighter">
                            Order ID: {order.node?.id ? order.node.id.split('/').pop() : "N/A"}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-[#1E4036]">
                          {order.node.totalPrice.currencyCode} {parseFloat(order.node.totalPrice.amount).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Personal Details */}
              <div className="flex flex-col gap-10">
                <div className="bg-[#F1EAE5] rounded-[30px] p-8 shadow-sm border border-white/20">
                  <div className="flex justify-between items-start mb-8">
                    <h3 className="text-[#1E4036] text-2xl font-bold">Personal Details</h3>
                    <button
                      onClick={handleLogout}
                      className="bg-red-500/10 hover:bg-red-500 hover:text-white text-red-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all"
                    >
                      Logout
                    </button>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-white/60 rounded-full px-6 py-3 text-[#1E4036] text-[13px] font-medium border border-white">
                        {customer?.firstName} {customer?.lastName}
                      </div>
                      <div className="bg-white/60 rounded-full px-6 py-3 text-[#1E4036] text-[13px] font-medium border border-white truncate">
                        {customer?.emailAddress?.emailAddress}
                      </div>
                    </div>

                    <div className="bg-white rounded-[25px] p-8 relative border border-gray-100 shadow-inner">
                      <h4 className="text-[10px] font-black text-[#56A511] uppercase tracking-widest mb-4">
                        Default Shipping
                      </h4>

                      <form onSubmit={handleAddressUpdate} className="space-y-3">
                        <input
                          name="address1"
                          defaultValue={customer?.defaultAddress?.address1}
                          className="w-full border-b bg-transparent py-2 text-sm outline-none focus:border-[#56A511] text-[#1E4036]"
                          placeholder="Street Address"
                          required
                        />

                        <div className="grid grid-cols-2 gap-4">
                          <input
                            name="city"
                            defaultValue={customer?.defaultAddress?.city}
                            className="w-full border-b bg-transparent py-2 text-sm outline-none focus:border-[#56A511] text-[#1E4036]"
                            placeholder="City"
                            required
                          />
                          <input
                            name="zip"
                            defaultValue={customer?.defaultAddress?.zip}
                            className="w-full border-b bg-transparent py-2 text-sm outline-none focus:border-[#56A511] text-[#1E4036]"
                            placeholder="Zip Code"
                            required
                          />
                        </div>

                        
                        <input
                          name="country"
                          defaultValue=""
                          className="w-full border-b bg-transparent py-2 text-sm outline-none focus:border-[#56A511] text-[#1E4036]"
                          placeholder="Territory Code (e.g. PK, US)"
                          required
                        />

                        <p className="text-[10px] text-gray-400">
                          Current country: <span className="font-semibold text-[#1E4036]">{customer?.defaultAddress?.country}</span>
                          {' '}— enter 2-letter code above to update
                        </p>

                        <button
                          type="submit"
                          disabled={isUpdating}
                          className="mt-6 bg-[#1E4036] text-white text-[10px] px-8 py-3 rounded-full uppercase font-bold tracking-widest hover:bg-[#56A511] transition-colors disabled:opacity-50"
                        >
                          {isUpdating ? "Updating..." : "Update Address"}
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default PersonalArea;