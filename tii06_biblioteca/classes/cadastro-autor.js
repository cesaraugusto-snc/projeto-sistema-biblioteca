import { Autor } from "./classes/Autor.js";
import { BancoDeDados } from "./classes/BancoDeDados.js";

document.addEventListener("DOMContentLoaded", () => {
    const formAutor = document.getElementById("form-autor");
    
    formAutor.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const nome = document.getElementById("nome").value;
        
        try {
            const autor = new Autor(nome);
            BancoDeDados.salvarAutor(autor);
            
            alert("Autor cadastrado com sucesso!");
            formAutor.reset();
        } catch (error) {
            alert(`Erro ao cadastrar autor: ${error.message}`);
        }
    });
});