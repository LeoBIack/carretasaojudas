const express = require ('express');
const app = express();
const bodyParser = require ('body-parser');

const mongoose = require('mongoose');

const Lembrete = require('./models/lembrete')

app.use (bodyParser.json());



mongoose.connect('mongodb+srv://user:12345@cluster0.1zrgk.mongodb.net/app-mean?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true
   })
  .then(() => {
    console.log("Conexão OK!");
  })
  .catch((error) => {
    console.log("Conexão não funcionou!");
    console.log(error);
  })


app.use ((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');

  next();
});

app.get('/api/lembretes', (req, res, next) => {
  Lembrete.find().then(
    documents => {
      res.status(200).json(
        {
          mensagem: "Tudo OK",
          lembretes: documents
        }
      );
    }
  );
});

app.post('/api/lembretes', (req, res, next) => {
  const lembrete = new Lembrete({
    titulo: req.body.titulo,
    dataComeco: req.body.dataComeco,
    dataTermino: req.body.dataTermino,
    atividade: req.body.atividade
  });

  lembrete.save();

  console.log(lembrete);
  res.status(201).json({mensagem: 'Lembrete inserido'})
});

module.exports = app;