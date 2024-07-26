const user = {
    nome: 'Juliana',
    email: 'j@j.com',
    nascimento: 'estudante',
    ativo: true,
    exibirInfos: function () {
        console.log(this.nome, this.email);
    }
}

const exibir = function () { // ERRO - a função perde a referência sobre o contexto
    console.log(this.nome, this.email);
}
exibir();

const exibirNome = exibir.bind(user); // Temos que atrelar ela (usando .bind) ao user
exibirNome();