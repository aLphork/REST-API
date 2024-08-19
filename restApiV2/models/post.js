const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Post = sequelize.define('Posts', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

module.exports = Post;