

export class GenericModel {
    protected _id: string = "";
    protected _nome: string = "";
    protected _criadoEm: Date = new Date();
    protected _atualizadoEm: Date = new Date();
    protected _removiEm: Date | null = null;
}