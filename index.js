import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novoUser = new User("Juliana", "j@j.com", "2024-01-01");
console.log(novoUser.exibirInfos());
novoUser.nome = "Julia"; // Sem o set Nome irá dar erro
console.log(novoUser.nome);

// newUser.#nome = "Márcia"; // ERRO - o atributo nome é private
// console.log(novoUser.#montaObjUser()); // ERRO - o método é private
// console.log(novoUser.#nome);