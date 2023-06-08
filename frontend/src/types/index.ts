import { HexString } from "@polkadot/util/types";

type Token = {
    approvedAccountIds: HexString[];
    description: string;
    id: string;
    media: string;
    name: string;
    ownerId: HexString;
    reference: string;
};

export type { Token };