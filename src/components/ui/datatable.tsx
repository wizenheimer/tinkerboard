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

type Props = {
	explorerContent: Content[] | undefined;
};

export default function DataTable({ explorerContent }: Props) {
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
				{explorerContent?.map((item) => (
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
