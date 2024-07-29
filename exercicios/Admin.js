import User from "./User.js";

class Admin extends User {
    constructor(nome, sexo, nascimento, role = "admin", ativo = true) {
        super(nome, sexo, nascimento, role, ativo);
    }

    criarQuarto(numQuarto) {
        return `Quarto ${numQuarto} criado!`;
    }
}

const newAdmin = new Admin("Joana", "F", "2024-01-01");
console.log(newAdmin.exibirInfos());
newAdmin.nome = "Joanana";
console.log(newAdmin.exibirInfos());
console.log(newAdmin.criarQuarto(404));