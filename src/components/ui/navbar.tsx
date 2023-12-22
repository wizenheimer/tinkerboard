import React from "react";
import { Card, Flex, Title } from "@tremor/react";
import { GithubOutlined } from "@ant-design/icons";
type Props = {};

export default function Navbar({}: Props) {
	return (
		<div>
			<Flex justifyContent="between" className="space-x-10 p-5">
				<Card className="mx-auto">
					<Flex justifyContent="start" className="space-x-4">
						<GithubOutlined />
						<Title>tinkerbird</Title>
					</Flex>
				</Card>
			</Flex>
		</div>
	);
}
