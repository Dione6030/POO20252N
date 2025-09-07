import { th } from "@faker-js/faker";
import { Util } from "./Util";

    // Metodo: sistema de parsing baseado em palavras-chave ou (em RPGs) Sistema de Afixos de Itens
export type AtributosArma = {
    danoCortante: number;
    danoContundente: number;
    danoPerfurante: number;
    danoMagico: number; 
    efeitos: string[];
    tipoDano?: string;
    tipoMagia?: string;
}

function analisarArma(nome: string): AtributosArma {
    nome = nome.toLowerCase();

    const bases: Record<string, AtributosArma> = {
        "martelo": {danoContundente: 5, danoCortante: 0, danoPerfurante: 0, danoMagico: 0, efeitos: ["Atordoa inimigo (perde 1 turno)"]},
        "espada": {danoContundente: 0, danoCortante: 3, danoPerfurante: 2, danoMagico: 0, efeitos: ["25% de chanse de aparar o ataque do inimigo (ignorar o dano)"]},
        "machado": {danoContundente: 0, danoCortante: 5, danoPerfurante: 0, danoMagico: 0, efeitos: ["Corta metade das ações de turno do adversário"]},
        "mangual": {danoContundente: 3, danoCortante: 0, danoPerfurante: 2, danoMagico: 0, efeitos: ["Ignora defesa"]},
        "katana": {danoContundente: 0, danoCortante: 5, danoPerfurante: 0, danoMagico: 0, efeitos: ["Causa sangramento (dano por segundo) que pode aumentar até virar hemorragia (explosão de dano)"]},
        "foice": {danoContundente: 0, danoCortante: 1, danoPerfurante: 4, danoMagico: 0, efeitos: ["Ignora defesa"]},
        "lança": {danoContundente: 0, danoCortante: 0, danoPerfurante: 5, danoMagico: 0, efeitos: ["25% de causar dano quando o inimigo atacar"]},
        "porrete": {danoContundente: 4, danoCortante: 0, danoPerfurante: 0, danoMagico: 0, efeitos: ["25% de envenenar o inimigo (diminui os atributos do inimigo e causa dano com o tempo)"]},
        "sabre": {danoContundente: 4, danoCortante: 0, danoPerfurante: 0, danoMagico: 0, efeitos: ["50% de aparar e contra-atacar"]},
    }
}