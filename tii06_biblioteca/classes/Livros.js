import { Utils } from "./Utils.js";

export class Livro {
    #id;
    #titulo;
    #ano;
    #autor;
    #ativo;
    
    constructor(titulo, ano, autor, id = null) {
        this.#id = id || Utils.getProximoId("livro-");
        this.#titulo = titulo;
        this.#ano = ano;
        this.#autor = autor; // Referência a uma instância da classe Autor
        this.#ativo = true;
    }
    
    get id() { return this.#id; }
    get titulo() { return this.#titulo; }
    get ano() { return this.#ano; }
    get autor() { return this.#autor; }
    get ativo() { return this.#ativo; }
    
    toString() {
        let mensagem = `Título: ${this.#titulo} (${this.#ano}) | Autor: ${this.#autor.nome} | ID: ${this.#id}`;
        if (!this.#ativo) {
            mensagem += " [INATIVO]";
        }
        return mensagem;
    }
    
    atualizarTitulo(novoTitulo) {
        if (!novoTitulo || novoTitulo.length < 2) {
            throw new Error("Título inválido!");
        }
        this.#titulo = novoTitulo;
    }
    
    atualizarAno(novoAno) {
        const anoAtual = new Date().getFullYear();
        if (isNaN(novoAno) || novoAno < 0 || novoAno > anoAtual) {
            throw new Error("Ano inválido!");
        }
        this.#ano = novoAno;
    }
    
    inativar() {
        this.#ativo = false;
    }
    
    static fromJSONorObject(json, autor) {
        // Precisa receber o autor já como objeto
        const livro = new Livro(json.titulo, json.ano, autor, json.id);
        if (json.ativo === false) {
            livro.inativar();
        }
        return livro;
    }
}