import { GenericModel } from "./GenericModel";
import Unidade from "./Unidade";

export default class Curso extends GenericModel {
    private _unidades: Unidade[] = [];

    constructor(unidade: Unidade) {
        super();
        this._unidades.push(unidade);
    }
}