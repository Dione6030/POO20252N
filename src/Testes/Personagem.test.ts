import { describe, expect, it } from "@jest/globals";
import  Personagem  from "../Personagem";
import { Util } from "../Util";

/*
TESTES DA AULA: Personagem está vivo
-Deve indicar que o personagem está vivo se a vidaAtual for maior que zero
-deve indicar que o personagem não está vivo quando a vidaAtual for igual a zero
-deve indicar que o personagem não está vivo quando a vidaAtual for menor que zero

TESTES DA AULA: treinarPoderAtaque (Lidando com Aleatoriedade)
-deve aumentar o poder de ataque corretamente após o treino

AGORA É TESTAR FUNCIONALIDADES PARA APLICAR NOVOS METODOS
    Função 1: Sofrer dano
        -deve reduzir a vidaAtual ao sofrer dano
        -a vidaAtual não deve ficar abaixo de zero ao sofrer dano letal
    Função 2: Curar
        -deve aumentar a vidaAtual ao receber cura
        -a vidaAtual não deve ultrapassar a vidaMaxima ao receber cura
    função 3: Subir de nível
        -deve aumentar o nível do personagem em 1
        -deve aumentar os atributos (vidaMaxima, manaMaxima) ao subir de nível


TREINAR PODER MÁGICO
- treinar poder mágico deve aumentar o poder mágico do personagem

TREINAR PODER DE DEFESA
- treinar poder de defesa deve aumentar o poder de defesa do personagem
- treinar poder de defesa deve aumentar o poder de defesa em um valor entre 5 e 15 mais 10% do poder de defesa atual

SUBIR DE NÍVEL
- subir de nível deve aumentar o poder de ataque em 2 ao subir de nível
- subir de nível deve aumentar o poder mágico em 2 ao subir de nível
- subir de nível deve aumentar o poder de defesa em 2 ao subir de nível

EQUIPAMENTOS
- ao procurar equipamentos, deve encontrar uma arma, e armadura, ou não
- ao encontrar equipamentos, ele deve ir para o inventário

INVENTÁRIO
- ao adicionar um item ao inventário, o item deve estar presente no inventário
- ao remover um item do inventário, o item não deve mais estar presente no inventário
- ao listar o inventário, deve retornar todos os itens presentes no inventário
- ao equipar uma arma, o personagem deve ter a arma equipada
- ao equipar uma armadura, o personagem deve ter a armadura equipada
- ao equipar uma arma, a arma anterior deve ser movida para o inventário
- ao equipar uma armadura, a armadura anterior deve ser movida para o inventário
- ao tentar equipar uma arma que não está no inventário, deve lançar um erro
- ao tentar equipar uma armadura que não está no inventário, deve lançar um erro

PESQUISAR MAGIAS
- ao pesquisar magias, deve encontrar uma magia ou não
- ao encontrar uma magia, ela deve ser equipada em um dos slots de magia disponíveis
- ao tentar adicionar uma magia em um slot com uma magia, o slot deve ser atualizado com a nova magia e a magia anterior deve ser esquecida
- ao tentar adicionar uma magia em um slot inválido, deve lançar um erro
*/

// Teste da Aula: Personagem está vivo
describe("Personagem Vive", () => {
    it("Deve indicar que o personagem vive com vidaAtual maior que zero", () => {
        // Cenário
        const personagem: Personagem = new Personagem("Teste");
        personagem.vidaAtual = 10;

        // Execução
        const vivo = personagem.estaVivo();

        // Validação
        expect(vivo).toBe(true);
    })

    it("Deve indicar que o personagem morreu com vidaAtual igual a zero", () => {
        const personagem: Personagem = new Personagem("Teste");
        personagem.vidaAtual = 0;
        
        const vivo = personagem.estaVivo();

        expect(vivo).toBe(false);
    })

    it("Deve indicar que o personagem morreu com vidaAtual menor que zero", () => {
        const personagem: Personagem = new Personagem("Teste");
        personagem.vidaAtual = -10;

        const vivo = personagem.estaVivo();

        expect(vivo).toBe(false);
    })
})

// Diz ao Jest para substituir a classe Util por uma simulação
jest.mock("../Util");

// Teste da Aula: treinarPoderAtaque (Lidando com Aleatoriedade)
describe("treinarPoderAtaque", () => {
    it("Deve aumentar o poder de ataque corretamente após o treino", () => {
        // Força Util.gerarNumeroAleatoria a sempre retornar 10 neste teste
        const mockGerarNumero = jest.spyOn(Util, 'gerarNumeroAleatorio').mockReturnValue(10);

        const personagem: Personagem = new Personagem("Teste");
        personagem.poderAtaque = 20;

        personagem.treinarPoderAtaque();

        // O valor esperado é 20(inicial) + 10(incremento de treino) + 22(bonus do 1.1 do poder atual)
        expect(personagem.poderAtaque).toBe(52);

        // Restaura a implementação original após o teste
        mockGerarNumero.mockRestore();
    })
})
describe("treinarPoderMagico", () => {
    it("Deve aumentar o poder mágico corretamente após o treino", () => {
        const mockGerarNumero = jest.spyOn(Util, 'gerarNumeroAleatorio').mockReturnValue(10);

        const personagem: Personagem = new Personagem("Teste");
        personagem.poderMagico = 20;

        personagem.treinarPoderMagico();

        expect(personagem.poderMagico).toBe(52);
    })
})
describe("treinarPoderDefesa", () => {
    it("Deve aumentar o poder de defesa corretamente após o treino", () => {
        const mockGerarNumero = jest.spyOn(Util, 'gerarNumeroAleatorio').mockReturnValue(10);

        const personagem: Personagem = new Personagem("Teste");
        personagem.poderDefesa = 20;

        personagem.treinarPoderDefesa();

        expect(personagem.poderDefesa).toBe(52);
    })
})

// Função 1: Sofrer dano
describe("Sofrer Dano", () => {

    it("Com uma arma, deve reduzir a vidaAtual ao sofrer dano", () => {
        const personagem: Personagem = new Personagem("Teste");
        personagem.vidaAtual = 50;
        personagem.poderAtaque = 10;

        personagem.ataqueComArma();

        expect(personagem.vidaAtual).toBe(40)
    })

    it("Com uma arma, a vidaAtual não deve ficar abaixo de zero ao sofrer dano letal", () => {
        const personagem: Personagem = new Personagem("Teste");
        personagem.vidaAtual = 10;
        personagem.poderAtaque = 20;

        personagem.ataqueComArma();

        expect(personagem.vidaAtual).toBe(0)
    })

    it("Com uma magia, deve reduzir a vidaAtual ao sofrer dano", () => {
        const personagem: Personagem = new Personagem("Teste");
        personagem.vidaAtual = 50;
        personagem.poderMagico = 10;
        personagem.manaAtual = 20;
        
        personagem.ataqueComMagia();

        expect(personagem.vidaAtual).toBe(40)
        expect(personagem.manaAtual).toBe(10)
    })
    it("Com uma magia, a vidaAtual não deve ficar abaixo de zero ao sofrer dano letal", () => {
        const personagem: Personagem = new Personagem("Teste");
        personagem.vidaAtual = 10;
        personagem.poderMagico = 20;
        personagem.manaAtual = 20;

        personagem.ataqueComMagia();

        expect(personagem.vidaAtual).toBe(0)
    })
    it("Com uma magia, se a manaAtual for insuficiente, o ataque não deve ser realizado", () => {
        const personagem: Personagem = new Personagem("Teste");
        personagem.vidaAtual = 50;
        personagem.poderMagico = 20;
        personagem.manaAtual = 10;

        personagem.ataqueComMagia();

        expect(personagem.vidaAtual).toBe(50)
        expect(personagem.manaAtual).toBe(10)
    })
})

// função 2: Curar
describe("Descansar para recuperar vida e mana", () => {
    it("deve aumentar a vidaAtual ao descansar", () => {
        const personagem: Personagem = new Personagem("Teste");
        personagem.vidaAtual = 5;
        personagem.vidaMaxima = 50;
        personagem.manaAtual = 5;
        personagem.manaMaxima = 30;

        personagem.descansar();

        // espera recuperar 20% da vida máxima (10) e 20% da mana máxima (6)
        expect(personagem.vidaAtual).toBe(15);
        expect(personagem.manaAtual).toBe(11);
    })
    it("a vidaAtual não deve ultrapassar a vidaMaxima ao descansar", () => {
        const personagem: Personagem = new Personagem("Teste");
        personagem.vidaAtual = 45;
        personagem.vidaMaxima = 50;
        personagem.manaAtual = 28;
        personagem.manaMaxima = 30;

        personagem.descansar();

        // espera que a vidaAtual não ultrapasse 50 e manaAtual não ultrapasse 30
        expect(personagem.vidaAtual).toBe(50);
        expect(personagem.manaAtual).toBe(30);
    })
})

// função 3: Subir de nível
describe("Subir de Nível", () => {
    it("deve aumentar o nível do personagem em 1 se a experiência for maior ou igual a 100 vezes o nível atual", () => {
        const personagem: Personagem = new Personagem("Teste");
        personagem.nivel = 1;
        personagem.experiencia = 100; // Experiência suficiente para subir de nível

        personagem.subirNivel();

        expect(personagem.nivel).toBe(2);
    })

    it("deve aumentar os atributos (vidaMaxima, manaMaxima) ao subir de nível", () => {
        const personagem: Personagem = new Personagem("Teste");
        personagem.nivel = 1;
        personagem.experiencia = 100;
        personagem.vidaMaxima = 4;
        personagem.manaMaxima = 3;

        personagem.subirNivel();

        expect(personagem.vidaMaxima).toBe(8);
        expect(personagem.manaMaxima).toBe(6);
    })

    it("ao subir de nivel, a experiencia deve resetar para 0", () => {
        const personagem: Personagem = new Personagem("Teste");
        personagem.nivel = 1;
        personagem.experiencia = 100;

        personagem.subirNivel();

        expect(personagem.experiencia).toBe(0);
    })

    it("deve aumentar o poderAtaque, poderMagico e poderDefesa em 2 ao subir de nível", () => {
        const personagem: Personagem = new Personagem("Teste");
        personagem.nivel = 1;
        personagem.experiencia = 100;
        personagem.poderAtaque = 2;
        personagem.poderMagico = 2;
        personagem.poderDefesa = 2;

        personagem.subirNivel();

        expect(personagem.poderAtaque).toBe(4);
        expect(personagem.poderMagico).toBe(4);
        expect(personagem.poderDefesa).toBe(4);
    })
})

// Equipamentos e Inventário
describe("Equipamentos e Inventário", () => {
    it("ao procurar equipamentos, deve encontrar uma arma, e armadura", () => {
        const mockGerarNumero = jest.spyOn(Util, 'gerarNumeroAleatorio').mockReturnValue(1);

        const personagem: Personagem = new Personagem("Teste");

        const encontrou = personagem.procurarEquipamento();

        expect(encontrou).toBe(true);

        mockGerarNumero.mockRestore();
    })
    it("ao procurar equipamentos, pode não encontrar nada", () => {
        const mockGerarNumero = jest.spyOn(Util, 'gerarNumeroAleatorio').mockReturnValue(0);

        const personagem: Personagem = new Personagem("Teste");

        const encontrou = personagem.procurarEquipamento();

        expect(encontrou).toBe(false);

        mockGerarNumero.mockRestore();
    })

    it("ao encontrar equipamentos, eles devem ir para o inventário", () => {
        const mockGerarNumero = jest.spyOn(Util, 'gerarNumeroAleatorio').mockReturnValue(1);
        const mockGerarArma = jest.spyOn(Util, 'gerarArma').mockReturnValue("Espada Teste");
        const mockGerarArmadura = jest.spyOn(Util, 'gerarArmadura').mockReturnValue("Armadura Teste");

        const personagem: Personagem = new Personagem("Teste");

        personagem.adicionarArma("Espada Teste");
        personagem.adicionarArmadura("Armadura Teste");

        expect(personagem.inventarioArma).toContain("Espada Teste");
        expect(personagem.inventarioArmadura).toContain("Armadura Teste");
    })
})