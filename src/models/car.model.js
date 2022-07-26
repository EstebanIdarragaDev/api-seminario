const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carSchema = new Schema({
    nombre: String,
    marca: String,
    modelo: String,
    ano: Number,
    tipo: String,
    numero_pasajeros: Number,
    numero_maleteros: Number,
    kilometraje: Number,
    valor_alquiler: Number,
    thumbnail: String
});

const Car = mongoose.model('Car',carSchema);
module.exports = Car;