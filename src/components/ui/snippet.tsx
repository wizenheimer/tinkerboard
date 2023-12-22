import { CodeBlock } from "react-code-blocks";
import React from "react";

type Props = {};

export default function Snippet({}: Props) {
	const code = `
    // Initialize HNSW index
    const hnsw = new HNSW();
    // Build HNSW index incrementally
    await hnsw.buildIndex(data);
    // Save the serialized index to a file
    const serializedIndex = hnsw.serialize();
    // Query Index with queryVector and kValue
    const results = hnsw.query(queryVector, kValue);
    `;
	return (
		<CodeBlock
			text={code}
			language={"javascript"}
			showLineNumbers
			wrapLongLines
		/>
	);
}
