import Pessoa from "./Pessoa";


export default class Funcionario extends Pessoa {
    private _salario: number = 0;

    constructor(nome: string) {
        super(nome);
    }
}