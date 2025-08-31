import { Personagem } from "./Personagem";
import Prompt from "prompt-sync";

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
p.poderDefesa = 0.5;


while (true) {
    console.log("+------------------Menu------------------+");
    console.log("|1. Treinar Poder de Ataque              |");
    console.log("|2. Treinar Poder de Defesa              |");
    console.log("|3. Ver Status                           |");
    console.log("|4. Ver Inventário                       |");
    console.log("|5. Procurar por equipamentos            |");
    console.log("|9. Sair                                 |");
    console.log("+----------------------------------------+");

    const escolha: number = +teclado("Escolha uma opção do menu: ");

    if (escolha === 9) {
        break;
    } 
    switch (escolha) {
        case 1:
            treinarPoderAtaque(p);
            break;
        case 2:
            treinarPoderDefesa(p);
            break;
        case 3:
            console.table(p);
            break;
        case 4:
            console.log("+---+-------------Inventário-----------------+---------------------------------------------+");
            console.log("|Nº |Armas...................................|Armaduras....................................|")
            let i = 0;
            for (const linha of p.inventario) {
                const arma = linha.arma ?? "";
                const armadura = linha.armadura ?? "";

                console.log(`|${i.toString().padEnd(3)}|${arma.padEnd(40)}|${armadura.padEnd(45)}|`);
                i++;
            }
            console.log("+---+--------------------------------------+---------------------------------------------+");
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
                    p.removerArma(p, escolhaJogarForaArma);
                    break;
                case 4:
                    const escolhaJogarForaArmadura: number = +teclado("Escolha o número da armadura que deseja jogar fora: ");
                    p.removerArmadura(p, escolhaJogarForaArmadura);
                    break;
                case 5:
                    break;
            }

        case 5:
            if (p.procurarEquipamento()){
                const equipamentos = p.equipamentosEncontrados();
                console.log(`Você encontrou: ${equipamentos.arma} e ${equipamentos.armadura} abra o inventario para equipar!`)
            } else {
                console.log("Você não encontrou nenhum equipamento.")
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
function treinarPoderDefesa(person: Personagem): void {
    person.treinarPoderDefesa();
}

console.table(p);