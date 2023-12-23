export function generateEmbeddings(text: string): number[] {
	return Array.from({ length: 32 }, () => Math.floor(Math.random() * 10));
}
