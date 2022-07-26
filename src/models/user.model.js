const mongoose = require('mongoose');
const Shema = mongoose.Schema;

const UserSchema = new Shema({
    nombres: String,
    apellidos: String,
    cedula: Number,
    correo: String,
    contrasena: String
});

const User = mongoose.model('User',UserSchema);
module.exports = User;