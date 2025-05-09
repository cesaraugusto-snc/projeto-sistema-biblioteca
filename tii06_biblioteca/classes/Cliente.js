import { Pessoa } from "./Pessoa.js";
import { Utils } from "./Utils.js";

export class Cliente extends Pessoa {
    constructor(nome, id = null) {
        super(id || Utils.getProximoId("cliente-"), nome);
    }
    
    static fromJSONorObject(json) {
        const cliente = new Cliente(json.nome, json.id);
        if (json.ativo === false) {
            cliente.inativar();
        }
        return cliente;
    }
}