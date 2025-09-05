import { th } from "@faker-js/faker";
import { Util } from "./Util";

export type AtributosArma = {
    dano: number;
    efeitos: string[];
    tipoDano?: string;
}