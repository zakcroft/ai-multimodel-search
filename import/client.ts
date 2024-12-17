import weaviate, { type WeaviateClient } from "weaviate-client";
import "dotenv/config";

let client: WeaviateClient;

export const getWeaviateClient = async () => {
  if (!client) {
    client = await weaviate.connectToLocal({
      host: "127.0.0.1", // URL only, no http prefix
      port: 8080,
      grpcPort: 50051, // Default is 50051, WCD uses 443
      // headers: {
      //   'X-Google-Vertex-Api-Key': process.env.GOOGLE_API_KEY || '',
      // },
    });
  }

  return client;
};

// export const getWeaviateClient = async () => {
//   if (!client) {
//     client = await weaviate.connectToWeaviateCloud(process.env.WEAVIATE_HOST_URL || '',{
//         authCredentials: new weaviate.ApiKey(process.env.WEAVIATE_ADMIN_KEY || ''),
//         headers: {
//           'X-Palm-Api-Key': process.env.GOOGLE_API_KEY || ''
//         }
//       },
//     )
//   }
//
//   return client;
// }
