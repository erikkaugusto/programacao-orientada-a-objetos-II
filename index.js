import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

// newUser.#nome = "Márcia"; // ERRO - o atributo nome é private
// console.log(novoUser.#montaObjUser()); // ERRO - o método é private
// console.log(novoUser.#nome);

// const novoUser = new User("Juliana", "j@j.com", "2024-01-01");
// console.log(novoUser.exibirInfos());
// novoUser.nome = "Julia"; // Sem o set Nome (em User.js) irá dar erro
// console.log(novoUser.exibirInfos());

// const novoAdmin = new Admin("Erik", "e@e.com", "2024-01-01");
// console.log(novoAdmin.exibirInfos());

// const novaDocente = new Docente("Ana", "a@a.com", "2024-01-01");
// console.log(novaDocente.exibirInfos());

const dadosFicticios = User.exibirInfos("Cassio", "c@c.com");
console.log(dadosFicticios);