import { ChangeEvent, useState } from "react";
import { Card, Textarea, Button, Flex, Title, Subtitle } from "@tremor/react";

type Props = {};
export default function TextBox({}: Props) {
	const [value, setValue] = useState("");

	return (
		<Card className="flex flex-col">
			<Title>Custom Data</Title>
			<Subtitle>Paste, Embed and Query your data</Subtitle>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					alert(value);
				}}
				className="mt-5"
			>
				<div className="flex flex-col gap-2">
					<Textarea
						onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
							setValue(e.target.value);
						}}
						id="description"
						placeholder="Start typing here..."
						value={value}
						rows={20}
					/>
				</div>
			</form>
			<Flex justifyContent="end" className="space-x-2 mt-5">
				<Button size="xs" variant="primary">
					Generate Embedding
				</Button>
			</Flex>
		</Card>
	);
}
