// importar o pacote 'mongoose'
const mongoose = require('mongoose');

// Definir o esquema dos nossos dados
const lembreteSchema = mongoose.Schema( {
  titulo: {
    type: String,
    required: true
   },
   dataComeco: {
    type: String,
    required: true,
  },
  dataTermino: {
    type: String,
    required: true
  },
  atividade: {
    type: String,
    required: true
  }
} );

// Criar um modelo associado ao esquema:
module.exports = mongoose.model('Lembrete', lembreteSchema)

const get = async () => {
    return Promise.reject('Oops!').catch(err => {
      throw new Error(err);
    });
  };
  
  get()
    .then(console.log)
    .catch(function(e) {
      console.log(e);
    });