const cors = require('cors');
const express = require('express');
const app = express();
const connection = require('./connection');

// Configuraciones
app.set('port',process.env.PORT || 4000);
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());

// Rutas
app.get('/',(req,res) => res.send('Api works!!'));      // Ruta raiz
app.use('/users',require('./routes/user.routes'));      // Rutas Usuario
app.use('/cars',require('./routes/car.routes'));        // Rutas Vehiculo
app.use('/invoices',require('./routes/invoice.routes')); // Rutas Factura

// Subiendo el servidor
app.listen(app.get('port'), () => console.log(`server runs on http://localhost:${app.get('port')}`));