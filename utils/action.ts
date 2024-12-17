"use server";

import weaviate from "weaviate-client";
import { getWeaviateClient } from "@/import/client";
import { getBase64 } from "@/import/util";

export async function vectorSearch(searchTerm: string) {
  const client = await getWeaviateClient();

  const myCollection = client.collections.get("PalmMultimodalSearch");

  const response = await myCollection.query.nearText(searchTerm, {
    limit: 8,
    returnMetadata: ["distance"],
  });

  return response;
}

export async function vectorSearchImage(file: string) {
  const client = await getWeaviateClient();

  const myCollection = client.collections.get("PalmMultimodalSearch");

  const imagePathBase64 = getBase64(file.path);

  const response = await myCollection.query.nearImage(imagePathBase64, {
    limit: 8,
    returnMetadata: ["distance"],
  });

  return response;
}
