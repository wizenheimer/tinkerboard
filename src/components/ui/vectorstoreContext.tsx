import { vectorStoreHandler } from "@/services/vectorstore";
import {
	Dispatch,
	SetStateAction,
	createContext,
	useContext,
	useState,
} from "react";
import { VectorStore } from "tinkerbird";

export type VectorStoreContextType = [
	vectorStore: Promise<VectorStore>,
	setVectorStore: Dispatch<SetStateAction<Promise<VectorStore>>>
];

type Props = {
	children: React.ReactNode;
};

export const VectorStoreContext = createContext<
	VectorStoreContextType | undefined
>(undefined);

export const VectorStoreProvider = ({ children }: Props) => {
	const [vectorStore, setVectorStore] = useState(vectorStoreHandler());

	return (
		<VectorStoreContext.Provider value={[vectorStore, setVectorStore]}>
			{children}
		</VectorStoreContext.Provider>
	);
};

export const useVectorStoreContext = () => {
	const context = useContext(VectorStoreContext);
	if (!context)
		throw new Error(
			"useVectorStoreContext must be inside a VectorStoreProvider"
		);
	return context;
};
