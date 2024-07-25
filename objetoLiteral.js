const user = {
    nome: 'Juliana',
    email: 'j@j.com',
    nascimento: 'estudante',
    ativo: true,
    exibirInfos: function () {
        console.log(this.nome, this.email);
    }
}