const {Router} = require('express');
const router = Router();

// Controllers
const {getAllUsers,getUser,createUser,updateUser,deleteUser,login} = require('../controllers/user.controllers');

router.get('',getAllUsers);
router.get('/:id',getUser);
router.post('/login/login',login);
router.post('/create',createUser);
router.put('/update/:id',updateUser);
router.delete('/delete/:id',deleteUser);


module.exports = router;