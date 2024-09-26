const {DataTypes} = require ("sequelize");
const sequelize = require ("../config/bd");

const RefreshToken = sequelize.define("RefreshToken",{
     token:{
        type: DataTypes.STRING,
        allowNull: false,
     },
     userId:{
        type:DataTypes.INTEGER,
        allowNull:false
     }
    },{
        timestamps: false
});

module.exports = RefreshToken;