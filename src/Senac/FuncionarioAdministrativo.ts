import Funcionario from "./Funcionario";
import Pessoa from "./Pessoa";


export default class FuncionarioAdministrativo extends Funcionario {
    private _setor: string = "";

    constructor(nome: string) {
        super(nome);
    }
}