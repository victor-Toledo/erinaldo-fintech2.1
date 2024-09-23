'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Items', {
      
      VendaId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references:{
           model:'vendas',
           key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
     },
     
     ProdutoId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      references:{
         model:'produtos',
         key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
   },
   
   valor: {
    type: Sequelize.FLOAT
 },
 quantidade: {
    type: Sequelize.INTEGER
 },
 
      quantidade: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Items');
  }
};