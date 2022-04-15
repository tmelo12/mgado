export default class AnimalSchema{
    static schema = {
        name: 'Animais',
        primaryKey: 'id',
        properties: {
            id: { type : 'int', indexed: true},
            especie: 'string',
            nome: 'string',
            sexo: 'string',
            categoria: 'string',
            nascimento: 'string',
            campo: 'string',
            id_mae: 'string',
            status: 'string',
            situacao: 'string',
            observacao: 'string'
        }
    }
}