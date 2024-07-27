import User from './User.js';

class Docente extends User {
    constructor(nome, email, nascimento, role = "docente", ativo = true) {
        super(nome, email, nascimento, role, ativo);
    }

    aprovarEstudante(estudante, curso) {
        return `Estudante ${estudante} foi aprovado no curso de ${curso} - Docente: ${this.nome}`;
    }
}

const novaDocente = new Docente("Ana", "a@a.com", "2024-01-01");
console.log(novaDocente.aprovarEstudante("João", "JavaScript - Orientação a Objetos"));