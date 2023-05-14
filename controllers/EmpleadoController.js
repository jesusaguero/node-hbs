var mongoose = require('mongoose');
var Empleado = require("../models/Empleado");


var empleadoController = {};


empleadoController.list = function(req, res){
   
    Empleado.find({}).exec(function(err, empleados){
        if( err ){ console.log('Error: ', err); return; }
        console.log("The INDEX");
        res.render('../views/empleado/index',
        {empleados: empleados,titulo:'INDEX'} );
       
    });
   
};


empleadoController.show = function(req, res){
    Empleado.findOne({_id: req.params.id}).exec(function(err, empleado){
        if( err ){ console.log('Error: ', err); return; }
       
        res.render('../views/empleado/show', {empleado: empleado} );
    });
   
};


empleadoController.create = function(req, res){
    res.render('../views/empleado/create');
};


empleadoController.save = function(req, res){
    var empleado = new Empleado( req.body );
   
    empleado.save(function(err){
        if( err ){ console.log('Error: ', err); return; }
       
        console.log("Successfully created a empleado. :)");
        res.redirect("/empleados/show/"+empleado._id);
        //res.redirect("/empleados");
    });
};


empleadoController.edit = function(req, res) {
  Empleado.findOne({_id: req.params.id}).exec(function (err, empleado) {
    if (err) { console.log("Error:", err); return; }
   
    res.render("../views/empleado/edit", {empleado: empleado});
   
  });
};


empleadoController.update = function(req, res){
    Empleado.findByIdAndUpdate( req.params.id, {$set: {
        nombre: req.body.nombre,
        apellido_paterno: req.body.apellido_paterno,
        apellido_materno: req.body.apellido_materno,
        edad: req.body.edad,
        puesto: req.body.puesto,
        salario: req.body.salario
    }}, { new: true },
    function( err, empleado){
        if( err ){
            console.log('Error: ', err);
            res.render('../views/empleado/edit', {empleado: req.body} );
        }
       
        console.log( empleado );
       
        res.redirect('/empleados/show/' + empleado._id);
       
    });
};


empleadoController.delete = function(req, res){
   
    Empleado.remove({_id: req.params.id}, function(err){
        if( err ){ console.log('Error: ', err); return; }
       
        console.log("Empleado deleted!");
        res.redirect("/empleados");
    });
   
};


module.exports = empleadoController;
