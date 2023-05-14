var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var EmpleadoSchema = new Schema({
    nombre: {type: String, required: true, max: 30},
    apellido_paterno: {type: String, required: true, max: 30},
    apellido_materno: {type: String, required: true, max: 30},
    edad: {type: Number, required: true},
    puesto: {type: String, required: true, max: 60},
    salario: {type: Number, required: true},
    created_at: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Empleado', EmpleadoSchema);
