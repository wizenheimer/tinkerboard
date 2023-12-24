import {
	ChangeEvent,
	Dispatch,
	SetStateAction,
	useEffect,
	useState,
} from "react";
import { Card, Textarea, Button, Flex, Title, Subtitle } from "@tremor/react";
import { textHandler } from "@/services/handler";
import { defaultText } from "./defaultText";
import { vectorStoreHandler } from "@/services/vectorstore";
import { VectorStore } from "tinkerbird";

type Props = {
	setExplorerContent: Dispatch<SetStateAction<Content[] | undefined>>;
	vectorStore: VectorStore | undefined;
};

export default function TextBox({ setExplorerContent, vectorStore }: Props) {
	const [text, setText]: [
		string | undefined,
		Dispatch<SetStateAction<string | undefined>>
	] = useState();

	const [disabled, setDisabled] = useState(true);

	useEffect(() => {
		setText(defaultText);
		setDisabled(false);
	}, []);

	const embedContent = () => {
		if (text) {
			setDisabled(true);
			const content = textHandler(text);
			vectorStore?.buildIndex(content);
			setExplorerContent(content);
			setDisabled(false);
		}
	};

	return (
		<Card className="flex flex-col">
			<Title>Custom Data</Title>
			<Subtitle>Paste, Embed and Query your data</Subtitle>
			<form
				onSubmit={(e) => {
					e.preventDefault();
				}}
				className="mt-5"
			>
				<div className="flex flex-col gap-2">
					<Textarea
						onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
							setText(e.target.value);
						}}
						id="description"
						placeholder="Start typing here..."
						value={text}
						rows={20}
					/>
				</div>
			</form>
			<Flex justifyContent="end" className="space-x-2 mt-5">
				<Button
					size="xs"
					variant="primary"
					disabled={disabled}
					onClick={() => embedContent()}
				>
					{disabled ? "Generating" : "Generate"} Embeddings
				</Button>
			</Flex>
		</Card>
	);
}
