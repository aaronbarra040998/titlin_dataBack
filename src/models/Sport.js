const mongoose = require('../database')

const SportSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  imgurl: {
    type: String,
    required: true
  },
  createdAt: { // cuando fue creado
    type: Date,
    default: Date.now
  },
  updatedAt: { // cuando fue actualizado
    type: Date,
    default: Date.now
  }
})

const Sport = mongoose.model('Sport', SportSchema)

module.exports = Sport
