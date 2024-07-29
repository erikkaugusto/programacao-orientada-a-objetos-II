import User from "./User.js";

export default class Admin extends User {
    constructor(nome, email, nascimento, role = "admin", ativo = true) {
        super(nome, email, nascimento, role, ativo);
        // Super de Admin está definido dentro do constructor da superclasse (que neste caso é o User)
    }

    // exibirInfos() { // polimorfismo - sobreescrever o método da classe principal com um novo comportamento
    //     const infos = super.exibirInfos(); //
    //     return `admin - ${infos}`;
    // }

    criarCurso(nomeCurso, qtdVagas) {
        return `Curso ${nomeCurso} criado com ${qtdVagas} vagas`;
    }
}

// const novoAdmin = new Admin("Rodrigo", "r@r.com", "2024-01-01");
// console.log(novoAdmin);
// console.log(novoAdmin.exibirInfos());
// console.log(novoAdmin.criarCurso('Téc. Informática', '500'));