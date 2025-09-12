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
    tipoMagia?: number; // Potencializa magias de um tipo (fogo, gelo, trovão e sombra)
    tipoElemento?: string; // Tipo do dano elemental (fogo, gelo, trovão e sombra)
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
        "flamejante": {tipoElemento: "Fogo", tipoDano: 2, tipoMagia: 50, efeitos: ["Causa dano do tipo fogo e queimadura (dano por segundo), causa 50% a mais de dano em inimigos de gelo, potencializa magias de fogo em 50%"]},
        "ignea": {tipoElemento: "Fogo", tipoDano: 5, tipoMagia: 100, efeitos: ["Causa dano do tipo fogo e queimadura (dano por segundo), causa 100% a mais de dano em inimigos de gelo, potencializa magias de fogo em 100%"]},
        "congelante": {tipoElemento: "Gelo", tipoDano: 2, tipoMagia: 50, efeitos: ["Causa dano do tipo gelo e lentidão (reduz ações por turno), causa 50% a mais de dano em inimigos de trovão potencializa magias de gelo em 50%"]},
        "glacial": {tipoElemento: "Gelo", tipoDano: 5, tipoMagia: 100, efeitos: ["Causa dano do tipo gelo e lentidão (reduz ações por turno), causa 100% a mais de dano em inimigos de trovão potencializa magias de gelo em 100%"]},
        "trovejante": {tipoElemento: "Trovão", tipoDano: 2, tipoMagia: 50, efeitos: ["Causa dano do tipo trovão e atordoamento (perde 1 turno), causa 50% a mais de dano em inimigos de sombra potencializa magias de trovão em 50%"]},
        "tempestuosa": {tipoElemento: "Trovão", tipoDano: 5, tipoMagia: 100, efeitos: ["Causa dano do tipo trovão e atordoamento (perde 1 turno), causa 100% a mais de dano em inimigos de sombra potencializa magias de trovão em 100%"]},
        "sombria": {tipoElemento: "Sombra", tipoDano: 2, tipoMagia: 50, efeitos: ["Causa dano do tipo sombra e envenenamento (diminui atributos e causa dano com os turnos), causa 50% a mais de dano em inimigos de fogo potencializa magias de sombra em 50%"]},
        "abissal": {tipoElemento: "Sombra", tipoDano: 5, tipoMagia: 100, efeitos: ["Causa dano do tipo sombra e envenenamento (diminui atributos e causa dano com os turnos), causa 100% a mais de dano em inimigos de fogo potencializa magias de sombra em 100%"]},
        "solar": {tipoElemento: "Sol", tipoDano: 5, tipoMagia: 100, efeitos: ["Causa dano de fogo e trovão, cega inimigos (-80% de chance de acerto), inimigo sofre com queimaduras e atordoamentos a cada 2 turnos, causa 150% a mais de dano em inimigos de gelo e sombra, potencializa magias de fogo e trovão em 100%"]},
        "lunar": {tipoElemento: "Lua", tipoDano: 5, tipoMagia: 100, efeitos: ["Causa dano de gelo e sombra, cria reflexos do usuário (-75% de chance de acerto), inimigo sofre com lentidão e envenenamento, causa 150% a mais de dano em inimigos de fogo e trovão, potencializa magias de gelo e sombra em 100%"]},
    }

    let atributos: AtributosArma = { danoCortante: 0, danoContundente: 0, danoPerfurante: 0, danoMagico: 0, efeitos: [] };

    for (const chave in bases) {
        if (nome.includes(chave)) {
            at
        }
    }
}