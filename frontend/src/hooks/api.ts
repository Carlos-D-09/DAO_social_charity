import stateMetaWasm from "assets/wasm/nft.meta.wasm";
import metaTxt from "assets/meta/nft.meta.txt";
// import metaTxt from "assets/meta/nft.meta.txt";
import { Token } from "types";
import {
	useAccount,
	useReadWasmState,
	useSendMessage,
} from "@gear-js/react-hooks";
import { ADDRESS } from "consts";
import { useMetadata, useWasmMetadata } from "./useMetadata";

function useNFTMetadata() {
	return useMetadata(metaTxt);
}

function useSendNFTMessage() {
	const meta = useNFTMetadata();
	return useSendMessage(ADDRESS.CONTRACT_ADDRESS, meta);
}

function useNFTState<T>(functionName: string, payload?: any) {
	const { buffer } = useWasmMetadata(stateMetaWasm);
	return useReadWasmState<T>(
		ADDRESS.CONTRACT_ADDRESS,
		buffer,
		functionName,
		payload
	);
}

function useNFTs() {
	const { state, isStateRead } = useNFTState<Token[]>("all_tokens", null);
	return { nfts: state, isNftStateRead: isStateRead };
}

export { useNFTMetadata, useSendNFTMessage, useNFTs };
