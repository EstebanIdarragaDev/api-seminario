const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const InvoiceSchema = new Schema({
    id_user: String,
    id_car: String,
    dias_rentados: Number,
    precio_dia: Number,
    total_pagado: Number
});

const Invoice = mongoose.model('Invoice',InvoiceSchema);
module.exports = Invoice;