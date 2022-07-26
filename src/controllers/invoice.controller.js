// Modelo de factura
const Invoice = require('../models/invoice.model'); 

// Traer todas las facturas
const getAllInvoices = (req,res) => {{
    Invoice.find({},(err,result) => {
        if(err){
            res.json({
                message: 'Error al traer las facturas',
                error: err
            })
        }else{
            res.send(result);
        }
    });
}}

// Traer un factura por su id
const getInvoice = (req,res) => {
    const invoiceId = req.params.id;

    Invoice.findOne({_id:invoiceId},(err,result) => {
        if(err){
            res.json({
                message: 'Error al traer la facturas',
                error: err
            })
        }else{
            res.send(result);
        }
    });
}

// Crear una factura
const createInvoice = (req,res) => {
    const datos = req.body;

    const invoice = new Invoice({
        id_user: datos.id_user,
        id_car: datos.id_car,
        dias_rentados: datos.dias_rentados,
        precio_dia: datos.precio_dia,
        total_pagado: datos.total_pagado
    });

    invoice.save((err,result) => {
        if(err){
            res.json({
                status:false,
                message: 'Error al traer crear la factura',
                error: err
            })
        }else{
            res.json({
                status:true,
                message: 'Factura creada'
            });
        }
    })
}

// Obtener las facturas de un usuario por su id
const getInvoicesByUserId = (req,res) => {
    const userId = req.params.idUser;

    Invoice.find({id_user:userId},(err,result) => {
        if(err){
            res.json({
                status: false,
                message: 'Error al traer facturas',
                error: err
            });
        }else{
            res.json({
                status: true,
                message: 'Facturas del usuario',
                data: result
            });
        }
    });
}
module.exports = {
    getAllInvoices,
    getInvoice,
    createInvoice,
    getInvoicesByUserId
}