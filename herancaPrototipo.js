const user = {
    nome: 'Juliana',
    email: 'j@j.com',
    nascimento: 'estudante',
    ativo: true,
    exibirInfos: function () {
        console.log(this.nome, this.email);
    }
}

const admin = {
    nome: 'Juliana',
    email: 'j@j.com',
    nascimento: 'estudante',
    ativo: true,
    criarCurso: function () {
        console.log(`Curso criado`);
    }
}

Object.setPrototypeOf(admin, user);
admin.criarCurso();
admin.exibirInfos();