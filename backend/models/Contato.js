const db = require('./connection')

const Contato = db.sequelize.define(
    'contatos',
    {
       nome: {
        allowNull: false,
        type: db.Sequelize.STRING
       },
       telefone:{
        allowNull: false,
        type: db.Sequelize.STRING
       },
       email:{
        type: db.Sequelize.STRING
       },
       foto:{
        type: db.Sequelize.STRING
       },
       tags: {
        type: db.Sequelize.STRING,
        get() {
            return this.getDataValue('tags').split(';')
        },
        set(val) {
           this.setDataValue('tags',val.join(';'))
        },
       }   
    }
);

module.exports = Contato
// Contato.sync({force: true})