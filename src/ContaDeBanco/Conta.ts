import { th } from "@faker-js/faker";

export class Conta{
    sacar(valor: number): void {
        if (valor <= 0){
            throw new Error("Valor inválido para saque");
        }
        this.saldo -= valor;
    }
    saldo: number = 0;

    depositar(valor: number): void{
        if (valor >= 0){
            this.saldo += valor;
        }
    }

    extrato(): number{
        return this.saldo;
    }
}