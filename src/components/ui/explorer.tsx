import {
	Badge,
	Card,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeaderCell,
	TableRow,
	Text,
	Title,
	TextInput,
	Subtitle,
	Flex,
} from "@tremor/react";
import DataTable, { Content } from "./datatable";

const content: Content[] = [
	{
		id: "121",
		content: "Federal Councillor",
		embedding: [1, 2, 3, 4, 5, 6, 7, 8, 9],
		similarity: 1.0,
	},
	{
		id: "212",
		content: "Federal Councillor",
		embedding: [1, 2, 3, 4, 5, 6, 7, 8, 9],
		similarity: 1.0,
	},
	{
		id: "313",
		content: "Federal Councillor",
		embedding: [1, 2, 3, 4, 5, 6, 7, 8, 9],
		similarity: 1.0,
	},
	{
		id: "414",
		content: "Federal Councillor",
		embedding: [1, 2, 3, 4, 5, 6, 7, 8, 9],
		similarity: 1.0,
	},
	{
		id: "515",
		content: "Federal Councillor",
		embedding: [1, 2, 3, 4, 5, 6, 7, 8, 9],
		similarity: 1.0,
	},
	{
		id: "616",
		content: "Federal Councillor",
		embedding: [1, 2, 3, 4, 5, 6, 7, 8, 9],
		similarity: 1.0,
	},
];

type Props = {};

export default function Explorer({}: Props) {
	return (
		<Card className="flex flex-col">
			<Title>Search Results</Title>
			<Flex justifyContent="start" className="space-x-2">
				<Subtitle>Query your embeddings</Subtitle>
				<Badge size="xs">100 ms</Badge>
			</Flex>
			<TextInput placeholder="Search..." className="mt-5" />
			<DataTable content={content} />
		</Card>
	);
}
