import { describe, expect, it } from "@jest/globals";
import { Conta } from "./Conta";

/*
DEPOSITO
- se depoitar um valor positivo, deve aumentar o saldo
- Não deve aceitar depósito de um valor negativo
- não deve aceitar depósito de valor zero

SAQUE
- Não deve sacar valor negativo
- Deve diminuir o saldo ao sacar um valor positivo
- Não deve permitir saque maior que o saldo
- Não deve permitir saque se o saldo for zero
*/

describe("Quando depositar", () => {
    it("Deve aceitar depósito de um valor positivo", () => {
        // Cenário
        const conta: Conta = new Conta();
        conta.saldo = 0;

        //Execução
        conta.depositar(100);

        //Validação
        expect(conta.saldo).toBe(100);
    })

    it("Não deve aceitar depósito de um valor negativo", () => {
        // Cenário
        const conta: Conta = new Conta();
        conta.saldo = 100;

        //Execução
        conta.depositar(-50);

        //Validação
        expect(conta.saldo).toBe(100);
    })
})

describe("Quando sacar", () => {

    it("Não deve sacar Valor negativo", () => {
        const conta: Conta = new Conta();
        conta.saldo = 100;

        expect(() => { conta.sacar(-50) }).toThrow("inválido");
    })
})