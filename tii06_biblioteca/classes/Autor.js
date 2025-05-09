import { Pessoa } from "./Pessoa.js";
import { Utils } from "./Utils.js";

export class Autor extends Pessoa {
    constructor(nome, id = null) {
        super(id || Utils.getProximoId("autor-"), nome);
    }
    
    static fromJSONorObject(json) {
        const autor = new Autor(json.nome, json.id);
        if (json.ativo === false) {
            autor.inativar();
        }
        return autor;
    }
}