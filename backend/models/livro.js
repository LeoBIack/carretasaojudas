// importar o pacote 'mongoose'
const mongoose = require('mongoose');

// Definir o esquema dos nossos dados
const livroSchema = mongoose.Schema( {
  titulo: {
    type: String,
    required: true
   },
  autor: {
    type: String,
    required: true,
  },
  numeroDePaginas: {
    type: String,
    required: true
  }
} );

// Criar um modelo associado ao esquema:
module.exports = mongoose.model('Livro', livroSchema)

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