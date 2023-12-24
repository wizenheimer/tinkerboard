"use client";
import {
	Badge,
	Card,
	Title,
	TextInput,
	Subtitle,
	Flex,
	Button,
} from "@tremor/react";
import DataTable from "./datatable";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { VectorStore } from "tinkerbird";
import { generateEmbeddings } from "@/services/embeddings";

type Props = {
	explorerContent: Content[] | undefined;
	setExplorerContent: Dispatch<SetStateAction<Content[] | undefined>>;
	vectorStore: VectorStore | undefined;
};

export default function Explorer({
	setExplorerContent,
	explorerContent,
	vectorStore,
}: Props) {
	const [queryValue, setQueryValue]: [
		undefined | string,
		Dispatch<SetStateAction<undefined | string>>
	] = useState();

	const handleSearch = () => {
		const queryEmbedding = generateEmbeddings(queryValue!);
		const result = vectorStore?.query(queryEmbedding);
		setExplorerContent(result);
		console.log(result);
	};

	return (
		<Card className="flex flex-col">
			<Title>Search Results</Title>
			<Flex justifyContent="start" className="space-x-2">
				<Subtitle>Query your embeddings</Subtitle>
				<Badge size="xs">100 ms</Badge>
			</Flex>
			<Flex className="mt-5 space-x-4">
				<TextInput
					placeholder="Search..."
					value={queryValue}
					onChange={(e: ChangeEvent<HTMLInputElement>) => {
						setQueryValue(e.target.value);
					}}
				/>
				<Button size="xs" onClick={handleSearch}>
					Search
				</Button>
			</Flex>
			<DataTable explorerContent={explorerContent} />
		</Card>
	);
}
