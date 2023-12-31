const { sequelize } = require('../../init.sequelize');
const { DataTypes } = require('sequelize');
const { options } = require('./defaultOptions');
const { Role } = require('./Role');

const Permission = sequelize.define(
    'permission',
    {
        permission_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    { ...options }
);

Permission.belongsToMany(Role, {
    through: 'role_permission',
    sourceKey: 'permission_id',
    targetKey: 'role_id',
});

module.exports = { Permission };
