import Aula from "./Aula";
import { GenericModel } from "./GenericModel";

export default class Conteudo extends GenericModel {
    private _aula: Aula = new Aula();
    private _url: string = "";
}