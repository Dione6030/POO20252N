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
    console.log("|4. Procurar por equipamentos            |");
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
            if (p.procurarEquipamento()){
                const equipamentos = p.equipamentosEncontrados();
                console.log(`Você encontrou: ${equipamentos.arma} e ${equipamentos.armadura} deseja equipá-los?`)
                console.log("1 - Não")
                console.log("2 - Sim")
                const escolhaEquipar: number = +teclado("Escolha uma opção do menu: ");
                if (escolhaEquipar === 2){
                    p.tipoArma = equipamentos.arma;
                    p.tipoArmadura = equipamentos.armadura;
                    console.log("Equipamentos atualizados com sucesso!")
                } else {
                    console.log("Você optou por não equipar os itens.")
                }
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