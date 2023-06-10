import {
	useAccount,
	useReadWasmState,
	useSendMessage,
} from "@gear-js/react-hooks";
import { ADDRESS } from "consts";
import { Params, Token } from "types";
import { useParams } from "react-router-dom";
import stateMetaWasm from "assets/wasm/nft.meta.wasm";
import metaTxt from "assets/meta/nft.meta.txt";
import { useMetadata, useWasmMetadata } from "./useMetadata";
// import moduleName from "../assets/wasm/nft.meta.wasm";

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

function useNFT() {
	const { id } = useParams() as Params;
	const { state } = useNFTState<Token>("token", id);
	return state;
}

function useNFTs() {
	const { state, isStateRead } = useNFTState<Token[]>("all_tokens", null);
	return { nfts: state, isNftStateRead: isStateRead };
}

function useOwnerNFTs() {
	const { account } = useAccount();
	const owner = account?.decodedAddress;

	const { state, isStateRead } = useNFTState<Token[]>(
		"tokens_for_owner",
		owner
	);

	return { ownerNFTs: state, isOwnerNFTsRead: isStateRead };
}

function useApprovedNFTs() {
	const { account } = useAccount();
	const decodedAddress = account?.decodedAddress;

	const { state, isStateRead } = useNFTState<Token[]>(
		"approved_tokens",
		decodedAddress
	);

	return { approvedNFTs: state, isApprovedNFTsRead: isStateRead };
}

export { useNFT, useNFTs, useOwnerNFTs, useApprovedNFTs, useSendNFTMessage };
