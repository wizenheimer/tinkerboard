"use client";
import { Badge, Card, Title, TextInput, Subtitle, Flex } from "@tremor/react";
import DataTable from "./datatable";
import { Dispatch, SetStateAction } from "react";

type Props = {
	explorerContent: Content[] | undefined;
	setExplorerContent: Dispatch<SetStateAction<Content[] | undefined>>;
};

export default function Explorer({ explorerContent }: Props) {
	return (
		<Card className="flex flex-col">
			<Title>Search Results</Title>
			<Flex justifyContent="start" className="space-x-2">
				<Subtitle>Query your embeddings</Subtitle>
				<Badge size="xs">100 ms</Badge>
			</Flex>
			<TextInput placeholder="Search..." className="mt-5" />
			<DataTable explorerContent={explorerContent} />
		</Card>
	);
}
