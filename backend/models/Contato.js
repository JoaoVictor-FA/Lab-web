const db = require('./connection')

const Contato = db.sequelize.define(
    'contatos',
    {
       name: {
        allowNull: false,
        type: db.Sequelize.STRING
       },
       phone:{
        allowNull: false,
        type: db.Sequelize.STRING
       },
       email:{
        type: db.Sequelize.STRING
       },
       photo:{
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