##📚 Sistema de Gerenciamento de Biblioteca

Um sistema web para gerenciamento de biblioteca, focado na aplicação de conceitos de Programação Orientada a Objetos (POO) com JavaScript puro e persistência de dados no Local Storage.

Este projeto foi desenvolvido como uma solução prática para os desafios de cadastro e gerenciamento de livros, autores e clientes, demonstrando um ciclo de vida de dados completo com operações CRUD.

🚀 Funcionalidades Principais

* **Gerenciamento de Autores:** CRUD completo (Criar, Ler, Atualizar, Inativar) para autores.
* **Gerenciamento de Clientes:** CRUD completo (Criar, Ler, Atualizar, Inativar) para clientes.
* **Gerenciamento de Livros:** CRUD completo (Criar, Ler, Atualizar, Inativar) para livros, com a associação obrigatória a um autor existente.
* **Persistência de Dados:** Todas as informações são salvas e recuperadas do **Local Storage** do navegador, permitindo que os dados não se percam ao recarregar a página.

## 💻 Conceitos Técnicos Aplicados

Este projeto foi uma imersão profunda em JavaScript moderno (ES6+) e POO.

* **Programação Orientada a Objetos (POO):**
    * **Classes:** Estruturação de todo o sistema em classes (`Pessoa`, `Autor`, `Cliente`, `Livro`, `BancoDeDados`).
    * **Herança:** Reutilização de código com a classe base `Pessoa` sendo estendida por `Autor` e `Cliente`.
    * **Encapsulamento:** Proteção de atributos internos utilizando campos privados (`#`).
    * **Métodos Estáticos:** Utilização de métodos auxiliares e de conversão (como `fromJSONorObject`).

* **Gerenciamento de Dados:**
    * **Local Storage:** Usado como banco de dados principal da aplicação.
    * **CRUD Lógico:** Os registros não são deletados, mas sim "inativados" (soft delete), preservando a integridade dos dados.
    * **IDs Únicos:** Geração de IDs prefixados (ex: `autor-`, `livro-`) para garantir a fácil recuperação e gerenciamento no Local Storage.

## 🖼️ Screenshots da Aplicação

### Cadastro
![Tela de Cadastro de Autor](./assets/cadastro-autor.png)
![Tela de Cadastro de Cliente](./assets/cadastrar-clientes.png)
![Tela de Cadastro de Livro](./assets/cadastrar-livros.png)

### Listagem e Gerenciamento
![Tela de Listagem de Autores](./assets/listar-autores.png)
![Tela de Listagem de Clientes](./assets/listar-clientes.png)
![Tela de Listagem de Livros](./assets/listar-livros.png)

## 🏁 Como Executar

Este projeto utiliza Módulos JavaScript (ES Modules), portanto, **não funcionará** se você abrir o arquivo `index.html` diretamente no navegador (via protocolo `file:///`).

É necessário executá-lo a partir de um servidor local.

### Opção 1: Com a extensão "Live Server" (Recomendado)

1.  Clone este repositório: `git clone https://github.com/cesaraugusto-snc/projeto-sistema-biblioteca.git`
2.  Navegue até a pasta do projeto e abra-a no **Visual Studio Code**.
3.  Caso não tenha, instale a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).
4.  Clique com o botão direito no arquivo `index.html`.
5.  Selecione a opção **"Open with Live Server"**.

### Opção 2: Usando um servidor Python (Alternativa)

Se você possui o Python instalado em sua máquina:

1.  Clone este repositório: `git clone https://github.com/cesaraugusto-snc/projeto-sistema-biblioteca.git`
2.  Navegue até a pasta do projeto pelo seu terminal (Prompt de Comando, PowerShell, etc.).
3.  Execute o comando:
    ```bash
    python -m http.server
    ```
4.  Abra seu navegador e acesse `http://localhost:8000`.
