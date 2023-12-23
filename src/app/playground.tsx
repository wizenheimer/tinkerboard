"use client";

import {
	Card,
	Grid,
	Tab,
	TabGroup,
	TabList,
	TabPanel,
	TabPanels,
	Text,
} from "@tremor/react";

import TextBox from "@/components/ui/textbox";
import Explorer from "@/components/ui/explorer";
import Dataset from "@/components/ui/dataset";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { datasetHandler } from "@/services/handler";

type Props = {};

export default function Playground({}: Props) {
	const [explorerContent, setExplorerContent]: [
		Content[] | undefined,
		Dispatch<SetStateAction<Content[] | undefined>>
	] = useState();

	useEffect(() => {
		setExplorerContent(datasetHandler());
	}, []);

	return (
		<div className="p-5">
			<TabGroup className="mt-2">
				<div className="flex justify-center">
					<TabList variant="solid">
						<Tab>Custom Data</Tab>
						<Tab>Predefined Data</Tab>
					</TabList>
				</div>
				<TabPanels>
					<TabPanel>
						<Grid
							numItemsMd={1}
							numItemsLg={2}
							className="gap-6 mt-6"
						>
							<TextBox setExplorerContent={setExplorerContent} />
							<Explorer
								explorerContent={explorerContent}
								setExplorerContent={setExplorerContent}
							/>
						</Grid>
					</TabPanel>
					<TabPanel>
						<Grid
							numItemsMd={1}
							numItemsLg={2}
							className="gap-6 mt-6"
						>
							<Dataset setExplorerContent={setExplorerContent} />
							<Explorer
								explorerContent={explorerContent}
								setExplorerContent={setExplorerContent}
							/>
						</Grid>
					</TabPanel>
				</TabPanels>
			</TabGroup>
			<Text className="flex justify-center mt-5">wizenheimer</Text>
		</div>
	);
}
