const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const FoodMenu = sequelize.define("FoodMenu",{
    name :{
        type: DataTypes.STRING,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    Available:{
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
})

module.exports = FoodMenu;