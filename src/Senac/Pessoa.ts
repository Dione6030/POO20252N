

// Superclass
export default class Pessoa {
    protected _nome: string ;
    protected _CPF: string ;
    protected _endereco: string ;
    protected _estadoCivil: string ;

    public get estadoCivil(): string {
        return this._estadoCivil;
    }
    public set estadoCivil(v: string) {
        this._estadoCivil = v;
    }

    constructor(nome: string) {
        this._nome = nome;
        this._CPF = "";
        this._endereco = "";
        this._estadoCivil = "";
    }

    public falar(): string {
        return "Olá, eu sou uma pessoa.";
    }
}