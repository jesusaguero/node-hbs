var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ProductoSchema = new Schema({
    nombre: {type: String, required: true, max: 50},
    descripcion: {type: String, required: true, max: 70},
    precio: {type: Number, required: true},
    stock: {type: Number, required: true},
    created_at: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Producto', ProductoSchema);
