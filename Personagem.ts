export class Personagem {
    nome: string;
    classe: string;
    raca: string;
    nivel: number
    experiencia: number
    tipoEquipamento: string;
    
    manaAtual: number
    manaMaxima: number
    vidaAtual: number
    vidaMaxima: number

    poderAtaque: number
    poderDefesa: number
    
    constructor(nome: string) {
        this.nome = nome;
        this.classe = "";
        this.raca = "";
        this.nivel = 1;
        this.experiencia = 0;
        this.tipoEquipamento = "";

        this.manaAtual = 0;
        this.manaMaxima = 0;
        this.vidaAtual = 0;
        this.vidaMaxima = 0;

        this.poderAtaque = 0;
        this.poderDefesa = 0;

        
    }
    treinarPoderAtaque(): void {
            this.poderAtaque += 3 + this.poderAtaque * 1.1;
        }
    treinarPoderDefesa(): void {
            this.poderDefesa += 3 + this.poderDefesa * 1.1;
            this.vidaMaxima += 1 + this.poderDefesa * 0.5;
        }
}

