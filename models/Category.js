const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

// create our Category model ( table ) by extending off Sequelize's Model class 
class Category extends Model {}

Category.init(
  {
    // define columns 
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // pass in our imported sequelize connection ( the direct connection to our database )
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "category",
  }
);

module.exports = Category;
