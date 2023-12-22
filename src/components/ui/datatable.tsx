import React from "react";
import {
	Table,
	TableHead,
	TableRow,
	TableHeaderCell,
	TableCell,
	TableBody,
	Text,
} from "@tremor/react";

export interface Content {
	id: string;
	content: string;
	embedding: Float32Array | number[];
	similarity: number;
}

type Props = {
	content: Content[];
};

export default function DataTable({ content }: Props) {
	return (
		<Table className="mt-5">
			<TableHead>
				<TableRow>
					<TableHeaderCell>ID</TableHeaderCell>
					<TableHeaderCell>Content</TableHeaderCell>
					<TableHeaderCell>Embedding</TableHeaderCell>
					<TableHeaderCell>Similarity</TableHeaderCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{content.map((item) => (
					<TableRow key={item.id}>
						<TableCell>{item.id}</TableCell>
						<TableCell>
							<Text>{item.content}</Text>
						</TableCell>
						<TableCell>
							<Text>{item.embedding}</Text>
						</TableCell>
						<TableCell>
							<Text>{item.similarity}</Text>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
