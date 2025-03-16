const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Menu = sequelize.define("Menu",{
    name :{
        type: DataTypes.STRING,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Available:{
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
})

module.exports = Menu;