import { Util } from "./Util";

export class Personagem {
    nome: string;
    classe: string;
    raca: string;
    nivel: number
    experiencia: number

    tipoArma: string;
    tipoArmadura: string;
    
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

        this.tipoArma = "";
        this.tipoArmadura = "";

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

    subirNivel(): void{
        const experienciaNecessaria: number = this.nivel * 100;
        if (this.experiencia >= experienciaNecessaria){
            this.nivel += 1;
            this.experiencia = 0; // Reseta a experiência
            // Você pode adicionar outros efeitos de subir de nível aqui
            this.manaMaxima += 3;
            this.vidaMaxima += 4;
            this.poderAtaque += 2;
            this.poderDefesa += 2;
        }
    }

    procurarEquipamento(): boolean{
        const encontrouEquipamentos: number = Util.gerarNumeroAleatorio(0, 1);
        return (encontrouEquipamentos === 1)
    }
    equpamentosEncontrados(): string{
        Util.gerarArma();
        Util.gerarArmadura();
        return Util.gerarArma(), Util.gerarArmadura();
    }


}