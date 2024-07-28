import Recepcionista from "./Recepcionista.js";

class Cliente extends Recepcionista {
    constructor(nome, sexo, nascimento, role = "cliente", ativo = true) {
        super(nome, sexo, nascimento, role, ativo);
    }

    reservarQuarto(numQuarto, dataEntrada, dataSaída) {
        return `Quarto ${numQuarto} reservado entre os dias ${dataEntrada} - ${dataSaída}`;
    }
}

// const novoCliente = new Cliente("João", "M", "1990-01-01");
// console.log(novoCliente);
// console.log(novoCliente.exibirInfos());
// console.log(novoCliente.cadastrarCliente("Neymar"));
// console.log(novoCliente.reservarQuarto(294, "2021-01-01", "2021-02-02"));