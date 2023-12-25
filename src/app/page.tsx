import Navbar from "@/components/ui/navbar";
import Playground from "./playground";
import { VectorStoreProvider } from "@/components/ui/vectorstoreContext";

export default function Home() {
	return (
		<main>
			<Navbar />
			{/* <VectorStoreProvider>  */}
			<Playground />
			{/* </VectorStoreProvider> */}
		</main>
	);
}
