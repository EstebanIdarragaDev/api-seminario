// Modelo de Vehiculo
const Car = require('../models/car.model');


// Traer todos los vehiculos
const getAllCars = (req,res) => {
    Car.find({},(err,result) => {
        if(err){
            res.json({
                status: false,
                message: 'Error al traer los vehiculos',
                error: err
            });
        }else{
            res.json({
                status: true,
                message: 'Todos los vehiculos',
                data: result
            })
        }
    });
}

// Traer vehiculos por marca
const getCarByBrand = (req,res) => {
    const brand = req.params.brand;

    Car.find({marca:brand},(err,result) => {
        if(err){
            res.json({
                message: 'Error al buscar vehiculo',
                error: err
            });
        }else{
            res.send(result);
        }
    });
}

// Traer un vehiculo por su id
const getCarById = (req,res) => {
    const carId = req.params.id;

    Car.find({_id:carId},(err,result) => {
        if(err){
            res.json({
                message: 'Error al buscar vehiculo',
                error: err
            });
        }else{
            res.send(result);
        }
    });
}

// Registrar Vehiculo
const createCar = (req,res) => {

    const datos = req.body;

    const car = new Car({
        nombre: req.body.nombre,
        marca: req.body.marca,
        modelo: req.body.modelo,
        anio: req.body.anio,
        tipo: req.body.tipo,
        numero_pasajeros: req.body.numero_pasajeros,
        numero_maleteros:  req.body.numero_maleteros,
        kilometraje: req.body.kilometraje,
        valor_alquiler: req.body.valor_alquiler,
        thumbnail: req.body.thumbnail
    });

    car.save((err,result) => {
        if(err){
            res.json({
                message: 'Error al registrar el vehiculo',
                error: err
            });
        }else{
            res.send('Vehiculo registrado');
        }
    });
}


// Actualizar vehiculo
const updateCar = (req,res) => {
    const idCar = req.params.id;
    const datos = req.body;

    Car.findOneAndUpdate({_id:idCar},datos,(err,result) => {
        if(err){
            res.json({
                message: 'Error al actualizar el vehiculo',
                error: err
            });
        }else{
            res.send('Vehiculo actualizado');
        }
    });
    
}

// Eliminar un vehiculo
const deleteCar = (req,res) => {
    const idCar = req.params.id;
    Car.findOneAndDelete({_id:idCar},(err,result) => {
        if(err){
            res.json({
                message: 'Error al eliminar el vehiculo',
                error: err
            });
        }else{
            res.send('Vehiculo eliminado');
        }
    })
}





module.exports = {
    getAllCars,
    getCarByBrand,
    getCarById,
    createCar,
    updateCar,
    deleteCar
}