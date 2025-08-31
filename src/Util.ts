import { fakerPT_BR as faker } from '@faker-js/faker';

export class Util {
    
    static gerarNumeroAleatorio(minimo: number, maximo: number): number {
        return minimo + Math.round(Math.random()* (maximo - minimo))
    }

    static gerarArma(): string{
        const dQuatro = Util.gerarNumeroAleatorio(1, 4);

        switch(dQuatro){
        case 1:
            const armasPesadas = [
  // Martelo Gigante
  "Martelo Gigante de Moradin",
  "Martelo Gigante de Grommash",
  "Martelo Gigante de Hrothgar",
  "Martelo Gigante de Thrain",
  "Martelo Gigante de Korgan",
  "Martelo Gigante de Durotan",
  "Martelo Gigante Flamejante de Surtr",
  "Martelo Gigante Congelante de Skadi",
  "Martelo Gigante Trovejante de Thor",
  "Martelo Gigante Sombrio de Gul’dan",
  "Martelo Gigante de Balin",
  "Martelo Gigante de Ragnar",
  "Martelo Gigante de Krull",
  "Martelo Gigante de Valthor",
  "Martelo Gigante de Ogrim",
  "Martelo Gigante Ígneo de Ignar",
  "Martelo Gigante Tempestuoso de Raijin",
  "Martelo Gigante Glacial de Ymir",
  "Martelo Gigante Abissal de Nergal",
  "Martelo Gigante da Ruína de Malphas",

  // Espadão
  "Espadão de Drizzt",
  "Espadão de Elric",
  "Espadão de Arkhon",
  "Espadão de Guts",
  "Espadão de Arthas",
  "Espadão Flamejante de Ifrit",
  "Espadão Congelante de Shiva",
  "Espadão Trovejante de Zeus",
  "Espadão Sombrio de Noctis",
  "Espadão de Beowulf",
  "Espadão de Siegfried",
  "Espadão de Astarion",
  "Espadão de Vlad",
  "Espadão de Balthazar",
  "Espadão de Xandar",
  "Espadão Ígneo de Belial",
  "Espadão Tempestuoso de Fujin",
  "Espadão Glacial de Khione",
  "Espadão Abissal de Orcus",
  "Espadão da Destruição de Veyra",

  // Machadão
  "Machadão de Gruumsh",
  "Machadão de Thrall",
  "Machadão de Garrosh",
  "Machadão de Conan",
  "Machadão de Dáin",
  "Machadão Flamejante de Efreet",
  "Machadão Congelante de Boreas",
  "Machadão Trovejante de Perun",
  "Machadão Sombrio de Zargon",
  "Machadão de Ragnarök",
  "Machadão de Durin",
  "Machadão de Magni",
  "Machadão de Brokkr",
  "Machadão de Sindri",
  "Machadão de Ulfgar",
  "Machadão Ígneo de Pyros",
  "Machadão Tempestuoso de Typhon",
  "Machadão Glacial de Jotun",
  "Machadão Abissal de Chernobog",
  "Machadão da Carnificina de Morbius",

  // Mangual
  "Mangual de Abaddon",
  "Mangual de Tyrael",
  "Mangual de Leonidas",
  "Mangual de Gideon",
  "Mangual de Arcturus",
  "Mangual Flamejante de Balrog",
  "Mangual Congelante de Fenrir",
  "Mangual Trovejante de Indra",
  "Mangual Sombrio de Mephisto",
  "Mangual de Lancelot",
  "Mangual de Mordred",
  "Mangual de Ulric",
  "Mangual de Sigmar",
  "Mangual de Darius",
  "Mangual de Kratos",
  "Mangual Ígneo de Agni",
  "Mangual Tempestuoso de Enlil",
  "Mangual Glacial de Sköll",
  "Mangual Abissal de Nyx",
  "Mangual da Tormenta de Zariel"
            ];
            const indice1 = Util.gerarNumeroAleatorio(0, armasPesadas.length - 1)
            const nivelAleatório1 = Util.gerarNumeroAleatorio(1,3)
            return `${armasPesadas[indice1]} [Nível: ${nivelAleatório1}]`

        case 2:
            const armasMedianas = [
  // Espada Longa
  "Espada Longa de Elendil",
  "Espada Longa de Aragorn",
  "Espada Longa de Isildur",
  "Espada Longa de Eddard",
  "Espada Longa de Roland",
  "Espada Longa Flamejante de Salamandra",
  "Espada Longa Congelante de Valkyrion",
  "Espada Longa Trovejante de Raiden",
  "Espada Longa Sombria de Tenebris",
  "Espada Longa de Corvus",
  "Espada Longa de Galahad",
  "Espada Longa de Cú Chulainn",
  "Espada Longa de Tancred",
  "Espada Longa de Rhaegar",
  "Espada Longa de Altair",
  "Espada Longa Ígnea de Baal",
  "Espada Longa Tempestuosa de Enki",
  "Espada Longa Glacial de Borealis",
  "Espada Longa Abissal de Leviatã",
  "Espada Longa da Perdição de Veyron",

  // Katana
  "Katana de Musashi",
  "Katana de Kenshin",
  "Katana de Sesshomaru",
  "Katana de Itto",
  "Katana de Raiden",
  "Katana Flamejante de Susanoo",
  "Katana Congelante de Haku",
  "Katana Trovejante de Kaminari",
  "Katana Sombria de Zabuza",
  "Katana de Jinpachi",
  "Katana de Yasuo",
  "Katana de Genji",
  "Katana de Hanzo",
  "Katana de Orochi",
  "Katana de Ryu",
  "Katana Ígnea de Amaterasu",
  "Katana Tempestuosa de Raijin",
  "Katana Glacial de Yukiko",
  "Katana Abissal de Izanami",
  "Katana da Lua Sangrenta de Akuma",

  // Foice
  "Foice de Hades",
  "Foice de Thanatos",
  "Foice de Corvus",
  "Foice de Alucard",
  "Foice de Belphegor",
  "Foice Flamejante de Amon",
  "Foice Congelante de Hel",
  "Foice Trovejante de Baal",
  "Foice Sombria de Erebus",
  "Foice de Lilith",
  "Foice de Azrael",
  "Foice de Malthael",
  "Foice de Dagon",
  "Foice de Morbius",
  "Foice de Carmilla",
  "Foice Ígnea de Surtr",
  "Foice Tempestuosa de Jupiter",
  "Foice Glacial de Skadi",
  "Foice Abissal de Nergal",
  "Foice da Morte Rubra de Samael",

  // Lança Longa
  "Lança Longa de Odin",
  "Lança Longa de Achilles",
  "Lança Longa de Hector",
  "Lança Longa de Leonidas",
  "Lança Longa de Guan Yu",
  "Lança Longa Flamejante de Prometeu",
  "Lança Longa Congelante de Boreas",
  "Lança Longa Trovejante de Perun",
  "Lança Longa Sombria de Anubis",
  "Lança Longa de Sigurd",
  "Lança Longa de Perseu",
  "Lança Longa de Atalanta",
  "Lança Longa de Beowulf",
  "Lança Longa de Kratos",
  "Lança Longa de Vladislav",
  "Lança Longa Ígnea de Hephaestus",
  "Lança Longa Tempestuosa de Enlil",
  "Lança Longa Glacial de Ymir",
  "Lança Longa Abissal de Leviatã",
  "Lança Longa da Aurora de Hyperion",

  // Porrete
  "Porrete de Grimgor",
  "Porrete de Durotan",
  "Porrete de Kharn",
  "Porrete de Zogoth",
  "Porrete de Brak",
  "Porrete Flamejante de Pyron",
  "Porrete Congelante de Kaldur",
  "Porrete Trovejante de Kord",
  "Porrete Sombrio de Veyros",
  "Porrete de Skarn",
  "Porrete de Durok",
  "Porrete de Magrok",
  "Porrete de Balrog",
  "Porrete de Morgul",
  "Porrete de Zalthar",
  "Porrete Ígneo de Ifrit",
  "Porrete Tempestuoso de Raiden",
  "Porrete Glacial de Sköll",
  "Porrete Abissal de Dagon",
  "Porrete da Ruína de Belak",

  // Sabre
  "Sabre de Draven",
  "Sabre de Talion",
  "Sabre de Alaric",
  "Sabre de Corvus",
  "Sabre de Kael",
  "Sabre Flamejante de Ifrit",
  "Sabre Congelante de Borealis",
  "Sabre Trovejante de Enlil",
  "Sabre Sombrio de Nox",
  "Sabre de Roland",
  "Sabre de Tristan",
  "Sabre de Mordekai",
  "Sabre de Zarek",
  "Sabre de Veymar",
  "Sabre de Alistair",
  "Sabre Ígneo de Belial",
  "Sabre Tempestuoso de Fujin",
  "Sabre Glacial de Khione",
  "Sabre Abissal de Orcus",
  "Sabre da Tormenta Carmesim de Ragnor"
            ];
            const indice2 = Util.gerarNumeroAleatorio(0, armasMedianas.length - 1)
            const nivelAleatório2 = Util.gerarNumeroAleatorio(1,3)
            return `${armasMedianas[indice2]} [Nível: ${nivelAleatório2}]`

        case 3:
            const armasLeves = [
  // Adagas
  "Adaga de Veyra",
  "Adaga de Ezio",
  "Adaga de Altair",
  "Adaga de Zed",
  "Adaga de Lilith",
  "Adaga Flamejante de Ifrit",
  "Adaga Congelante de Shiva",
  "Adaga Trovejante de Raijin",
  "Adaga Sombria de Nyx",
  "Adaga de Artemis",
  "Adaga de Loki",
  "Adaga de Fenrir",
  "Adaga de Jinx",
  "Adaga de Morrigan",
  "Adaga de Draven",
  "Adaga Ígnea de Hades",
  "Adaga Tempestuosa de Zeus",
  "Adaga Glacial de Skadi",
  "Adaga Abissal de Leviatã",
  "Adaga da Lua Sangrenta de Akasha",

  // Machadinhas
  "Machadinha de Ulfgar",
  "Machadinha de Thrall",
  "Machadinha de Durotan",
  "Machadinha de Ragnar",
  "Machadinha de Zalthar",
  "Machadinha Flamejante de Balrog",
  "Machadinha Congelante de Sköll",
  "Machadinha Trovejante de Indra",
  "Machadinha Sombria de Veyros",
  "Machadinha de Korgan",
  "Machadinha de Grom",
  "Machadinha de Orgrim",
  "Machadinha de Grimgor",
  "Machadinha de Magni",
  "Machadinha de Brokkr",
  "Machadinha Ígnea de Pyros",
  "Machadinha Tempestuosa de Typhon",
  "Machadinha Glacial de Boreas",
  "Machadinha Abissal de Dagon",
  "Machadinha da Carnificina de Malphas",

  // Luvas de Combate
  "Luvas de Combate de Ryu",
  "Luvas de Combate de Ken",
  "Luvas de Combate de Akuma",
  "Luvas de Combate de Baki",
  "Luvas de Combate de Kazuya",
  "Luvas de Combate Flamejantes de Ifrit",
  "Luvas de Combate Congelantes de Sub-Zero",
  "Luvas de Combate Trovejantes de Raiden",
  "Luvas de Combate Sombrias de Noctis",
  "Luvas de Combate de Jin",
  "Luvas de Combate de Hwoarang",
  "Luvas de Combate de Balrog",
  "Luvas de Combate de Dudley",
  "Luvas de Combate de Rock",
  "Luvas de Combate de Terry",
  "Luvas de Combate Ígneas de Agni",
  "Luvas de Combate Tempestuosas de Fujin",
  "Luvas de Combate Glaciais de Shiva",
  "Luvas de Combate Abissais de Nyx",
  "Luvas de Combate do Caos de Azazel",

  // Lança Curta
  "Lança Curta de Ares",
  "Lança Curta de Hektor",
  "Lança Curta de Atalanta",
  "Lança Curta de Achilles",
  "Lança Curta de Guan Yu",
  "Lança Curta Flamejante de Prometeu",
  "Lança Curta Congelante de Skadi",
  "Lança Curta Trovejante de Zeus",
  "Lança Curta Sombria de Erebus",
  "Lança Curta de Beowulf",
  "Lança Curta de Perseus",
  "Lança Curta de Hector",
  "Lança Curta de Kratos",
  "Lança Curta de Leonidas",
  "Lança Curta de Corvus",
  "Lança Curta Ígnea de Surtr",
  "Lança Curta Tempestuosa de Raijin",
  "Lança Curta Glacial de Ymir",
  "Lança Curta Abissal de Leviatã",
  "Lança Curta da Perdição de Thanatos"
            ];
            const indice3 = Util.gerarNumeroAleatorio(0, armasLeves.length - 1)
            const nivelAleatório3 = Util.gerarNumeroAleatorio(1,3)
            return `${armasLeves[indice3]} [Nível: ${nivelAleatório3}]`

        case 4:
            const cajadosVarinhas = [
  // Cajados
  "Cajado Flamejante de Fênix",
  "Cajado Congelante de Ymir",
  "Cajado Trovejante de Thor",
  "Cajado Sombrio de Vecna",
  "Cajado da Luz de Pelor",
  "Cajado da Tempestade de Talos",
  "Cajado do Vento de Fujin",
  "Cajado da Terra de Gaia",
  "Cajado do Mar de Poseidon",
  "Cajado da Vida de Freya",
  "Cajado Ígneo de Ifrit",
  "Cajado Glacial de Skadi",
  "Cajado Abissal de Dagon",
  "Cajado do Caos de Azathoth",
  "Cajado Estelar de Nyarlathotep",
  "Cajado do Vazio de Shub-Niggurath",
  "Cajado Solar de Amaterasu",
  "Cajado Lunar de Tsukuyomi",
  "Cajado da Ruína de Nergal",
  "Cajado da Eternidade de Chronos",

  // Varinhas
  "Varinha Flamejante de Salamandra",
  "Varinha Congelante de Glacius",
  "Varinha Trovejante de Raijin",
  "Varinha Sombria de Noctis",
  "Varinha da Luz de Lathander",
  "Varinha Estelar de Selûne",
  "Varinha do Vento de Boreas",
  "Varinha da Terra de Geb",
  "Varinha do Mar de Thalassa",
  "Varinha da Vida de Yggdrasil",
  "Varinha Ígnea de Pyros",
  "Varinha Glacial de Borealis",
  "Varinha Abissal de Leviatã",
  "Varinha do Caos de Tzeentch",
  "Varinha do Infinito de Mystra",
  "Varinha da Tormenta de Talona",
  "Varinha Solar de Apollo",
  "Varinha Lunar de Selene",
  "Varinha da Perdição de Vecna",
  "Varinha da Eternidade de Ao"
            ];
            const indice4 = Util.gerarNumeroAleatorio(0, cajadosVarinhas.length - 1)
            const nivelAleatório4 = Util.gerarNumeroAleatorio(1,3)
            return `${cajadosVarinhas[indice4]} [Nível: ${nivelAleatório4}]`
        
            default:
            throw new Error("Alguma coisa deu errado");
            break;
        }
    }

    static gerarArmadura(): string{
        const dtres = Util.gerarNumeroAleatorio(1, 3);

        switch(dtres){
        case 1:
            const armadurasPesadas = [
  // Armadura de Corpo
  "Armadura de Corpo de Moradin",
  "Armadura de Corpo de Grommash",
  "Armadura de Corpo de Hrothgar",
  "Armadura de Corpo de Thrain",
  "Armadura de Corpo de Korgan",
  "Armadura de Corpo Flamejante de Surtr",
  "Armadura de Corpo Congelante de Ymir",
  "Armadura de Corpo Trovejante de Thor",
  "Armadura de Corpo Sombria de Gul’dan",
  "Armadura de Corpo de Balin",
  "Armadura de Corpo de Siegfried",
  "Armadura de Corpo de Durin",
  "Armadura de Corpo de Leonidas",
  "Armadura de Corpo de Conan",
  "Armadura de Corpo de Beowulf",
  "Armadura de Corpo Ígnea de Belial",
  "Armadura de Corpo Tempestuosa de Fujin",
  "Armadura de Corpo Glacial de Skadi",
  "Armadura de Corpo Abissal de Orcus",
  "Armadura de Corpo da Perdição de Nergal",

  // Armadura de Placas
  "Armadura de Placas de Roland",
  "Armadura de Placas de Lancelot",
  "Armadura de Placas de Mordred",
  "Armadura de Placas de Arthur",
  "Armadura de Placas de Galahad",
  "Armadura de Placas Flamejante de Ifrit",
  "Armadura de Placas Congelante de Borealis",
  "Armadura de Placas Trovejante de Raijin",
  "Armadura de Placas Sombria de Noctis",
  "Armadura de Placas de Alaric",
  "Armadura de Placas de Sigurd",
  "Armadura de Placas de Vladislav",
  "Armadura de Placas de Tancred",
  "Armadura de Placas de Ragnar",
  "Armadura de Placas de Balthazar",
  "Armadura de Placas Ígnea de Baal",
  "Armadura de Placas Tempestuosa de Enlil",
  "Armadura de Placas Glacial de Khione",
  "Armadura de Placas Abissal de Dagon",
  "Armadura de Placas da Eternidade de Chronos",

  // Armadura de Escamas Pesadas
  "Armadura de Escamas de Guan Yu",
  "Armadura de Escamas de Achilles",
  "Armadura de Escamas de Hector",
  "Armadura de Escamas de Sigurd",
  "Armadura de Escamas de Perseu",
  "Armadura de Escamas Flamejante de Prometeu",
  "Armadura de Escamas Congelante de Boreas",
  "Armadura de Escamas Trovejante de Zeus",
  "Armadura de Escamas Sombria de Anubis",
  "Armadura de Escamas de Corvus",
  "Armadura de Escamas de Hector",
  "Armadura de Escamas de Kratos",
  "Armadura de Escamas de Ogrim",
  "Armadura de Escamas de Ragnar",
  "Armadura de Escamas de Leonidas",
  "Armadura de Escamas Ígnea de Surtr",
  "Armadura de Escamas Tempestuosa de Fujin",
  "Armadura de Escamas Glacial de Sköll",
  "Armadura de Escamas Abissal de Nyx",
  "Armadura de Escamas da Ruína de Nergal"
            ];
            const indice = Util.gerarNumeroAleatorio(0, armadurasPesadas.length - 1)
            const nivelAleatório = Util.gerarNumeroAleatorio(1,3)
            return `${armadurasPesadas[indice]} [Nível: ${nivelAleatório}]`

        case 2: 
            const armadurasMedias = [
  // Cota de Malha
  "Cota de Malha de Roland",
  "Cota de Malha de Eddard",
  "Cota de Malha de Aegon",
  "Cota de Malha de Bjorn",
  "Cota de Malha de Ragnar",
  "Cota de Malha Flamejante de Ifrit",
  "Cota de Malha Congelante de Borealis",
  "Cota de Malha Trovejante de Indra",
  "Cota de Malha Sombria de Noctis",
  "Cota de Malha de Vlad",
  "Cota de Malha de Siegfried",
  "Cota de Malha de Corvus",
  "Cota de Malha de Balthazar",
  "Cota de Malha de Astarion",
  "Cota de Malha de Galahad",
  "Cota de Malha Ígnea de Belial",
  "Cota de Malha Tempestuosa de Enki",
  "Cota de Malha Glacial de Khione",
  "Cota de Malha Abissal de Orcus",
  "Cota de Malha da Eternidade de Chronos",

  // Armadura de Couro Batido
  "Armadura de Couro de Ezio",
  "Armadura de Couro de Altair",
  "Armadura de Couro de Zed",
  "Armadura de Couro de Lilith",
  "Armadura de Couro de Morrigan",
  "Armadura de Couro Flamejante de Salamandra",
  "Armadura de Couro Congelante de Valkyrion",
  "Armadura de Couro Trovejante de Raiden",
  "Armadura de Couro Sombria de Erebus",
  "Armadura de Couro de Artemis",
  "Armadura de Couro de Loki",
  "Armadura de Couro de Fenrir",
  "Armadura de Couro de Rhaegar",
  "Armadura de Couro de Akasha",
  "Armadura de Couro de Yasuo",
  "Armadura de Couro Ígnea de Hades",
  "Armadura de Couro Tempestuosa de Zeus",
  "Armadura de Couro Glacial de Skadi",
  "Armadura de Couro Abissal de Leviatã",
  "Armadura de Couro da Lua Sangrenta de Selene",

  // Gibão de Escamas
  "Gibão de Escamas de Guan Yu",
  "Gibão de Escamas de Achilles",
  "Gibão de Escamas de Hector",
  "Gibão de Escamas de Sigurd",
  "Gibão de Escamas de Perseu",
  "Gibão de Escamas Flamejante de Prometeu",
  "Gibão de Escamas Congelante de Boreas",
  "Gibão de Escamas Trovejante de Zeus",
  "Gibão de Escamas Sombrio de Anubis",
  "Gibão de Escamas de Corvus",
  "Gibão de Escamas de Hector",
  "Gibão de Escamas de Kratos",
  "Gibão de Escamas de Ogrim",
  "Gibão de Escamas de Ragnar",
  "Gibão de Escamas de Leonidas",
  "Gibão de Escamas Ígneo de Surtr",
  "Gibão de Escamas Tempestuoso de Fujin",
  "Gibão de Escamas Glacial de Sköll",
  "Gibão de Escamas Abissal de Nyx",
  "Gibão de Escamas da Ruína de Nergal"
            ];
            const indice2 = Util.gerarNumeroAleatorio(0, armadurasMedias.length - 1)
            const nivelAleatório2 = Util.gerarNumeroAleatorio(1,3)
            return `${armadurasMedias[indice2]} [Nível: ${nivelAleatório2}]`

        case 3:
            const armadurasLeves = [
  // Camisa Reforçada
  "Camisa Reforçada de Ezio",
  "Camisa Reforçada de Altair",
  "Camisa Reforçada de Yasuo",
  "Camisa Reforçada de Ryu",
  "Camisa Reforçada de Ken",
  "Camisa Reforçada Flamejante de Salamandra",
  "Camisa Reforçada Congelante de Glacius",
  "Camisa Reforçada Trovejante de Raijin",
  "Camisa Reforçada Sombria de Noctis",
  "Camisa Reforçada de Artemis",
  "Camisa Reforçada de Loki",
  "Camisa Reforçada de Morrigan",
  "Camisa Reforçada de Lilith",
  "Camisa Reforçada de Corvus",
  "Camisa Reforçada de Draven",
  "Camisa Reforçada Ígnea de Hades",
  "Camisa Reforçada Tempestuosa de Zeus",
  "Camisa Reforçada Glacial de Skadi",
  "Camisa Reforçada Abissal de Leviatã",
  "Camisa Reforçada da Perdição de Thanatos",

  // Manto
  "Manto de Gandalf",
  "Manto de Elminster",
  "Manto de Raistlin",
  "Manto de Merlin",
  "Manto de Morgana",
  "Manto Flamejante de Fênix",
  "Manto Congelante de Ymir",
  "Manto Trovejante de Thor",
  "Manto Sombrio de Vecna",
  "Manto da Luz de Pelor",
  "Manto da Lua de Selune",
  "Manto do Sol de Amaterasu",
  "Manto da Noite de Nyx",
  "Manto das Estrelas de Mystra",
  "Manto do Caos de Azathoth",
  "Manto Ígneo de Ignar",
  "Manto Tempestuoso de Enlil",
  "Manto Glacial de Borealis",
  "Manto Abissal de Dagon",
  "Manto da Eternidade de Chronos",

  // Túnica Encantada
  "Túnica Encantada de Mystra",
  "Túnica Encantada de Selûne",
  "Túnica Encantada de Vecna",
  "Túnica Encantada de Karsus",
  "Túnica Encantada de Elminster",
  "Túnica Encantada Flamejante de Ifrit",
  "Túnica Encantada Congelante de Borealis",
  "Túnica Encantada Trovejante de Fujin",
  "Túnica Encantada Sombria de Nyx",
  "Túnica Encantada da Vida de Freya",
  "Túnica Encantada do Sol de Amaterasu",
  "Túnica Encantada da Lua de Tsukuyomi",
  "Túnica Encantada Estelar de Chronos",
  "Túnica Encantada do Vazio de Shub-Niggurath",
  "Túnica Encantada da Noite de Erebus",
  "Túnica Encantada Ígnea de Surtr",
  "Túnica Encantada Tempestuosa de Talos",
  "Túnica Encantada Glacial de Skadi",
  "Túnica Encantada Abissal de Leviatã",
  "Túnica Encantada da Eternidade de Ao"
            ];
            const indice3 = Util.gerarNumeroAleatorio(0, armadurasLeves.length - 1)
            const nivelAleatório3 = Util.gerarNumeroAleatorio(1,3)
            return `${armadurasLeves[indice3]} [Nível: ${nivelAleatório3}]`
            
        default:
            throw new Error("Alguma coisa deu errado");
            break;
        }
    }
}

for (let index = 0; index < 10; index++) {
    const arma = Util.gerarArma();
    const armadura = Util.gerarArmadura();
    console.log(`Arma: ${arma} | Armadura: ${armadura}`);
}

