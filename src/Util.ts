import { fakerPT_BR as faker } from '@faker-js/faker';

export class Util {
    
    static gerarNumeroAleatorio(minimo: number, maximo: number): number {
        return minimo + Math.round(Math.random()* (maximo - minimo))
    }

    static gerarArma(): string{
        const armas = [
            "Espada Longa",
            "Machado de Batalha",
            "Cajado Mágico",
            "Arco Longo",
            "Adaga",
            "Lança",
            "Martelo de Guerra",
            "Cetro Arcano",
            "Foice",
            "Chicote"
        ]
        const indice = Util.gerarNumeroAleatorio(0, armas.length - 1)
        const nomeAleatorio = faker.person.firstName();
        const nivelAleatorio = Util.gerarNumeroAleatorio(1, 3);
        return `${armas[indice]} de ${nomeAleatorio} [Nível: ${nivelAleatorio}]`;
    }
    static gerarArmadura(): string{
        const armaduras = [
            "Armadura de Placas",
            "Cota de Malha",
            "Manto Encantado",
            "Túnica Leve",
        ]
        const indice = Util.gerarNumeroAleatorio(0, armaduras.length - 1)
        const nomeAleatorio = faker.person.firstName();
        const nivelAleatorio = Util.gerarNumeroAleatorio(1, 3);
        return `${armaduras[indice]} de ${nomeAleatorio} [Nível: ${nivelAleatorio}]`;
    }

}

for (let index = 0; index < 10; index++) {
    const arma = Util.gerarArma();
    const armadura = Util.gerarArmadura();
    console.log(`Arma: ${arma} | Armadura: ${armadura}`);
}