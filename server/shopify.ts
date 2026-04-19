import { GraphQLClient } from "graphql-request";

const endpoint = `https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}/api/2024-01/graphql.json`;

export const shopifyClient = new GraphQLClient(endpoint, {
  headers: {
    "X-Shopify-Storefront-Access-Token": process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN!,
  },
});

export const getProducts = async () => {
  const query = `
    {
      products(first: 250) {
        edges {
          node {
            id
            title
            description
            featuredImage { url }
            collections(first: 5) {
              edges { node { handle } }
            }
            options {
              name
              values
            }
            variants(first: 1) {
              edges {
                node {
                  price { amount currencyCode }
                }
              }
            }
          }
        }
      }
    }
  `;

  const data: any = await shopifyClient.request(query);

  return data.products.edges.map((item: any) => {
    const product = item.node;
    return {
      id: product.id,
      name: product.title,
      price: product.variants.edges[0].node.price.amount,
      currency: product.variants.edges[0].node.price.currencyCode,
      image: product.featuredImage?.url || "",
      categories: product.collections.edges.map((e: any) => e.node.handle),
    };
  });
};