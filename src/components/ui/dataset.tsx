"use client";
import {
	Card,
	SearchSelect,
	SearchSelectItem,
	Title,
	Flex,
	Subtitle,
	Button,
} from "@tremor/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import SampleTable from "./sampletable";
import { datasetHandler } from "@/services/handler";
import { VectorStore } from "tinkerbird";

type Props = {
	setExplorerContent: Dispatch<SetStateAction<Content[] | undefined>>;
	vectorStore: VectorStore | undefined;
};

export default function Dataset({ setExplorerContent, vectorStore }: Props) {
	const [dataset, setDataset]: [
		string | undefined,
		Dispatch<SetStateAction<string | undefined>>
	] = useState();

	const [size, setSize]: [
		string | undefined,
		Dispatch<SetStateAction<string | undefined>>
	] = useState();

	const [sampleContent, setSampleContent]: [
		Content[] | undefined,
		Dispatch<SetStateAction<Content[] | undefined>>
	] = useState();

	const [disabled, setDisabled]: [
		boolean | undefined,
		Dispatch<SetStateAction<boolean | undefined>>
	] = useState();

	useEffect(() => {
		setDataset("SET_1");
		setSize("10");
		setDisabled(false);
	}, []);

	useEffect(() => {
		setDisabled(true);
		const content = datasetHandler(dataset);
		setSampleContent(content);
		setDisabled(false);
	}, [dataset]);

	const loadExplorerContent = () => {
		setDisabled(true);
		const content = datasetHandler(dataset, size);
		vectorStore?.deleteIndex();
		vectorStore?.buildIndex(content);
		setExplorerContent(content);
		setDisabled(false);
	};

	return (
		<Card className="flex flex-col">
			<Title>Dataset</Title>
			<Subtitle>Test on a pre-defined dataset</Subtitle>
			<Flex justifyContent="end" className="space-x-2 mt-5">
				<div className="max-w-sm mx-auto space-y-6 grow">
					<SearchSelect
						value={dataset}
						placeholder="Dataset"
						onValueChange={(dataset) => {
							setDataset(dataset);
						}}
					>
						<SearchSelectItem value="SET_1">SET_1</SearchSelectItem>
						<SearchSelectItem value="SET_2">SET_2</SearchSelectItem>
						<SearchSelectItem value="SET_3">SET_3</SearchSelectItem>
						<SearchSelectItem value="SET_4">SET_4</SearchSelectItem>
					</SearchSelect>
				</div>
				<div className="max-w-sm mx-auto space-y-6">
					<SearchSelect
						value={size}
						placeholder="Size"
						onValueChange={(size) => {
							setSize(size);
						}}
					>
						<SearchSelectItem value="10">10</SearchSelectItem>
						<SearchSelectItem value="100">100</SearchSelectItem>
						<SearchSelectItem value="1000">1000</SearchSelectItem>
						<SearchSelectItem value="10000">10000</SearchSelectItem>
					</SearchSelect>
				</div>
			</Flex>
			<SampleTable sampleContent={sampleContent} />
			<Flex justifyContent="end" className="space-x-2 mt-5">
				<Button
					size="xs"
					variant="primary"
					className="mr-4"
					onClick={() => {
						loadExplorerContent();
					}}
					disabled={disabled}
				>
					{disabled ? "Loading" : "Load"} Dataset
				</Button>
			</Flex>
		</Card>
	);
}
