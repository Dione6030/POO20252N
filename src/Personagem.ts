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
    equipamentosEncontrados(): { arma: string, armadura: string } {
        const arma = Util.gerarArma();
        const armadura = Util.gerarArmadura();
        return { arma, armadura };
    }

    inventarioArma: string[] = [];
    inventarioArmadura: string[] = [];

    adicionarArma(arma: string): void {
        this.inventarioArma.push(arma);
    }

    adicionarArmadura(armadura: string): void {
        this.inventarioArmadura.push(armadura);
    }

    removerArma(arma: string): void {
        const index = this.inventarioArma.indexOf(arma);
        if (index > -1) {
            this.inventarioArma.splice(index, 1);
        }
    }

    removerArmadura(armadura: string): void {
        const index = this.inventarioArmadura.indexOf(armadura);
        if (index > -1) {
            this.inventarioArmadura.splice(index, 1);
        }
    }

    get inventario(): { arma?: string, armadura?: string }[] {
        const max = Math.max(this.inventarioArma.length, this.inventarioArmadura.length);
        const lista: { arma?: string, armadura?: string }[] = [];

        for (let i = 0; i < max; i++) {
            const linha: { arma?: string, armadura?: string } = {};
            const a = this.inventarioArma[i];
            const b = this.inventarioArmadura[i];
            if (a !== undefined) linha.arma = a;
            if (b !== undefined) linha.armadura = b;
            lista.push(linha);
        }
        return lista;
    }
}