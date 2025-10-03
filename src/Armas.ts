import { th } from "@faker-js/faker";
import { Util } from "./Util";

    // Metodo: sistema de parsing baseado em palavras-chave ou (em RPGs) Sistema de Afixos de Itens

export type ArmaFisica = {
    tipoArma: "fisica";
    nomeArma?: string;

    danoCortante: number;
    danoContundente: number;
    danoPerfurante: number;

    tipoElemento?: string; // Tipo do dano elemental (fogo, gelo, trovão e sombra)
    danoElemental?: number; // Dano dos Elementos (fogo, gelo, trovão e sombra)

    efeitos: string[];
};

export type ArmaMagica = {
    tipoArma: "magica";
    nomeArma?: string;

    danoMagico: number;
    potenciaElementalMagico?: number; // Potencializa magias de um tipo (fogo, gelo, trovão e sombra)

    tipoElemento?: string; // Tipo do dano elemental (fogo, gelo, trovão e sombra)
    danoElemental?: number; // Dano dos Elementos (fogo, gelo, trovão e sombra)

    efeitos: string[];
};
export type AtributosArma = ArmaFisica | ArmaMagica;

function analisarArma(nome: string): AtributosArma {
    nome = nome.toLowerCase();

    const bases: Record<string, AtributosArma> = {
        "martelo": {tipoArma:"fisica", danoContundente: 5, danoCortante: 0, danoPerfurante: 0, efeitos: ["Atordoa inimigo (perde 1 turno)"]},
        "espada": {tipoArma:"fisica", danoContundente: 0, danoCortante: 3, danoPerfurante: 2, efeitos: ["25% de chanse de aparar o ataque do inimigo (ignorar o dano)"]},
        "machado": {tipoArma:"fisica", danoContundente: 0, danoCortante: 5, danoPerfurante: 0, efeitos: ["Corta metade das ações de turno do adversário"]},
        "mangual": {tipoArma:"fisica", danoContundente: 3, danoCortante: 0, danoPerfurante: 2, efeitos: ["Ignora defesa"]},
        "katana": {tipoArma:"fisica", danoContundente: 0, danoCortante: 5, danoPerfurante: 0, efeitos: ["Causa sangramento (dano por segundo) que pode aumentar até virar hemorragia (explosão de dano)"]},
        "foice": {tipoArma:"fisica", danoContundente: 0, danoCortante: 1, danoPerfurante: 4, efeitos: ["Ignora defesa"]},
        "lança": {tipoArma:"fisica", danoContundente: 0, danoCortante: 0, danoPerfurante: 5, efeitos: ["25% de causar dano quando o inimigo atacar"]},
        "porrete": {tipoArma:"fisica", danoContundente: 4, danoCortante: 0, danoPerfurante: 0, efeitos: ["25% de envenenar o inimigo (diminui os atributos do inimigo e causa dano com os turnos)"]},
        "sabre": {tipoArma:"fisica", danoContundente: 4, danoCortante: 0, danoPerfurante: 0, efeitos: ["50% de aparar e contra-atacar"]},
        "adaga": {tipoArma:"fisica", danoContundente: 0, danoCortante: 2, danoPerfurante: 3, efeitos: ["Pode atacar duas vezes por turno, causa sangramento (dano por segundo)"]},
        "luvas": {tipoArma:"fisica", danoContundente: 4, danoCortante: 0, danoPerfurante: 1, efeitos: ["Pode atacar duas vezes por turno"]},
        "cajado": {tipoArma:"magica", danoMagico: 5, efeitos: ["Magias dão o dobro de dano"]},
        "varinha": {tipoArma:"magica", danoMagico: 5, efeitos: ["Permite lançar magias adicionais por turno"]}
    }

    const mods: Record<string, Partial<AtributosArma>> = {
        "gigante": {efeitos: ["Ataques lentos (exige mais ações para atacar), causa o dobro de dano"]},
        "longa": {efeitos: ["Permite afastar inimigos (evita ataques corpo a corpo)"]},
        "curta": {efeitos: ["Permite atacar duas vezes por turno"]},
        "flamejante": {tipoElemento: "Fogo", danoElemental: 2, potenciaElementalMagico: 50, efeitos: ["Causa dano do tipo fogo e queimadura (dano por segundo), causa 50% a mais de dano em inimigos de gelo, potencializa magias de fogo em 50%"]},
        "ignea": {tipoElemento: "Fogo", danoElemental: 5, potenciaElementalMagico: 100, efeitos: ["Causa dano do tipo fogo e queimadura (dano por segundo), causa 100% a mais de dano em inimigos de gelo, potencializa magias de fogo em 100%"]},
        "congelante": {tipoElemento: "Gelo", danoElemental: 2, potenciaElementalMagico: 50, efeitos: ["Causa dano do tipo gelo e lentidão (reduz ações por turno), causa 50% a mais de dano em inimigos de trovão potencializa magias de gelo em 50%"]},
        "glacial": {tipoElemento: "Gelo", danoElemental: 5, potenciaElementalMagico: 100, efeitos: ["Causa dano do tipo gelo e lentidão (reduz ações por turno), causa 100% a mais de dano em inimigos de trovão potencializa magias de gelo em 100%"]},
        "trovejante": {tipoElemento: "Trovão", danoElemental: 2, potenciaElementalMagico: 50, efeitos: ["Causa dano do tipo trovão e atordoamento (perde 1 turno), causa 50% a mais de dano em inimigos de sombra potencializa magias de trovão em 50%"]},
        "tempestuosa": {tipoElemento: "Trovão", danoElemental: 5, potenciaElementalMagico: 100, efeitos: ["Causa dano do tipo trovão e atordoamento (perde 1 turno), causa 100% a mais de dano em inimigos de sombra potencializa magias de trovão em 100%"]},
        "sombria": {tipoElemento: "Sombra", danoElemental: 2, potenciaElementalMagico: 50, efeitos: ["Causa dano do tipo sombra e envenenamento (diminui atributos e causa dano com os turnos), causa 50% a mais de dano em inimigos de fogo potencializa magias de sombra em 50%"]},
        "abissal": {tipoElemento: "Sombra", danoElemental: 5, potenciaElementalMagico: 100, efeitos: ["Causa dano do tipo sombra e envenenamento (diminui atributos e causa dano com os turnos), causa 100% a mais de dano em inimigos de fogo potencializa magias de sombra em 100%"]},
        "solar": {tipoElemento: "Sol", danoElemental: 5, potenciaElementalMagico: 100, efeitos: ["Causa dano de fogo e trovão, cega inimigos (-80% de chance de acerto), inimigo sofre com queimaduras e atordoamentos a cada 2 turnos, causa 150% a mais de dano em inimigos de gelo e sombra, potencializa magias de fogo e trovão em 100%"]},
        "lunar": {tipoElemento: "Lua", danoElemental: 5, potenciaElementalMagico: 100, efeitos: ["Causa dano de gelo e sombra, cria reflexos do usuário (-75% de chance de acerto), inimigo sofre com lentidão e envenenamento, causa 150% a mais de dano em inimigos de fogo e trovão, potencializa magias de gelo e sombra em 100%"]},
    }
    
    let atributos: AtributosArma | null = null;

        // Procura pela base da arma
    let baseEncontrada = false;
    for (const chave in bases) {
        if (nome.includes(chave)) {
            atributos = {nomeArma: nome, ...bases[chave] } as AtributosArma; // Copia os atributos base
            baseEncontrada = true;
            break;
        }
    }
    if (!atributos) {
        throw new Error("Tipo de arma desconhecido");
    }
    
        // Aplica os modificadores
    for (const chave in mods) {
        if (nome.includes(chave)) {
            const mod = mods[chave];

            if (!mod) continue;

            // Aplica modificadores compatíveis com armas físicas
            if (atributos.tipoArma === "fisica"){
                if ("danoCortante" in mod && mod?.danoCortante) atributos.danoCortante += mod.danoCortante;
                if ("danoContundente" in mod && mod?.danoContundente) atributos.danoContundente += mod.danoContundente;
                if ("danoPerfurante" in mod && mod?.danoPerfurante) atributos.danoPerfurante += mod.danoPerfurante;
            }

            // Aplica modificadores compatíveis com armas mágicas
            if (atributos.tipoArma === "magica"){
                if ("danoMagico" in mod && mod?.danoMagico) atributos.danoMagico += mod.danoMagico;
                if ("potenciaElementalMagico" in mod && mod?.potenciaElementalMagico) atributos.potenciaElementalMagico = (atributos.potenciaElementalMagico ?? 0) + mod.potenciaElementalMagico;
            }

            // Aplica modificadores comuns a ambos os tipos
            if (mod?.danoElemental) atributos.danoElemental = (atributos.danoElemental ?? 0) + mod.danoElemental;
            if (mod?.tipoElemento) atributos.tipoElemento = mod.tipoElemento;
            if (mod?.efeitos) atributos.efeitos.push(...mod.efeitos);
        }
    }
    
    return atributos;
}