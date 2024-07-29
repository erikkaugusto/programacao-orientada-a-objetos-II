
export default class User {
    #nome
    #sexo
    #nascimento
    #role
    #ativo
    constructor(nome, sexo, nascimento, role = "cliente", ativo = true) {
        this.#nome = nome;
        this.#sexo = sexo;
        this.#nascimento = nascimento;
        this.#role = role;
        this.#ativo = ativo;
    }

    get nome() {
        return this.#nome;
    }

    get sexo() {
        return this.#sexo;
    }

    get nascimento() {
        return this.#nascimento;
    }

    get role() {
        return this.#role;
    }

    get ativo() {
        return this.#ativo;
    }

    set nome(novoNome) {
        this.#nome = novoNome;
    }

    reservarQuarto(numQuarto, dataEntrada, dataSaida) {
        return `Quarto ${numQuarto} reservado entre os dias ${dataEntrada} e ${dataSaida}`;
    }

    exibirInfos() { // acesso somente atraves de instancia
        return `${this.#nome}, ${this.#sexo}`;
    }

    static exibirInfos(nome, sexo) { // acesso diretamente atraves de User
        return `Nome: ${nome}, sexo: ${sexo}`;
    }
}

const newUser = new User("Mateus", "M", "2024-01-01");
console.log(newUser);
console.log(newUser.exibirInfos());
console.log(newUser.reservarQuarto(202, "2024-01-01", "2024-01-04"));

console.log(User.exibirInfos("Erik", "M"));