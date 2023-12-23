import { chunk } from "./splitter";
import { generateEmbeddings } from "./embeddings";
import { faker } from "@faker-js/faker";

export function textHandler(text: string): Content[] {
	// perform text validation and clean up
	// perform chunking
	const textChunks = chunk(text);
	// generate embeddings for each chunk and append them to Content
	let content: Content[] = [];
	textChunks.forEach((chunk, index) => {
		content.push({
			id: String(index),
			content: chunk,
			embedding: generateEmbeddings(chunk),
		});
	});
	// return Content[]
	return content;
}

export function datasetHandler(
	datasetID?: string,
	dataSize: number | string = 10
): Content[] {
	// perform data set validation and clean up
	// perform data size validation and clean up
	let content: Content[] = [];

	// make a request and fetch embeddings
	for (let i = 0; i < Number(dataSize); i += 1) {
		content.push({
			id: String(i),
			content: faker.hacker.phrase(),
			embedding: Array.from({ length: 32 }, () =>
				Math.floor(Math.random() * 10)
			),
		});
	}

	// return Content[]
	return content;
}
