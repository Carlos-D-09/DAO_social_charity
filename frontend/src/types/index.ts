import { HexString } from "@polkadot/util/types";

type Token = {
    approvedAccountIds: HexString[];
    pressure: string;
    ph: string;
    residence: string;
    id: string;
    media: string;
    name: string;
    ownerId: HexString;
    reference: string;
};

export type { Token };