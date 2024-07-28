import Recepcionista from "./Recepcionista.js";

class Admin extends Recepcionista {
    constructor(nome, sexo, nascimento, role = "admin", ativo = true) {
        super(nome, sexo, nascimento, role, ativo);
    }

    criarQuarto(numQuarto) {
        return `Quarto ${numQuarto} criado!`
    }
}

// const novoAdmin = new Admin("Erik", "M", "2004-01-01");
// console.log(novoAdmin);
// console.log(novoAdmin.exibirInfos());
// console.log(novoAdmin.criarQuarto(204));
// console.log(novoAdmin.cadastrarCliente("Joana"));