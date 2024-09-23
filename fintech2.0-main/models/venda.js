'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Venda extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Venda.belongsTo(models.Cliente,
        {foreignKey: 'ClienteId',});
     
     Venda.belongsTo(models.Vendedor,
        {foreignKey: 'VendedorId'});
     
     Venda.belongsToMany(models.Produto,
        {foreignKey: 'ProdutoId', });
     
     Venda.hasMany(models.Item,
        {foreignKey: 'VendaId', });
     
    }
  }
  Venda.init({
    data: DataTypes.DATE,
    ClienteId: DataTypes.INTEGER,
    VendedorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Venda',
  });
  return Venda;
};