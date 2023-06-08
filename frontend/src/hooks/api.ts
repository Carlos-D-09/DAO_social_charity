/* import { useSendMessage } from "@gear-js/react-hooks";
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
 */
import stateMetaWasm from "assets/wasm/nft_state.meta.wasm";
import { useMetadata, useWasmMetadata } from "./useMetadata";
import metaTxt from "assets/meta/meta.txt";
import {
	useAccount,
	useReadWasmState,
	useSendMessage,
} from "@gear-js/react-hooks";
import { ADDRESS } from "consts";

function useNFTMetadata() {
	return useMetadata(metaTxt);
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
