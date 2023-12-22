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
	Title,
} from "@tremor/react";
import TextBox from "@/components/ui/textbox";
import Explorer from "@/components/ui/explorer";
import Dataset from "@/components/ui/dataset";

type Props = {};

export default function Playground({}: Props) {
	return (
		<div className="p-5">
			{/* <Title className="flex justify-center">Dashboard</Title> */}
			{/* <Text className="flex justify-center">
				Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
			</Text> */}

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
							<TextBox />
							<Explorer />
						</Grid>
					</TabPanel>
					<TabPanel>
						<Grid
							numItemsMd={1}
							numItemsLg={2}
							className="gap-6 mt-6"
						>
							<Dataset />
							<Explorer />
						</Grid>
					</TabPanel>
				</TabPanels>
			</TabGroup>
			<Text className="flex justify-center mt-5">wizenheimer</Text>
		</div>
	);
}
