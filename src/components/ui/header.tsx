"use client";
import React from "react";
import { Grid, Col, Card, Text, Metric } from "@tremor/react";
import Snippet from "./snippet";
type Props = {};

export default function Header({}: Props) {
	return (
		<Grid className="gap-x-2 gap-y-2 p-5" numItemsMd={4}>
			<Col numColSpanMd={2}>
				<Card>
					<Metric>Client Side Vector Search</Metric>
					<Text className="mt-2">
						TinkerBird is a Chrome-native vector database designed
						for efficient storage and retrieval of high-dimensional
						vectors (embeddings). Its query engine, written in
						TypeScript, leverages HNSW (Hierarchical Navigable Small
						World) indexes for fast vector retrieval. The storage
						layer utilizes IndexedDB, which could be extended with
						an lru-cache.
					</Text>
					<Text className="mt-2">
						One significant challenge facing large language models
						(LLMs) is their tendency to generate syntactically
						correct but factually inaccurate responses, a phenomenon
						known as hallucination. To address this issue, vector
						databases provide LLMs with relevant context to
						structure it&apos;s response. This not only improves the
						accuracy of LLM responses but also minimizes
						computational costs incurred by irrelevant tokens.
						Additionally, vector databases ensure that LLMs are
						anchored to the required context.
					</Text>
					<Text className="mt-2">
						TinkerBird disrupts traditional RAG workflows, which
						rely heavily on server-side interactions. By co-locating
						data and embeddings, it eliminates the roundtrip delays
						associated with client-server model. With Tinkerbird,
						sensitive data remains local, thus benefiting from
						vector search, without the associated compliance and
						security risks.
					</Text>
					<Text className="mt-2">
						TinkerBird uses IndexedDB as it&apos;s storage layer,
						which in turn builds upon Blobs and LevelDB storage
						systems. By using Indexeddb, it benefits from
						IndexedDB&apos;s adoption, stability and familiarity as
						a native choice for offline first workflows
					</Text>
				</Card>
			</Col>
			<Col numColSpanMd={2}>
				<Card>
					<Snippet />
				</Card>
			</Col>
		</Grid>
	);
}
