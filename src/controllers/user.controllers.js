// Modelo de Usuario
const User = require('../models/user.model');

// Paquete para encriptar la clave del usuario
const bcrypt = require('bcrypt');


// Traer todos los usuarios
const getAllUsers = (req,res) => {
    User.find({},(err,result) => {
        if(err){
            res.json({
                status: false,
                message: 'Error al traer todos los usuarios',
                error: err
            });
        }else{
            res.json({
                status:true,
                message: 'Todos los usuarios',
                data: result
            });
        }
    });
}

// Traer un usuario especifico por ID
const getUser = (req,res) => {
    const id = req.params.id;
    User.find({_id:id},(err,result) => {
        if(err){
            res.json({
                status: false,
                message: 'Error al buscar el usuario',
                error: err
            });
        }else{
            res.json({
                status: true,
                message: 'Usuario',
                data: result
            });
        }
    });
}

// Crear Usuario
const createUser = (req,res) => {
    const datos = req.body;
    const user = new User({
        nombres: datos.nombres,
        apellidos: datos.apellidos,
        cedula: datos.cedula,
        correo: datos.correo,
        contrasena: bcrypt.hashSync(req.body.contrasena,10)
    });

    user.save((err,result) => {
        if(err){
            res.json({
                status: false,
                message: 'Error al crear el usuario',
                error: err
            });
        }else{
            res.json({
                status: true,
                message: 'Usuario creado'
            });
        }
    });
}


// Actualizar usuario
const updateUser = (req,res) => {
    const id = req.params.id;
    const datos = req.body;

    User.findOneAndUpdate({_id:id},datos,(err,result) => {
        if(err){
            res.json({
                status: false,
                message: 'Error al actualizar el usuario',
                error: err
            });
        }else{
            res.json({
                status: true,
                message: 'Usuario actualizado'
            });
        }
    });
}


// Eliminar un usuario
const deleteUser = (req,res) => {
    const id = req.params.id;
    User.findOneAndDelete({_id:id},(err,result) => {
        if(err){
            res.json({
                status: false,
                message: 'Error al eliminar el usuario',
                error: err
            });
        }else{
            res.json({
                status: true,
                message:'Usuario eliminado'
            });
        }
    })
}

// Login - Valida un email y las claves del usuario
const login = (req,res) => {
    console.log(req.body);
    User.findOne({correo:req.body.correo},(err,result) => {
        if(err){
            res.json({
                status:true,
                message: 'Error al validar el login',
                error: err
            });
        }else{
            if(result){
                if(bcrypt.compareSync(req.body.contrasena,result.contrasena)){
                    res.json({
                        status: true,
                        message: 'Datos correctos,siga',
                        data: result
                    })
                }else{
                    res.json({
                        status:false,
                        message: 'Contraseña incorrecta'
                    });
                }
            }else{
                res.json({
                    status:false,
                    message: 'El usuario no existe'
                });
            }
        }
    });
}

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    login
}