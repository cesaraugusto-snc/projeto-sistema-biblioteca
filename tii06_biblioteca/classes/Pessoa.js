export class Pessoa {
    #id;
    #nome;
    #ativo;
    
    constructor(id, nome, ativo = true) {
        this.#id = id;
        this.#nome = nome;
        this.#ativo = ativo;
    }
    
    get id() { return this.#id; }
    get nome() { return this.#nome; }
    get ativo() { return this.#ativo; }
    
    toString() {
        let mensagem = `Nome: ${this.#nome} | ID: ${this.#id}`;
        if (!this.#ativo) {
            mensagem += " [INATIVO]";
        }
        return mensagem;
    }
    
    atualizarNome(novoNome) {
        if (!novoNome || novoNome.length < 3) {
            throw new Error("Nome inválido!");
        }
        this.#nome = novoNome;
    }
    
    inativar() {
        this.#ativo = false;
    }
}