import { th } from "@faker-js/faker";
import { Util } from "./Util";
//Coloque isso no copilot!
/*
 eu quero que os atributos nome, nivel e raça da classe personagem e inimigo fiquem em uma unica superclasse que ficaria em um arquivo chamado Criatura.ts e os atributos de classe, mana, vida, poderFísico, Mágico e Defesa, em sejam associados de um arquivo chamado Atributos.ts, quero também que o tipoArma e Armadura se Associem ao "Armas.ts" e "Armaduras.ts", o atributo "classe" deve ser associado de um arquivo chamado "classe.ts", os slots de magia vão ser associados de um arquivo "magia.ts".
*/

export default class Personagem {
    private _nome: string;
    private _classe: string;
    private _raca: string;
    private _nivel: number
    private _experiencia: number

    private _tipoArma: string;
    private _tipoArmadura: string;
    
    private _manaAtual: number
    private _manaMaxima: number
    private _vidaAtual: number
    private _vidaMaxima: number

    private _poderFísico: number
    private _poderMagico: number
    private _poderDefesa: number

    private _slotMagia1: string;
    private _slotMagia2: string;
    private _slotMagia3: string;

    public get nome(): string {
        return this._nome;
    }
    public set nome(novoNome: string) {
        if (this._nome.length <3 || this._nome.length >20) {
            throw new Error("Nome inválido.");
        }
        this._nome = novoNome;
    }

    public get classe(): string {
        return this._classe;
    }

    public get raca(): string {
        return this._raca;
    }

    public get nivel(): number {
        if (this._nivel > 4) {
            this._nivel = 4;
        }
        if (this.nivel < 1){
            this._nivel = 1;
        }
        return this._nivel;
    }

    public get experiencia(): number {
        if (this._nivel > 3) {
            this._experiencia = 0;
        }
        return this._experiencia;
    }

    public get tipoArma(): string {
        if (!Util.armaExiste(this._tipoArma)){
            console.log("Personagem sem arma, procure por equipamentos.");
            return "";
        }
        if (this._tipoArma.length === 0){
            console.log("Personagem sem arma, procure por equipamentos.");
            return "";
        }
        return this._tipoArma;
    }

    public get tipoArmadura(): string {
        if (!Util.armaExiste(this._tipoArma)){
            console.log("Personagem sem armadura, procure por equipamentos.");
            return "";
        }
        if (this._tipoArmadura.length === 0){
            console.log("Personagem sem armadura, procure por equipamentos.");
            return "";
        }
        return this._tipoArmadura;
    }

    public get manaAtual(): number {
        if (this._manaAtual < 0) {
            this._manaAtual = 0;
        }
        return this._manaAtual;
    }

    public get manaMaxima(): number {
        if (this._manaMaxima < 0) {
            this._manaMaxima = 0;
        }
        return this._manaMaxima;
    }

    public get vidaAtual(): number {
        if (this._vidaAtual < 0) {
            this._vidaAtual = 0;
            !this.estaVivo()
        }
        return this._vidaAtual;
    }

    public get vidaMaxima(): number {
        return this._vidaMaxima;
    }

    public get poderFísico(): number {
        return this._poderFísico;
    }

    public get poderMagico(): number {
        return this._poderMagico;
    }

    public get poderDefesa(): number {
        return this._poderDefesa;
    }

    public get slotMagia1(): string {
        return this._slotMagia1;
    }

    public get slotMagia2(): string {
        return this._slotMagia2;
    }

    public get slotMagia3(): string {
        return this._slotMagia3;
    }

    
    constructor(nome: string) {
        this._nome = nome;
        this._classe = "";
        this._raca = "";
        this._nivel = 1;
        this._experiencia = 0;

        this._tipoArma = "";
        this._tipoArmadura = "";

        this._manaAtual = 0;
        this._manaMaxima = 0;
        this._vidaAtual = 0;
        this._vidaMaxima = 0;

        this._poderFísico = 0;
        this._poderMagico = 0;
        this._poderDefesa = 0;
        
        this._slotMagia1 = "";
        this._slotMagia2 = "";
        this._slotMagia3 = "";
    }
    
    estaVivo(): boolean{
        const vivo: number = this._vidaAtual
        return (vivo > 0)
    }

    treinarPoderFísico(): void {
        const incrementoDoTreino: number = Util.gerarNumeroAleatorio(5, 15);
        this._poderFísico += incrementoDoTreino + this._poderFísico * 1.1;
        }
    treinarPoderMagico(): void {
        const incrementoDoTreino: number = Util.gerarNumeroAleatorio(5, 15);
        this._poderMagico += incrementoDoTreino + this._poderMagico * 1.1;
        }

    treinarPoderDefesa(): void {
        const incrementoDoTreino: number = Util.gerarNumeroAleatorio(5, 15);
        this._poderDefesa += incrementoDoTreino + this._poderDefesa * 1.1;
        }

    ataqueComArma(): void{
        if (this._vidaAtual - this._poderFísico < 0) {
            this._vidaAtual = 0;
        } else {
            this._vidaAtual = this._vidaAtual - this._poderFísico
        }
    }
    ataqueComMagia(): void{
        if (this._manaAtual < this._poderMagico) {
            console.log("Mana insuficiente para ataque mágico.");
            return;
        }
        if (this._vidaAtual - this._poderMagico < 0) {
            this._vidaAtual = 0;
        } else {
            this._vidaAtual = this._vidaAtual - this._poderMagico
            this._manaAtual = this._manaAtual - this._poderMagico
        }
    }

    descansar(): void{
        const recuperarVida = Math.floor(this._vidaMaxima * 0.20)
        const recuperarMana = Math.floor(this._manaMaxima * 0.20)

        this._vidaAtual = Math.min(this._vidaAtual + recuperarVida, this._vidaMaxima);
        this._manaAtual = Math.min(this._manaAtual + recuperarMana, this._manaMaxima);

        console.log(`Você descansou e recuperou ${recuperarVida} de vida e ${recuperarMana} de mana.`);
        console.log(`Vida atual: ${this._vidaAtual}/${this._vidaMaxima}, Mana atual: ${this._manaAtual}/${this._manaMaxima}`);
    }

    subirNivel(): void{
        const experienciaNecessaria: number = this._nivel * 100;
        if (this._experiencia >= experienciaNecessaria){
            this._nivel += 1;
            this._experiencia = 0; // Reseta a experiência
            // Você pode adicionar outros efeitos de subir de nível aqui
            this._manaMaxima += 3;
            this._vidaMaxima += 4;
            this._poderFísico += 2;
            this._poderMagico += 2;
            this._poderDefesa += 2;
        }
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
            this._tipoArma = arma;
            console.log(`Arma ${this._tipoArma} equipada.`);
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
            this._tipoArmadura = armadura;
            console.log(`Armadura ${this._tipoArmadura} equipada.`);
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
}