import Funcionario from "./Funcionario";
import Pessoa from "./Pessoa";


export default class FuncionarioProfessor extends Funcionario{
    private _titulacao: string = "";

    constructor(nome: string) {
        super(nome);
    }
    
}