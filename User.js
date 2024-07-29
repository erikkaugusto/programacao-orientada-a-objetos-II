export default class User {
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || "estudante";
        this.#ativo = ativo;
    }

    get nome() { // método acessor 
        return this.#nome;
    }

    get email() {
        return this.#email;
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

    set nome(novoNome) { // método setar/modificar
        if (novoNome === "") {
            throw new Error("Formato do nome inválido!");
        }
        this.#nome = novoNome;
    }

    exibirInfos() { // executado a partir de um instância ("new User")
        if (this.role === "estudante") {
            return `Dados estudante: ${this.nome}, ${this.email}`;
        }
        if (this.role === "admin") {
            return `Dados admin: ${this.nome}, ${this.role}`;
        }
        if (this.role === "docente") {
            return `Dados docente: ${this.nome}, ${this.email}`;
        }
    }

    static exibirInfos(nome, email) { // executado a partir de User
        return `${nome}, ${email}`;
    }
}

// const novoUser = new User('Juliana', 'j@j.com', '2024-01-01');
// console.log(novoUser);
// console.log(novoUser.exibirInfos());

// console.log(User.prototype.isPrototypeOf(novoUser));