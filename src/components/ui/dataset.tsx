import { useState } from "react";

type Props = {};

import {
	Card,
	SearchSelect,
	SearchSelectItem,
	Title,
	Flex,
	Subtitle,
	Button,
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

export default function Dataset({}: Props) {
	const [value, setValue] = useState("");
	return (
		<Card className="flex flex-col">
			<Title>Dataset</Title>
			<Subtitle>Test on a pre-defined dataset</Subtitle>
			<Flex justifyContent="end" className="space-x-2 mt-5">
				<div className="max-w-sm mx-auto space-y-6 grow">
					<SearchSelect
						value={value}
						onValueChange={setValue}
						placeholder="Dataset"
					>
						<SearchSelectItem value="1">
							Kilometers
						</SearchSelectItem>
						<SearchSelectItem value="2">Meters</SearchSelectItem>
						<SearchSelectItem value="3">Miles</SearchSelectItem>
						<SearchSelectItem value="4">
							Nautical Miles
						</SearchSelectItem>
					</SearchSelect>
				</div>
				<div className="max-w-sm mx-auto space-y-6">
					<SearchSelect
						value={value}
						onValueChange={setValue}
						placeholder="Size"
					>
						<SearchSelectItem value="1">
							Kilometers
						</SearchSelectItem>
						<SearchSelectItem value="2">Meters</SearchSelectItem>
						<SearchSelectItem value="3">Miles</SearchSelectItem>
						<SearchSelectItem value="4">
							Nautical Miles
						</SearchSelectItem>
					</SearchSelect>
				</div>
			</Flex>
			<DataTable content={content} />
			<Flex justifyContent="end" className="space-x-2 mt-5">
				<Button size="xs" variant="primary" className="mr-4">
					Load Dataset
				</Button>
			</Flex>
		</Card>
	);
}
