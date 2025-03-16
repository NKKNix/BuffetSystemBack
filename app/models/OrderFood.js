const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const FoodTable = require('./FoodTable');
const FoodMenu = require('./FoodMenu');


const Order = sequelize.define('Order', {
  status:{
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'กำลังดำเนินการ'
  }
  });
  

const OrderDetail = sequelize.define('OrderDetail', {
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    }});


Order.belongsTo(FoodTable, {
    foreignKey: {
      name: 'tableId', // This will be the foreign key in the Order table
      allowNull: false,
    },
    onDelete: 'CASCADE', // If a user is deleted, their orders will be deleted too
  });
  

  FoodTable.hasMany(Order, {
    foreignKey: 'tableId',
  });
  

  OrderDetail.belongsTo(FoodMenu, {
    foreignKey: {
      name: 'menuId', // This will be the foreign key in the OrderDetail table
      allowNull: false,
    },
    onDelete: 'CASCADE', // If a product is deleted, the associated order details are deleted too
  });
  

  FoodMenu.hasMany(OrderDetail, {
    foreignKey: 'menuId',
  });
  

  OrderDetail.belongsTo(Order, {
    foreignKey: {
      name: 'orderId', // This will be the foreign key in the OrderDetail table
      allowNull: false,
    },
    onDelete: 'CASCADE', // If an order is deleted, the associated order details are deleted too
  });
  

  Order.hasMany(OrderDetail, {
    foreignKey: 'orderId',
  });
  
  module.exports = {
    Order,
    OrderDetail,
};