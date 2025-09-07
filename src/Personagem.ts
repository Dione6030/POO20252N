import { th } from "@faker-js/faker";
import { Util } from "./Util";

export class Personagem {
    public nome: string;
    public classe: string;
    public raca: string;
    public nivel: number
    public experiencia: number

    public tipoArma: string;
    public tipoArmadura: string;
    
    public manaAtual: number
    public manaMaxima: number
    public vidaAtual: number
    public vidaMaxima: number

    public poderAtaque: number
    public poderMagico: number
    public poderDefesa: number

    public slotMagia1: string;
    public slotMagia2: string;
    public slotMagia3: string;
    
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
        this.poderMagico = 0;
        this.poderDefesa = 0;
        
        this.slotMagia1 = "";
        this.slotMagia2 = "";
        this.slotMagia3 = "";
    }

    treinarPoderAtaque(): void {
        const incrementoDoTreino: number = Util.gerarNumeroAleatorio(5, 15);
        this.poderAtaque += incrementoDoTreino + this.poderAtaque * 1.1;
        }
    treinarPoderMagico(): void {
        const incrementoDoTreino: number = Util.gerarNumeroAleatorio(5, 15);
        this.poderMagico += incrementoDoTreino + this.poderMagico * 1.1;
        }

    treinarPoderDefesa(): void {
        const incrementoDoTreino: number = Util.gerarNumeroAleatorio(5, 15);
        this.poderDefesa += incrementoDoTreino + this.poderDefesa * 1.1;
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
            this.poderMagico += 2;
            this.poderDefesa += 2;
        }
    }

    estaVivo(): boolean{
        const vivo: number = this.vidaAtual
        return (vivo > 0)
    }

    descansar(): void{
        const recuperarVida = Math.floor(this.vidaMaxima * 0.20)
        const recuperarMana = Math.floor(this.manaMaxima * 0.20)

        this.vidaAtual = Math.min(this.vidaAtual + recuperarVida, this.vidaMaxima);
        this.manaAtual = Math.min(this.manaAtual + recuperarMana, this.manaMaxima);

        console.log(`Você descansou e recuperou ${recuperarVida} de vida e ${recuperarMana} de mana.`);
        console.log(`Vida atual: ${this.vidaAtual}/${this.vidaMaxima}, Mana atual: ${this.manaAtual}/${this.manaMaxima}`);
    }

    procurarEquipamento(): boolean{
        const encontrouEquipamentos: number = Util.gerarNumeroAleatorio(0, 1);
        return (encontrouEquipamentos === 1)
    }
    equipamentosEncontrados(): { arma: string, armadura: string } {
        const arma = Util.gerarArma();
        const armadura = Util.gerarArmadura();

        // vai guardar no inventário automaticamente
        this.adicionarArma(arma);
        this.adicionarArmadura(armadura);
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
    equiparArma(indice: number): boolean {
        const i= indice - 1;
        const arma = this.inventarioArma[i];
        if (arma !== undefined) {
            this.tipoArma = arma;
            console.log(`Arma ${this.tipoArma} equipada.`);
            return true;
        } else{
            console.log("Índice inválido para equipar arma.");
            return false;
        }
    }
    equiparArmadura(indice: number): boolean {
        const i= indice - 1;
        const armadura = this.inventarioArmadura[i];
        if (armadura !== undefined) {
            this.tipoArmadura = armadura;
            console.log(`Armadura ${this.tipoArmadura} equipada.`);
            return true;
        } else{
            console.log("Índice inválido para equipar armadura.");
            return false;
        }
    }

    
    removerArma(indice: number): boolean {
        const i = indice - 1;
        if (i >= 0 && i < this.inventarioArma.length) {
            const removida = this.inventarioArma.splice(i, 1)[0];
            console.log(`Arma removida: ${removida}`);
            return true;
        }
        console.log("Índice de arma inválido.");
        return false;
    }
    
    removerArmadura(indice: number): boolean {
        const i = indice - 1;
        if (i >= 0 && i < this.inventarioArmadura.length) {
            const removida = this.inventarioArmadura.splice(i, 1)[0];
            console.log(`Armadura removida: ${removida}`);
            return true;
        }
        console.log("Índice de armadura inválido.");
        return false;
    }

    pesquisarMagia(): boolean{
        const aprendeuMagia: number = Util.gerarNumeroAleatorio(0, 1);
        return (aprendeuMagia === 1)
    }
    magiaAprendida(): { magiaNi1: string, magiaNi2: string } {
        const magiaNi1 = Util.gerarMagia1();
        const magiaNi2 = Util.gerarMagia2();

        return { magiaNi1, magiaNi2 };
    }

    ataqueComArma(): void{
        this.vidaAtual = this.vidaAtual - this.poderAtaque
    }
    ataqueComMagia(): void{
        this.vidaAtual = this.vidaAtual - this.poderMagico
        this.manaAtual = this.manaAtual - this.poderMagico
    }

}