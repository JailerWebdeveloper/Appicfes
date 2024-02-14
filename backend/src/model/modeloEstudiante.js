const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

// Option 3: Passing parameters separately (other dialects)
const sequelize = require("../app/conexion");


const Estudiantes =sequelize.define(
    'Estudiantes',{
        Tipo_documento:{
            type:DataTypes.STRING
        },
        Nombre:{
            type:DataTypes.STRING
        },
        Apellido:{
            type:DataTypes.STRING
        },
        Telefono:{
            type:DataTypes.STRING
        },
        Direccion:{
            type:DataTypes.STRING
        },
        Colegio:{
            type:DataTypes.STRING
        },
        Municipio:{
            type:DataTypes.STRING
        },
        NombreApeAcu:{
            type:DataTypes.STRING
        },
        TelefonoAcu:{
            type:DataTypes.STRING
        },
        Estado:{
            type:DataTypes.STRING
        }
        
    }
);

module.exports=Estudiantes;