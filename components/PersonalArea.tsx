"use client";
import React, { useEffect, useState } from 'react';

const PersonalArea = () => {
  const [customer, setCustomer] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const CUSTOMER_QUERY = `
    query getCustomerDetails {
      customer {
        firstName
        lastName
        emailAddress { emailAddress }
        defaultAddress {
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

  useEffect(() => {
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
              'Authorization': token, 
            },
            body: JSON.stringify({ query: CUSTOMER_QUERY }),
          }
        );

        const result = await response.json();
        
        if (result.errors) {
          console.error("GraphQL Errors:", result.errors);
          if (result.errors.some((e: any) => e.extensions?.code === 'UNAUTHORIZED')) {
            localStorage.removeItem('customer_token');
            setCustomer(null);
          }
        } else {
          setCustomer(result.data?.customer);
        }
      } catch (error) {
        console.error("Error fetching customer data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleLogin = () => {
    const shopId = process.env.NEXT_PUBLIC_SHOP_ID;
    const clientId = process.env.NEXT_PUBLIC_SHOPIFY_CLIENT_ID;
    const redirectUri = encodeURIComponent("https://animal-cytoplasm-showing.ngrok-free.dev/api/auth/callback");

    const scopeList = [
      "openid",
      "email",
      "customer-account-api:full"
    ].join(" ");
    
    const scopes = encodeURIComponent(scopeList);
    
    const authUrl = `https://shopify.com/${shopId}/auth/oauth/authorize?client_id=${clientId}&scope=${scopes}&redirect_uri=${redirectUri}&response_type=code&state=random_state_123&nonce=random_nonce_123`;
    
    window.location.href = authUrl;
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-[#E2E6E1] text-[#1E4036] font-bold">Loading Portal...</div>;

  return (
    <section className="w-full min-h-screen bg-[#E2E6E1] pt-32 pb-0 font-sans flex flex-col items-center">
      <div className="max-w-[1240px] mx-auto px-6 w-full">
        {!customer ? (
          <div className="text-center py-20 bg-white/30 rounded-[30px] backdrop-blur-sm border border-white/50 shadow-xl">
            <h1 className="text-[#1E4036] text-4xl font-bold mb-6">Access Restricted</h1>
            <p className="text-[#1E4036] opacity-70 mb-8 max-w-md mx-auto">Please sign in with your Shopify account to access your wholesale dashboard and order history.</p>
            <button 
              onClick={handleLogin}
              className="bg-[#56A511] text-white px-10 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-[#4a8e0f] transform hover:scale-105 transition-all shadow-lg"
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
              <div className="w-24 h-[4px] bg-[#56A511] mx-auto mb-6 rounded-full"></div>
              <h2 className="text-[#1E4036] text-xl font-semibold mb-2 uppercase tracking-widest">B2B Customer Portal</h2>
              <p className="text-[#1E4036] text-sm opacity-70 max-w-[700px] mx-auto leading-relaxed">
                Manage your wholesale account, track deliveries, and quick-order your longevity nutrition essentials.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
              <div className="bg-[#F1EAE5] rounded-[30px] p-8 shadow-sm border border-white/20">
                <h3 className="text-[#1E4036] text-2xl font-bold mb-8 flex items-center gap-3">
                   Recent Orders
                </h3>
                <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                  {customer?.orders?.edges?.map((order: any) => (
                    <div key={order.node.id} className="bg-white/80 hover:bg-white rounded-[20px] p-5 flex items-center justify-between shadow-sm transition-colors border border-transparent hover:border-[#56A511]/20">
                      <div className="flex items-center gap-5">
                        <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center border border-gray-100 overflow-hidden p-2">
                           <img 
                            src={order.node.lineItems.edges[0]?.node.image?.url || "https://placehold.co/100x100?text=Product"} 
                            alt="product" 
                            className="w-full h-full object-contain" 
                          />
                        </div>
                        <div>
                          <p className="text-[11px] font-black text-[#56A511] uppercase mb-1">Qty: {order.node.lineItems.edges[0]?.node.quantity}</p>
                          <h4 className="text-[#1E4036] text-lg font-medium leading-tight">
                            {order.node.lineItems.edges[0]?.node.title}
                          </h4>
                          <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-tighter">Order ID: {order.node.id.split('/').pop()}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-[#1E4036]">
                          {order.node.totalPrice.currencyCode} {parseFloat(order.node.totalPrice.amount).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                  {(!customer?.orders?.edges || customer.orders.edges.length === 0) && (
                    <div className="text-center py-10 opacity-40 italic">No recent orders to display.</div>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-10">
                <div className="bg-[#1E4036] rounded-[30px] p-8 text-white shadow-lg">
                  <h3 className="text-2xl font-bold mb-6">Quick Actions</h3>
                  <button className="w-full bg-[#56A511] hover:bg-[#66bc14] text-white py-4 rounded-full text-xs font-black tracking-[0.2em] uppercase transition-all shadow-md">
                    Create New Wholesale Order
                  </button>
                </div>

                <div className="bg-[#F1EAE5] rounded-[30px] p-8 shadow-sm border border-white/20">
                  <h3 className="text-[#1E4036] text-2xl font-bold mb-8">Personal Details</h3>
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
                      <h4 className="text-[10px] font-black text-[#56A511] uppercase tracking-widest mb-4">Default Shipping</h4>
                      <div className="text-[#1E4036] text-sm leading-loose">
                        {customer?.defaultAddress ? (
                          <>
                            <p className="font-bold text-base">{customer.defaultAddress.address1}</p>
                            <p className="opacity-80">{customer.defaultAddress.city}, {customer.defaultAddress.zip}</p>
                            <p className="opacity-80">{customer.defaultAddress.country}</p>
                          </>
                        ) : (
                          <p className="opacity-40 italic">No shipping address on file.</p>
                        )}
                      </div>
                      <button className="absolute bottom-6 right-8 bg-[#1E4036] text-white px-8 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-black transition-colors">
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="w-[1px] h-24 bg-gradient-to-b from-[#1E4036]/40 to-transparent"></div>
    </section>
  );
};

export default PersonalArea;