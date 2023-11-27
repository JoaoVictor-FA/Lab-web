const Sequelize = require('sequelize')
const sequelize = new Sequelize('web','root','root',{
    host: "localhost",
    dialect: 'mysql'
})

sequelize.authenticate().then(()=>{console.log("Conectado com Sucesso")}).catch((err)=>{console.log("Conectado com falha: " + err)})

module.exports = {
    Sequelize : Sequelize,
    sequelize : sequelize
}