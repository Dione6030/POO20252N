import  Personagem  from "./Personagem";
import Prompt from "prompt-sync";
import { AtributosArma } from "./Armas"
import { el } from "@faker-js/faker";

const teclado = Prompt();

const p: Personagem = new Personagem("Edécio");

p.classe = "Clérigo";
p.raca = "Morto-vivo";
p.nivel = Math.floor(1+ Math.random() * 99);
p.experiencia = Math.floor(1 + Math.random() * 999);

p.tipoArma = "Cajado";
p.tipoArmadura = "Manto";

p.manaMaxima = 3;
p.manaAtual = p.manaMaxima;
p.vidaMaxima = 5;
p.vidaAtual = p.vidaMaxima;

p.poderAtaque = 1;
p.poderMagico = 3;
p.poderDefesa = 0.5;

p.slotMagia1 = "Fire Ball";
p.slotMagia2 = "Hell Fire";
p.slotMagia3 = "Gelo Frio";


while (true) {
    if (!confirmaVida(p)){
        console.log("Você está morto, reinicie!")
        break
    }
    console.log("+------------------Menu------------------+");
    console.log("|1. Treinar Poder de Ataque ou Mágico    |");
    console.log("|2. Treinar Poder de Defesa              |");
    console.log("|3. Ver Status                           |");
    console.log("|4. Ver Inventário                       |");
    console.log("|5. Procurar por equipamentos            |");
    if (p.nivel > 2){
        console.log("|6. Pesquisar Magias Nível 2             |");
    } else {
        console.log("|6. Pesquisar Magias Nível 1             |");
    }
    console.log("|7. Descansar                            |");
    console.log("|8. Atacar-se                            |")
    console.log("|9. Sair                                 |");
    console.log("+----------------------------------------+");

    const escolha: number = +teclado("Escolha uma opção do menu: ");

    if (escolha === 9) {
        break;
    } 
    switch (escolha) {
        case 1:
            const opcaoTrain: number = +teclado("O que deseja fazer?")
            console.log("1. Flexões")
            console.log("2. Meditação")
            
            switch(opcaoTrain) {
                case 1: 
                    treinarPoderAtaque(p);
                    break

                case 2:
                    treinarPoderMagico(p);
                    break
                    
                default:
                    console.log("Algo deu errado tente novamente!")
                    break
            }
            break;
        case 2:
            treinarPoderDefesa(p);
            break;
        case 3:
            console.table(p);
            break;
        case 4:
            console.log("+---+-------------Inventário-----------------------+---------------------------------------------+");
            console.log("|Nº |Armas.............................................|Armaduras......................................|")
            let i = 1;
            for (const linha of p.inventario) {
                const arma = linha.arma ?? "";
                const armadura = linha.armadura ?? "";

                console.log(`|${i.toString().padEnd(3)}|${arma.padEnd(50)}|${armadura.padEnd(47)}|`);
                i++;
            }
            console.log("+---+--------------------------------------------------+-----------------------------------------------+");
            console.log("1. Equipar arma");
            console.log("2. Equipar armadura");
            console.log("3. Jogar fora Arma");
            console.log("4. Jogar fora Armadura");
            console.log("5. Voltar");
            const escolhasInventario: number = +teclado("Escolha uma opção do inventário: ");
            switch (escolhasInventario) {
                case 1:
                    const escolhaEquiparArma: number = +teclado("Escolha o número da arma que deseja equipar: ");
                    p.equiparArma(escolhaEquiparArma);
                    break;
                case 2:
                    const escolhaEquiparArmadura: number = +teclado("Escolha o número da armadura que deseja equipar: ");
                    p.equiparArmadura(escolhaEquiparArmadura);
                    break;
                case 3:
                    const escolhaJogarForaArma: number = +teclado("Escolha o número da arma que deseja jogar fora: ");
                    p.removerArma(escolhaJogarForaArma);
                    break;
                case 4:
                    const escolhaJogarForaArmadura: number = +teclado("Escolha o número da armadura que deseja jogar fora: ");
                    p.removerArmadura(escolhaJogarForaArmadura);
                    break;
                case 5:
                    break;

                default:
                    console.log("Opção inválida, tente novamente.");
            }
            break;

        case 5:
            if (p.procurarEquipamento()){
                const equipamentos = p.equipamentosEncontrados();
                console.log(`Você encontrou: ${equipamentos.arma} e ${equipamentos.armadura} abra o inventario para equipar!`)
            } else {
                console.log("Você não encontrou nenhum equipamento.")
            }
            break

        case 6:
            if (p.nivel > 2) {
                if (p.pesquisarMagia()){
                    console.log(`Você aprendeu: ${p.magiaAprendida().magiaNi2} deseja manter?`);
                    console.log("1 - Não");
                    console.log("2 - Sim");

                    const escolhaManter: number = +teclado("Escolha uma opção: ");
                    switch(escolhaManter){
                        case 1:
                            console.log("Você optou por Esquecer.")
                            break

                        case 2:
                            console.log("Em qual slot de Magia deseja?")
                            console.log("1 - 1º slot de magia.")
                            console.log("2 - 2º slot de magia.")
                            console.log("3 - 3º slot de magia.")
                            const escolhaSlotMagia: number = +teclado("Escolhe o Slot:")
                            
                            switch(escolhaSlotMagia){
                                case 1:
                                    p.slotMagia1 = p.magiaAprendida().magiaNi2;
                                    console.log("A magia foi equipada no 1º Slot")
                                    break
                                case 2:
                                    p.slotMagia2 = p.magiaAprendida().magiaNi2;
                                    console.log("A magia foi equipada no 2º Slot")
                                    break
                                case 3:
                                    p.slotMagia3 = p.magiaAprendida().magiaNi2;
                                    console.log("A magia foi equipada no 3º Slot")
                                    break
                                
                                default:
                                    console.log("Opção inválida, tente novamente.");
                                    break
                            }
                    }

                }
            } else {
                if (p.pesquisarMagia()){
                    console.log(`Você aprendeu: ${p.magiaAprendida().magiaNi1} deseja manter?`);
                    console.log("1 - Não");
                    console.log("2 - Sim");

                    const escolhaManter: number = +teclado("Escolha uma opção: ");
                    switch(escolhaManter){
                        case 1:
                            console.log("Você optou por Esquecer.")
                            break

                        case 2:
                            console.log("Em qual slot de Magia deseja?")
                            console.log("1 - 1º slot de magia.")
                            console.log("2 - 2º slot de magia.")
                            console.log("3 - 3º slot de magia.")
                            const escolhaSlotMagia: number = +teclado("Escolhe o Slot:")
                            
                            switch(escolhaSlotMagia){
                                case 1:
                                    p.slotMagia1 = p.magiaAprendida().magiaNi1;
                                    console.log("A magia foi equipada no 1º Slot")
                                    break
                                case 2:
                                    p.slotMagia2 = p.magiaAprendida().magiaNi1;
                                    console.log("A magia foi equipada no 2º Slot")
                                    break
                                case 3:
                                    p.slotMagia3 = p.magiaAprendida().magiaNi1;
                                    console.log("A magia foi equipada no 3º Slot")
                                    break
                                
                                default:
                                    console.log("Opção inválida, tente novamente.");
                                    break
                            }
                    }

                }
            }
            break

        case 7:
            p.descansar();
            break

        case 8:
            console.log("Como deseja se atacar?")
            console.log("1. Com a Arma")
            console.log("2. Com a Magia")
            const escolhaDeAtaque: number = +teclado("Opção: ")

            switch(escolhaDeAtaque){
                case 1:
                    p.ataqueComArma();
                    console.log(`${p.nome} causou ${p.poderAtaque} de Dano em ${p.nome} e ficou com ${p.vidaAtual} de Vida`)
                    break

                case 2:
                    if (p.manaAtual <= 0){
                        console.log("Você não possuí mana!")
                        break
                    } else{
                        p.ataqueComMagia();
                        console.log(`${p.nome} causou ${p.poderMagico} de Dano Mágico em si mesmo e ficou com ${p.vidaAtual} de Vida e com ${p.manaAtual} de mana.`)
                        break
                    }

                default:
                    console.log("Opção inválida, tente novamente.");
                    break;
            }
            break

        default:
            console.log("Opção inválida, tente novamente.");
            break;
    }
}

function treinarPoderAtaque(person: Personagem): void {
    person.treinarPoderAtaque();
}
function treinarPoderMagico(person: Personagem): void {
    person.treinarPoderMagico();
}
function treinarPoderDefesa(person: Personagem): void {
    person.treinarPoderDefesa();
}
function confirmaVida(person: Personagem): boolean {
    return person.estaVivo();
}
function ataqueComArma(person: Personagem): void {
    person.ataqueComArma();
}
function ataqueComMagia(person: Personagem): void {
    person.ataqueComMagia();
}

console.table(p);