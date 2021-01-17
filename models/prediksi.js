'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class prediksi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  prediksi.init({
    penjualan_id: DataTypes.INTEGER,
    pred_m: DataTypes.DECIMAL,
    pred_y: DataTypes.DECIMAL,
    tahun: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'prediksi',
  });
  return prediksi;
};