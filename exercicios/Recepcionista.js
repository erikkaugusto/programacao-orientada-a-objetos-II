import User from "./User.js";

class Recepcionista extends User {
    constructor(nome, sexo, nascimento, role = "recepcionista", ativo = true) {
        super(nome, sexo, nascimento, role, ativo);
    }

    cadastrarCliente(nomeCliente) {
        return `Cliente ${nomeCliente} cadastrado!`
    }
}

const newRecepcionista = new Recepcionista("Mariana", "F", "2024-01-01");
console.log(newRecepcionista);
console.log(newRecepcionista.exibirInfos());
console.log(newRecepcionista.cadastrarCliente("João"));