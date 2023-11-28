const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

const Contato = require('./models/Contato')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())

app.get("/", async (req, res) => {
    const contatos = await Contato.findAll()
    res.send(contatos)
})

app.post("/", function(req, res){
    Contato.create({
        nome: req.body.nome,
        telefone: req.body.telefone,
        email: req.body.email,
        foto: req.body.foto,
        tags: req.body.tags
    })
    .then(()=>{res.send("Contato criado")})
    .catch((err)=>{res.send("Erro: " + err)})
})

app.delete("/", async (req, res) => {
    await Contato.destroy({
      where: {
        id: req.body.id
      } 
    }).then(()=>{
      res.send("Deletado")
    }).catch((err)=>{res.send("Erro: " + err)})
  })
  
  app.put("/", async (req, res) => {
    await Contato.update(
      {
        nome: req.body.nome,
        telefone: req.body.telefone,
        email: req.body.email,
        foto: req.body.foto,
        tags: req.body.tags
      },{
        where: {
          id: req.body.id
        } 
      }
    ).then(()=>{
      res.send("Atualizado")
    }).catch((err)=>{res.send("Erro: " + err)})
})

app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081")
})