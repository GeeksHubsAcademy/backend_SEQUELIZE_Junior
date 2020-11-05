'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.hasMany(models.Cita);
      this.hasOne(models.Historial);
    }
  };
  User.init({
    rol: DataTypes.STRING,
    nombre: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    covid: DataTypes.BOOLEAN,
    telefono: DataTypes.INTEGER,
    direccion: DataTypes.STRING,
    moroso: DataTypes.BOOLEAN,
    dni: DataTypes.STRING,
    nacimiento: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};