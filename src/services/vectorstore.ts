import { VectorStore, vectorResult } from "tinkerbird";
import { generateEmbeddings } from "./embeddings";

export async function vectorStoreHandler(
	collectionName: string = "vectorDB"
): Promise<VectorStore> {
	// TODO: delete a store if it exists, utility function
	// create a new store
	const vectorStore = await VectorStore.create({
		collectionName: collectionName,
	});
	// return a new store
	return vectorStore;
}

export function addData(data: Content[], vectorStore: VectorStore) {
	// TODO: check if the store exists, utility function
	// if it doesn't exist, create a new store
	// add the data to the store
	vectorStore.buildIndex(data);
}

export function search(
	query: string | number[],
	store: VectorStore,
	topK: number = 5
): vectorResult {
	// convert the query string into number[] if not already
	const target =
		typeof query === "string" ? generateEmbeddings(query) : query;
	// perform the search on the store
	const results = store.query(target, topK);
	// return the topK values as Result
	// TODO: vectorStoreResult type should be modified, returns only id and similarity
	// need id, content, embeddings, similarity
	return results;
}
