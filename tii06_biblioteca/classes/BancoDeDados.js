import { Autor } from "./Autor.js";
import { Cliente } from "./Cliente.js";
import { Livro } from "./Livros.js";

export class BancoDeDados {
    // Métodos para Autores
    static salvarAutor(autor) {
        localStorage.setItem(autor.id, JSON.stringify({
            id: autor.id,
            nome: autor.nome,
            ativo: autor.ativo
        }));
    }
    
    static buscarAutorPorId(id) {
        const autorJSON = localStorage.getItem(id);
        if (autorJSON) {
            return Autor.fromJSONorObject(JSON.parse(autorJSON));
        }
        return null;
    }
    
    static listarAutores() {
        const autores = [];
        for (let i = 0; i < localStorage.length; i++) {
            const chave = localStorage.key(i);
            if (chave.startsWith("autor-")) {
                const autorJSON = localStorage.getItem(chave);
                autores.push(Autor.fromJSONorObject(JSON.parse(autorJSON)));
            }
        }
        return autores;
    }
    
    // Métodos para Clientes
    static salvarCliente(cliente) {
        localStorage.setItem(cliente.id, JSON.stringify({
            id: cliente.id,
            nome: cliente.nome,
            ativo: cliente.ativo
        }));
    }
    
    static buscarClientePorId(id) {
        const clienteJSON = localStorage.getItem(id);
        if (clienteJSON) {
            return Cliente.fromJSONorObject(JSON.parse(clienteJSON));
        }
        return null;
    }
    
    static listarClientes() {
        const clientes = [];
        for (let i = 0; i < localStorage.length; i++) {
            const chave = localStorage.key(i);
            if (chave.startsWith("cliente-")) {
                const clienteJSON = localStorage.getItem(chave);
                clientes.push(Cliente.fromJSONorObject(JSON.parse(clienteJSON)));
            }
        }
        return clientes;
    }
    
    // Métodos para Livros
    static salvarLivro(livro) {
        localStorage.setItem(livro.id, JSON.stringify({
            id: livro.id,
            titulo: livro.titulo,
            ano: livro.ano,
            autorId: livro.autor.id,
            ativo: livro.ativo
        }));
    }
    
    static buscarLivroPorId(id) {
        const livroJSON = localStorage.getItem(id);
        if (livroJSON) {
            const livroObj = JSON.parse(livroJSON);
            // Precisamos buscar o autor primeiro
            const autor = this.buscarAutorPorId(livroObj.autorId);
            if (autor) {
                return Livro.fromJSONorObject(livroObj, autor);
            }
        }
        return null;
    }
    
    static listarLivros() {
        const livros = [];
        for (let i = 0; i < localStorage.length; i++) {
            const chave = localStorage.key(i);
            if (chave.startsWith("livro-")) {
                const livroJSON = localStorage.getItem(chave);
                const livroObj = JSON.parse(livroJSON);
                const autor = this.buscarAutorPorId(livroObj.autorId);
                if (autor) {
                    livros.push(Livro.fromJSONorObject(livroObj, autor));
                }
            }
        }
        return livros;
    }
}