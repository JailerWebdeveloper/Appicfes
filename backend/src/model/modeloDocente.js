const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

// Option 3: Passing parameters separately (other dialects)
const sequelize = require("../app/conexion");


const Docentes=sequelize.define(
   'Docentes',{
    Nombre:{
        type:DataTypes.STRING
    },
    Apellido:{
        type:DataTypes.STRING
    },
    Telefono:{
        type:DataTypes.STRING
    },
    Materia_Dicta:{
        type:DataTypes.STRING
    },
    Cobro:{
        type:DataTypes.BIGINT
    }

   }
);

module.exports=Docentes;