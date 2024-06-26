'use strict';
const { hashSync } = require('bcryptjs');
const {
  Model
} = require('sequelize');
const { hashPassword } = require('../helper/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    username: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:{msg:"username is required"},
        notNull:{msg:"username is required"}
      }
    },
    email: {
      type:DataTypes.STRING,
      allowNull:false,
      unique:true,
      validate:{
        notEmpty:{msg:"email is required"},
        notNull:{msg:"email is required"},
        isEmail:{msg:"email is not valid"}
      }
    },
    role: {
      type:DataTypes.STRING,
      defaultValue:"public"
    },
    password: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:{msg:"password is required"},
        notNull:{msg:"password is required"},
        len:{ args:[5,20],
          msg:"password must contain at leat 5 caracter"}
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    });
  User.beforeCreate((user)=>{
    user.password = hashPassword(user.password)
  })
  return User;
};