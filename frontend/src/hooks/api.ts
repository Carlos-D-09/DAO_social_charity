import { useSendMessage } from "@gear-js/react-hooks";
import metaTxt from "../assets/meta/meta.txt";
import { ADDRESS } from "consts";
import { useMetadata } from "./useMetadata";

function useNFTMetadata() {
	return useMetadata(metaTxt);
}

function useSendNFTMessage() {
	const meta = useNFTMetadata();
	return useSendMessage(ADDRESS.CONTRACT_ADDRESS, meta);
}

export { useNFTMetadata, useSendNFTMessage };
