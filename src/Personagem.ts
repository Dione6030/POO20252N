import { Util } from "./Util";

export class Personagem {
    nome: string;
    classe: string;
    raca: string;
    nivel: number
    experiencia: number
    tipoEquipamento: string;
    
    manaAtual: number
    manaMaxima: number
    vidaAtual: number
    vidaMaxima: number

    poderAtaque: number
    poderDefesa: number
    
    constructor(nome: string) {
        this.nome = nome;
        this.classe = "";
        this.raca = "";
        this.nivel = 1;
        this.experiencia = 0;
        this.tipoEquipamento = "";

        this.manaAtual = 0;
        this.manaMaxima = 0;
        this.vidaAtual = 0;
        this.vidaMaxima = 0;

        this.poderAtaque = 0;
        this.poderDefesa = 0;
    }

    treinarPoderAtaque(): void {
        const incrementoDoTreino: number = Util.gerarNumeroAleatorio(5, 15);
        this.poderAtaque += incrementoDoTreino + this.poderAtaque * 1.1;
        }

    treinarPoderDefesa(): void {
        const incrementoDoTreino: number = Util.gerarNumeroAleatorio(5, 15);
        this.poderDefesa += incrementoDoTreino + this.poderDefesa * 1.1;
        }

    estaVivo(){
        return (this.vidaAtual > 0)
    }
}