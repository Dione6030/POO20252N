import { Util } from "./Util";

export default class Inimigo{
    private _nome: string;
    public nivel: number

    public vidaAtual: number
    public vidaMaxima: number

    public poderAtaque: number
    public poderDefesa: number
    public poderMagico: number

    public slotMagia1: string;
    public slotMagia2: string

    public experienciaConcedida: number

    public get nome(): string {
        if (this._nome.length <3 || this._nome.length >20) {
            throw new Error("Nome inválido.");
        }
        return this._nome;
    }
    constructor(nome: string) {
        this._nome = nome;
        this.nivel = 1;

        this.vidaAtual = 0;
        this.vidaMaxima = 0;

        this.poderAtaque = 0;
        this.poderDefesa = 0;
        this.poderMagico = 0;

        this.slotMagia1 = "";
        this.slotMagia2 = "";

        this.experienciaConcedida = 0;
    }
}