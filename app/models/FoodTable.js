const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');


const FoodTable = sequelize.define("FoodTable",{
    TableNumber:{
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false
    },
    capacity:{
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    status:{
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'Available'
    }
    
})

module.exports = FoodTable;