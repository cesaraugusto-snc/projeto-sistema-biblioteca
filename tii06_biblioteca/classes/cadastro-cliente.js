import { Cliente } from "./Cliente.js";
import { BancoDeDados } from "./BancoDeDados.js";

document.addEventListener("DOMContentLoaded", () => {
    const formCliente = document.getElementById("form-cliente");
    
    formCliente.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const nome = document.getElementById("nome").value;
        
        try {
            const cliente = new Cliente(nome);
            BancoDeDados.salvarCliente(cliente);
            
            alert("Cliente cadastrado com sucesso!");
            formCliente.reset();
        } catch (error) {
            alert(`Erro ao cadastrar cliente: ${error.message}`);
        }
    });
});