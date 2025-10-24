import Disciplina from "./Disciplina";
import Pessoa from "./Pessoa";


export default class Aluno extends Pessoa {
    private _turma: string = "";
    private _disciplinasMatriculadas: Disciplina[] = [];

    private constructor(nome: string) {
        super(nome);
    }
    static FabricaDeAluno(nome: string): Aluno{
        return new Aluno(nome);
    }

    public falar(): string {
        return "Olá, eu sou um aluno.";
    }

    public falarEspecial(): string {
        // Falar da própria classe
        return this.falar();
        // Falar da superclasse
        return super.falar();
    }
}