export default class AnimalSchema{
    static schema = {
        name: 'Campos',
        primaryKey: 'id',
        properties: {
            id: { type : 'int', indexed: true},
            nome: 'string',
            cidade: 'string'
        }
    }
}