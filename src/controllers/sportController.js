const Sport = require('../models/Sport')

// metodo get para obtener todos los deportes
exports.getAllSports = async (req, res) => {
  try {
    const sports = await Sport.find()
    res.json(sports)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
// metodo post para crear un deporte
exports.postSport = async (req, res) => {
  const { name, imgurl } = req.body
  try {
    const sport = new Sport({ name, imgurl })
    await sport.save()
    res.json(sport)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
// metodo get para obtener un deporte por id
exports.getSportById = async (req, res) => {
  try {
    const sport = await Sport.findById(req.params.id)
    res.json(sport)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}
// metodo put para actualizar un deporte
exports.putSport = async (req, res) => {
  const { id } = req.params
  const { name, imgurl } = req.body
  try {
    const sport = await Sport.findById(id)
    sport.name = name
    sport.imgurl = imgurl
    await sport.save()
    res.json(sport)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
// metodo para eliminar un deporte
exports.deleteSport = async (req, res) => {
  try {
    await Sport.findByIdAndDelete(req.params.id)
    res.json({ message: 'Sport deleted' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}
