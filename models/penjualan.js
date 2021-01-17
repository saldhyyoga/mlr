"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class penjualan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.product);
    }
  }
  penjualan.init(
    {
      product_id: DataTypes.INTEGER,
      bulan: DataTypes.INTEGER,
      tahun: DataTypes.INTEGER,
      jumlah: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "penjualan",
      underscored: true,
      timestamps: false,
    }
  );
  return penjualan;
};
