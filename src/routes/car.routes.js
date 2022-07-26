const {Router} = require('express');
const router = Router();

// Controladores
const {getAllCars,getCarByBrand,getCarById,createCar,updateCar,deleteCar} = require('../controllers/car.controllers');

router.get('',getAllCars);
router.get('/brand/:brand',getCarByBrand);
router.get('/:id',getCarById);
router.post('/create',createCar);
router.put('/update/:id',updateCar);
router.delete('/delete/:id',deleteCar);

module.exports = router;