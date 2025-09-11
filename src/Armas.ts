import { th } from "@faker-js/faker";
import { Util } from "./Util";

    // Metodo: sistema de parsing baseado em palavras-chave ou (em RPGs) Sistema de Afixos de Itens
export type AtributosArma = {
    danoCortante: number;
    danoContundente: number;
    danoPerfurante: number;
    danoMagico: number; 
    efeitos: string[];
    tipoDano?: number; // Dano dos Elementos (fogo, gelo, trovão e sombra)
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
        "porrete": {danoContundente: 4, danoCortante: 0, danoPerfurante: 0, danoMagico: 0, efeitos: ["25% de envenenar o inimigo (diminui os atributos do inimigo e causa dano com os turnos)"]},
        "sabre": {danoContundente: 4, danoCortante: 0, danoPerfurante: 0, danoMagico: 0, efeitos: ["50% de aparar e contra-atacar"]},
        "adaga": {danoContundente: 0, danoCortante: 2, danoPerfurante: 3, danoMagico: 0, efeitos: ["Pode atacar duas vezes por turno, causa sangramento (dano por segundo)"]},
        "luvas": {danoContundente: 4, danoCortante: 0, danoPerfurante: 1, danoMagico: 0, efeitos: ["Pode atacar duas vezes por turno"]},
        "cajado": {danoContundente: 0, danoCortante: 0, danoPerfurante: 0, danoMagico: 5, efeitos: ["Magias dão o dobro de dano"]},
        "varinha": {danoContundente: 0, danoCortante: 0, danoPerfurante: 0, danoMagico: 5, efeitos: ["Permite lançar magias adicionais por turno"]}
    }

    const mods: Record<string, Partial<AtributosArma>> = {
        "gigante": {efeitos: ["Ataques lentos (exige mais ações para atacar), causa o dobro de dano"]},
        "longa": {efeitos: ["Permite afastar inimigos (evita ataques corpo a corpo)"]},
        "curta": {efeitos: ["Permite atacar duas vezes por turno"]},
        "flamejante": {tipoDano: 2, efeitos: ["Causa dano do tipo fogo e queimadura (dano por segundo)"]},
        "ignea": {tipoDano: 5, efeitos: ["Causa dano do tipo fogo e queimadura (dano por segundo)"]},
        "congelante": {tipoDano: 2, efeitos: ["Causa dano do tipo gelo e lentidão (reduz ações por turno)"]},
        "glacial": {tipoDano: 5, efeitos: ["Causa dano do tipo gelo e lentidão (reduz ações por turno)"]},
        "trovejante": {tipoDano: 2, efeitos: ["Causa dano do tipo trovão e atordoamento (perde 1 turno)"]},
        "tempestuosa": {tipoDano: 5, efeitos: ["Causa dano do tipo trovão e atordoamento (perde 1 turno)"]},
        "sombria": {tipoDano: 2, efeitos: ["Causa dano do tipo sombra e envenenamento (diminui atributos e causa dano com os turnos)"]},
        "abissal": {tipoDano: 5, efeitos: ["Causa dano do tipo sombra e envenenamento (diminui atributos e causa dano com os turnos)"]}
    }
}