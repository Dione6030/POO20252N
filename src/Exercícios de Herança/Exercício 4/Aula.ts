import Conteudo from "./Conteudo";
import { GenericModel } from "./GenericModel";
import Unidade from "./Unidade";


export default class Aula extends GenericModel {
    private _unidade: Unidade = new Unidade();
    private _conteudos: Conteudo = [] = [];
}