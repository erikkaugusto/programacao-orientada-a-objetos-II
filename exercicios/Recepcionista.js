export default class Recepcionista {
    constructor(nome, sexo, nascimento, role = "recepcionista", ativo = true) {
        this.nome = nome;
        this.sexo = sexo;
        this.nascimento = nascimento;
        this.role = role;
        this.ativo = true;
    }

    cadastrarCliente(nomeCliente) {
        return `Cliente ${nomeCliente} cadastrado!`;
    }

    exibirInfos() {
        return `${this.nome}, ${this.sexo}, ${this.nascimento}, ${this.role}, ${this.ativo}`;
    }
}

// const novoRecepcionista = new Recepcionista("Ana", "F", "01-01-1999");
// console.log(novoRecepcionista);
// console.log(novoRecepcionista.exibirInfos());
// console.log(novoRecepcionista.cadastrarCliente("Erik"));