'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    name: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        
      }
    },
    description: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        
      }
    },
    imgUrl: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        
      }
    },
    price: DataTypes.NUMBER,
    status: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        
      }
    }
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};