const db = require("../models");
const response = require("../res");
const { sequelize } = require("../models");
const { QueryTypes } = require("sequelize");

exports.read = async (req, res) => {
  try {
    const result = await db.prediksi.findAll();

    return response.ok(result, res);
  } catch (error) {
    console.log(error);
    response.error(`${error}`, res);
  }
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db.prediksi.destroy({
      where: {
        id,
      },
    });

    return response.ok(result, res);
  } catch (error) {
    console.log(error);
  }
};

exports.detail = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db.prediksi.findByPk(id);

    const sumProduct = await db.prediksi.findByPk(id)
    console.log(sumProduct.dataValues.jumlah_product);

    const product = await sequelize.query(
      "SELECT DISTINCT product_id FROM penjualans",
      { type: QueryTypes.SELECT }
    );
    console.log(product.length)
    let productX = [];
    product.map((item) => productX.push(item.product_id));
    // console.log(productX);

    const getAllProduct = await db.penjualan.findAll({
      where: {
        product_id: productX,
      },
    });

    const maxProduct = [];
    const minProduct = [];
    const monthmax = [];
    const monthmin = [];

    for (let i = 0; i < productX.length; i++) {
      let temp = await db.penjualan.max("jumlah", {
        where: { product_id: productX[i] },
      });
      let temp2 = await db.penjualan.min("jumlah", {
        where: { product_id: productX[i] },
      });

      maxProduct.push(temp);
      minProduct.push(temp2);
    }

    for (let i = 0; i < productX.length; i++) {
      let temp = await db.penjualan.findOne({
        where: { jumlah: maxProduct[i] },
      });
      let temp2 = await db.penjualan.findOne({
        where: { jumlah: minProduct[i] },
      });
      monthmax.push(temp);
      monthmin.push(temp2);
    }

    const productList = await db.product.findAll({
      limit: sumProduct.dataValues.jumlah_product
    });

    const resultProduct = [];
    for (let i = 0; i < productList.length; i++) {
      let temp = {
        id: productList[i].dataValues.id,
        name: productList[i].dataValues.name,
        max: maxProduct[i],
        min: minProduct[i],
        monthmax: monthmax[i].dataValues.bulan,
        monthmin: monthmin[i].dataValues.bulan,
      };

      resultProduct.push(temp);
    }
    const resultfinal = {
      pred_m: result.pred_m,
      pred_y: result.pred_y,
      tahun: result.tahun,
      data: resultProduct,
    };

    return response.ok(resultfinal, res);
  } catch (error) {
    console.log(error);
    response.error(`${error}`, res);
  }
};

exports.getYear = async (req, res) => {
  try {
    const year = await sequelize.query(
      "SELECT DISTINCT tahun FROM penjualans",
      {
        type: QueryTypes.SELECT,
      }
    );

    return response.ok(year, res);
  } catch (error) {
    console.log(error);
    response.error(`${error}`, res);
  }
};
