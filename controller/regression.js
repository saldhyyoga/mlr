const db = require("../models");
const response = require("../res");
const { QueryTypes } = require("sequelize");
const { sequelize } = require("../models");
const math = require("mathjs");

exports.read = async (req, res) => {
  try {
    if (req.body.year === "2019") {
      console.log("yes");

      const product = await sequelize.query(
        "SELECT DISTINCT product_id FROM penjualans",
        { type: QueryTypes.SELECT }
      );
      let productX = [];
      product.map((item) => productX.push(item.product_id));

      //   console.log(productX);

      const getAllProduct = await db.penjualan.findAll({
        where: {
          product_id: productX,
        },
      });

      const X1 = getAllProduct.filter((x) => x.product_id === 1);
      const X2 = getAllProduct.filter((x) => x.product_id === 2);
      const X3 = getAllProduct.filter((x) => x.product_id === 3);
      const X4 = getAllProduct.filter((x) => x.product_id === 4);

      const listX1 = [];
      for (let key in X1) {
        let temp = X1[key].dataValues.jumlah;
        listX1.push(temp);
      }
      const sigmaX1 = listX1.reduce((a, b) => a + b, 0);

      const listX2 = [];
      for (let key in X2) {
        let temp = X2[key].dataValues.jumlah;
        listX2.push(temp);
      }
      const sigmaX2 = listX2.reduce((a, b) => a + b, 0);

      const listX3 = [];
      for (let key in X3) {
        let temp = X3[key].dataValues.jumlah;
        listX3.push(temp);
      }
      const sigmaX3 = listX3.reduce((a, b) => a + b, 0);

      const listX4 = [];
      for (let key in X4) {
        let temp = X4[key].dataValues.jumlah;
        listX4.push(temp);
      }
      const sigmaX4 = listX4.reduce((a, b) => a + b, 0);

      let Y = [];
      X1.map((item, index) => {
        // console.log(item.dataValues);
        // console.log(X2[index].dataValues);
        let temp =
          X1[index].dataValues.jumlah +
          X2[index].dataValues.jumlah +
          X3[index].dataValues.jumlah +
          X4[index].dataValues.jumlah;
        Y.push(temp);
      });
      const sigmaY = Y.reduce((a, b) => a + b, 0);

      let X1Y = [];
      X1.map((item, index) => {
        let temp = X1[index].dataValues.jumlah * Y[index];
        X1Y.push(temp);
      });

      let X2Y = [];
      X2.map((item, index) => {
        let temp = X2[index].dataValues.jumlah * Y[index];
        X2Y.push(temp);
      });

      let X3Y = [];
      X3.map((item, index) => {
        let temp = X3[index].dataValues.jumlah * Y[index];
        X3Y.push(temp);
      });

      let X4Y = [];
      X4.map((item, index) => {
        let temp = X4[index].dataValues.jumlah * Y[index];
        X4Y.push(temp);
      });

      let X1X2 = [];
      X1.map((item, index) => {
        let temp = X1[index].dataValues.jumlah * X2[index].dataValues.jumlah;
        X1X2.push(temp);
      });

      let X1X3 = [];
      X1.map((item, index) => {
        let temp = X1[index].dataValues.jumlah * X3[index].dataValues.jumlah;
        X1X3.push(temp);
      });

      let X1X4 = [];
      X1.map((item, index) => {
        let temp = X1[index].dataValues.jumlah * X4[index].dataValues.jumlah;
        X1X4.push(temp);
      });

      let X2X2 = [];
      X2.map((item, index) => {
        let temp = X2[index].dataValues.jumlah * X2[index].dataValues.jumlah;
        X2X2.push(temp);
      });

      let X2X3 = [];
      X2.map((item, index) => {
        let temp = X2[index].dataValues.jumlah * X3[index].dataValues.jumlah;
        X2X3.push(temp);
      });

      let X2X4 = [];
      X2.map((item, index) => {
        let temp = X2[index].dataValues.jumlah * X4[index].dataValues.jumlah;
        X2X4.push(temp);
      });

      let X3X4 = [];
      X3.map((item, index) => {
        let temp = X3[index].dataValues.jumlah * X4[index].dataValues.jumlah;
        X3X4.push(temp);
      });

      let X12 = [];
      X1.map((item, index) => {
        let temp = X1[index].dataValues.jumlah * X1[index].dataValues.jumlah;
        X12.push(temp);
      });

      let X22 = [];
      X2.map((item, index) => {
        let temp = X2[index].dataValues.jumlah * X2[index].dataValues.jumlah;
        X22.push(temp);
      });

      let X32 = [];
      X3.map((item, index) => {
        let temp = X3[index].dataValues.jumlah * X3[index].dataValues.jumlah;
        X32.push(temp);
      });

      let X42 = [];
      X4.map((item, index) => {
        let temp = X4[index].dataValues.jumlah * X4[index].dataValues.jumlah;
        X42.push(temp);
      });

      const sigmaX2X2 = X2X2.reduce((a, b) => a + b, 0);

      const detA = [
        [12, 29974, 17383, 5057, 3388],
        [4146, 11281458, 6220812, 1766457, 1488001],
        [17383, 44873115, 25988443, 7538666, 5125194],
        [5057, 12992133, 7538666, 2210909, 1476101],
        [3388, 9378548, 5125194, 1476101, 1289352],
      ];

      console.log(parseFloat(math.det(detA)));

      response.ok(sigmaY, res);
    }
  } catch (error) {
    console.log(error);
    response.error(`${error}`, res);
  }
};
