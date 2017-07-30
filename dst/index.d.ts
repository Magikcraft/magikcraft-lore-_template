import { ICanon } from 'magikcraft.io';
export declare const _lore: {
    namespace: string;
    loreToLoad: {
        name: string;
        code: (canon: ICanon) => (msg: string) => void;
        cost: number;
    }[];
};
