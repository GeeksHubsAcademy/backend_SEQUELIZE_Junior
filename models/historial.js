'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Historial extends Model {
    static associate(models) {
      this.belongsTo(models.User);
    }
  };
  Historial.init({
    cliente_id: DataTypes.INTEGER,
    alergias: DataTypes.BOOLEAN,
    historial: DataTypes.INTEGER,
    moroso: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Historial',
  });
  return Historial;
};