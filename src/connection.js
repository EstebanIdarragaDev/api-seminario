const mongoose = require('mongoose');
const {mongodb,mongodbNuve} = require('./config');




// Conexion local
// const connection = mongoose.connect(`mongodb://${mongodb.host}:${mongodb.port}/${mongodb.database}`)
// .then(resp => {
//     console.log('conexion exitosa !!');
// })
// .catch(err => {
//     console.log('Erro al conectarse => '+err);
// });





// Conexion a mongo atlas
const connection = mongoose.connect(`mongodb+srv://${mongodbNuve.user}:${mongodbNuve.password}@seminario.6yogfmk.mongodb.net/${mongodbNuve.database}?retryWrites=true&w=majority`)
.then(resp => {
    console.log('conexion a la nuve exitosa !!');
})
.catch(err => {
    console.log('Erro al conectarse => '+err);
});


module.exports = connection;