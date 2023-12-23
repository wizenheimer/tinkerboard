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
}

type Props = {
	sampleContent: Content[] | undefined;
};

export default function SampleTable({ sampleContent }: Props) {
	return (
		<Table className="mt-5">
			<TableHead>
				<TableRow>
					<TableHeaderCell>ID</TableHeaderCell>
					<TableHeaderCell>Content</TableHeaderCell>
					<TableHeaderCell>Embedding</TableHeaderCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{sampleContent?.map((item) => (
					<TableRow key={item.id}>
						<TableCell>{item.id}</TableCell>
						<TableCell>
							<Text>{item.content}</Text>
						</TableCell>
						<TableCell>
							<Text>{item.embedding}</Text>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
