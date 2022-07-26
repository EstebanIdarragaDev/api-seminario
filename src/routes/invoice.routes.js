const {Router} = require('express');
const router = Router();

// Controllers
const {getAllInvoices,getInvoice,createInvoice,getInvoicesByUserId} = require('../controllers/invoice.controller');

router.get('',getAllInvoices);
router.get('/:id',getInvoice);
router.get('/invoice/:idUser',getInvoicesByUserId);
router.post('/create',createInvoice);

module.exports = router;