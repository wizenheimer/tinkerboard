import { VectorStore, vectorResult } from "tinkerbird";
import { generateEmbeddings } from "./embeddings";

export async function vectorStoreHandler(
	collectionName: string = "vectorDB"
): Promise<VectorStore> {
	// create a new store, deletes it if it already exists
	const vectorStore = await VectorStore.create({
		collectionName: collectionName,
	});
	// return a new store
	return vectorStore;
}

export function addData(
	data: Content[],
	vectorStore: VectorStore,
	removeExisting: boolean = false
) {
	// remove existing data if the dimensions mismatch
	if (data[0].embedding.length != vectorStore.d || removeExisting)
		vectorStore.deleteIndex();
	// add the data to the store
	vectorStore.buildIndex(data);
}

export function search(
	query: string | number[],
	vectorStore: VectorStore,
	topK: number = 5
): vectorResult {
	// convert the query string into number[] if not already
	const target =
		typeof query === "string" ? generateEmbeddings(query) : query;
	// perform the search on the store
	const results = vectorStore.query(target, topK);
	// return the topK values as Result
	return results;
}
