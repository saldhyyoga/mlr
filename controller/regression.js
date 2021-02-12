const db = require("../models");
const response = require("../res");
const { QueryTypes } = require("sequelize");
const { sequelize } = require("../models");
const math = require("mathjs");

exports.read = async (req, res) => {
  try {
    const product = await sequelize.query(
      "SELECT DISTINCT product_id FROM penjualans",
      { type: QueryTypes.SELECT }
    );
    let productX = [];
    product.map((item) => productX.push(item.product_id));
    console.log(productX.length);
    console.log(product)

    const getAllProduct = await db.penjualan.findAll({
      where: {
        product_id: productX,
        tahun: req.body.year
      },
    });

    console.log(getAllProduct.length)

    if (productX.length === 4) {
      if (getAllProduct.length < 48) {
        return response.error(
          "Terdapat data penjualan yang belum lengkap",
          res
        );
      }

      const X1 = getAllProduct.filter((x) => x.product_id === productX[0]);
      const X2 = getAllProduct.filter((x) => x.product_id === productX[1]);
      const X3 = getAllProduct.filter((x) => x.product_id === productX[2]);
      const X4 = getAllProduct.filter((x) => x.product_id === productX[3]);

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
      const sigmaX1Y = X1Y.reduce((a, b) => a + b, 0);

      let X2Y = [];
      X2.map((item, index) => {
        let temp = X2[index].dataValues.jumlah * Y[index];
        X2Y.push(temp);
      });
      const sigmaX2Y = X2Y.reduce((a, b) => a + b, 0);

      let X3Y = [];
      X3.map((item, index) => {
        let temp = X3[index].dataValues.jumlah * Y[index];
        X3Y.push(temp);
      });
      const sigmaX3Y = X3Y.reduce((a, b) => a + b, 0);

      let X4Y = [];
      X4.map((item, index) => {
        let temp = X4[index].dataValues.jumlah * Y[index];
        X4Y.push(temp);
      });
      const sigmaX4Y = X4Y.reduce((a, b) => a + b, 0);

      let X1X1 = [];
      X1.map((item, index) => {
        let temp = X1[index].dataValues.jumlah * X1[index].dataValues.jumlah;
        X1X1.push(temp);
      });
      const sigmaX1X1 = X1X1.reduce((a, b) => a + b, 0);

      let X1X2 = [];
      X1.map((item, index) => {
        let temp = X1[index].dataValues.jumlah * X2[index].dataValues.jumlah;
        X1X2.push(temp);
      });
      const sigmaX1X2 = X1X2.reduce((a, b) => a + b, 0);

      let X1X3 = [];
      X1.map((item, index) => {
        let temp = X1[index].dataValues.jumlah * X3[index].dataValues.jumlah;
        X1X3.push(temp);
      });
      const sigmaX1X3 = X1X3.reduce((a, b) => a + b, 0);

      let X1X4 = [];
      X1.map((item, index) => {
        let temp = X1[index].dataValues.jumlah * X4[index].dataValues.jumlah;
        X1X4.push(temp);
      });
      const sigmaX1X4 = X1X4.reduce((a, b) => a + b, 0);

      let X2X2 = [];
      X2.map((item, index) => {
        let temp = X2[index].dataValues.jumlah * X2[index].dataValues.jumlah;
        X2X2.push(temp);
      });
      const sigmaX2X2 = X2X2.reduce((a, b) => a + b, 0);

      let X2X3 = [];
      X2.map((item, index) => {
        let temp = X2[index].dataValues.jumlah * X3[index].dataValues.jumlah;
        X2X3.push(temp);
      });
      const sigmaX2X3 = X2X3.reduce((a, b) => a + b, 0);

      let X2X4 = [];
      X2.map((item, index) => {
        let temp = X2[index].dataValues.jumlah * X4[index].dataValues.jumlah;
        X2X4.push(temp);
      });
      const sigmaX2X4 = X2X4.reduce((a, b) => a + b, 0);

      let X3X3 = [];
      X3.map((item, index) => {
        let temp = X3[index].dataValues.jumlah * X3[index].dataValues.jumlah;
        X3X3.push(temp);
      });
      const sigmaX3X3 = X3X3.reduce((a, b) => a + b, 0);

      let X3X4 = [];
      X3.map((item, index) => {
        let temp = X3[index].dataValues.jumlah * X4[index].dataValues.jumlah;
        X3X4.push(temp);
      });
      const sigmaX3X4 = X3X4.reduce((a, b) => a + b, 0);

      let X4X4 = [];
      X4.map((item, index) => {
        let temp = X4[index].dataValues.jumlah * X4[index].dataValues.jumlah;
        X4X4.push(temp);
      });
      const sigmaX4X4 = X4X4.reduce((a, b) => a + b, 0);

      const detA1 = [
        [X1.length, sigmaY, sigmaX2, sigmaX3, sigmaX4],
        [sigmaX1, sigmaX1Y, sigmaX1X2, sigmaX1X3, sigmaX1X4],
        [sigmaX2, sigmaX2Y, sigmaX2X2, sigmaX2X3, sigmaX2X4],
        [sigmaX3, sigmaX3Y, sigmaX2X3, sigmaX3X3, sigmaX3X4],
        [sigmaX4, sigmaX4Y, sigmaX2X4, sigmaX3X4, sigmaX4X4],
      ];
      const detA0 = [
        [sigmaY, sigmaX1, sigmaX2, sigmaX3, sigmaX4],
        [sigmaX1Y, sigmaX1X1, sigmaX1X2, sigmaX1X3, sigmaX1X4],
        [sigmaX2Y, sigmaX1X2, sigmaX2X2, sigmaX2X3, sigmaX2X4],
        [sigmaX3Y, sigmaX1X3, sigmaX2X3, sigmaX3X3, sigmaX3X4],
        [sigmaX4Y, sigmaX1X4, sigmaX2X4, sigmaX3X4, sigmaX4X4],
      ];
      const detA2 = [
        [X1.length, sigmaX1, sigmaY, sigmaX3, sigmaX4],
        [sigmaX1, sigmaX1X1, sigmaX1Y, sigmaX1X3, sigmaX1X4],
        [sigmaX2, sigmaX1X2, sigmaX2Y, sigmaX2X3, sigmaX2X4],
        [sigmaX3, sigmaX1X3, sigmaX3Y, sigmaX3X3, sigmaX3X4],
        [sigmaX4, sigmaX1X4, sigmaX4Y, sigmaX3X4, sigmaX4X4],
      ];
      const detA3 = [
        [X1.length, sigmaX1, sigmaX2, sigmaY, sigmaX4],
        [sigmaX1, sigmaX1X1, sigmaX1X2, sigmaX1Y, sigmaX1X4],
        [sigmaX2, sigmaX1X2, sigmaX2X2, sigmaX2Y, sigmaX2X4],
        [sigmaX3, sigmaX1X3, sigmaX2X3, sigmaX3Y, sigmaX3X4],
        [sigmaX4, sigmaX1X4, sigmaX2X4, sigmaX4Y, sigmaX4X4],
      ];
      const detA4 = [
        [X1.length, sigmaX1, sigmaX2, sigmaX3, sigmaY],
        [sigmaX1, sigmaX1X1, sigmaX1X2, sigmaX1X2, sigmaX1Y],
        [sigmaX2, sigmaX1X2, sigmaX2X2, sigmaX2X3, sigmaX2Y],
        [sigmaX3, sigmaX1X3, sigmaX2X3, sigmaX3X3, sigmaX3Y],
        [sigmaX4, sigmaX1X4, sigmaX2X4, sigmaX3X4, sigmaX4Y],
      ];
      const detA = [
        [X1.length, sigmaX1, sigmaX2, sigmaX3, sigmaX4],
        [sigmaX1, sigmaX1X1, sigmaX1X2, sigmaX1X3, sigmaX1X4],
        [sigmaX2, sigmaX1X2, sigmaX2X2, sigmaX2X3, sigmaX2X4],
        [sigmaX3, sigmaX1X3, sigmaX2X3, sigmaX3X3, sigmaX3X4],
        [sigmaX4, sigmaX1X4, sigmaX2X4, sigmaX3X4, sigmaX4X4],
      ];

      const detMatriksA1 = math.det(detA1);
      const detMatriksA0 = 2.57071;
      const detMatriksA2 = math.det(detA2);
      const detMatriksA3 = math.det(detA3);
      const detMatriksA4 = math.det(detA4);
      const detMatriksA = math.det(detA);
      console.log(
        detMatriksA0,
        detMatriksA,
        detMatriksA1,
        detMatriksA2,
        detMatriksA3,
        detMatriksA4
      );

      const a = detMatriksA0 / detMatriksA;
      const b1 = detMatriksA1 / detMatriksA;
      const b2 = detMatriksA2 / detMatriksA;
      const b3 = detMatriksA3 / detMatriksA;
      const b4 = detMatriksA4 / detMatriksA;

      const result =
        a + b1 * sigmaX1 + b2 * sigmaX2 + b3 * sigmaX3 + b4 * sigmaX4;
      console.log(result.toFixed());
      console.log(b1);
      const result2 = result.toFixed();
      const resultfinal = parseInt(result2.substr(0, 5)) / 3;
      const pred_m = resultfinal / 12;

      const createPrediction = await db.prediksi.create({
        pred_m: pred_m,
        pred_y: resultfinal,
        tahun: req.body.year,
        jumlah_product: 4
      });

      // response.ok(parseInt(resultfinal), res);
      return response.ok("Success", res);
    }
    if (productX.length === 5) {
      console.log("yes");
      if (getAllProduct.length < 60) {
        return response.error(
          "Terdapat data penjualan yang belum lengkap",
          res
        );
      }
      console.log(getAllProduct);

      const X1 = getAllProduct.filter((x) => x.product_id === productX[0]);
      const X2 = getAllProduct.filter((x) => x.product_id === productX[1]);
      const X3 = getAllProduct.filter((x) => x.product_id === productX[2]);
      const X4 = getAllProduct.filter((x) => x.product_id === productX[3]);
      const X5 = getAllProduct.filter((x) => x.product_id === productX[4]);

      const listX1 = [];
      const listX2 = [];
      const listX3 = [];
      const listX4 = [];
      const listX5 = [];

      for (let key in X1) {
        let temp = X1[key].dataValues.jumlah;
        listX1.push(temp);
      }

      for (let key in X2) {
        let temp = X2[key].dataValues.jumlah;
        listX2.push(temp);
      }

      for (let key in X3) {
        let temp = X3[key].dataValues.jumlah;
        listX3.push(temp);
      }

      for (let key in X4) {
        let temp = X4[key].dataValues.jumlah;
        listX4.push(temp);
      }

      for (let key in X5) {
        let temp = X5[key].dataValues.jumlah;
        listX5.push(temp);
      }

      const sigmaX1 = listX1.reduce((a, b) => a + b, 0);
      const sigmaX2 = listX2.reduce((a, b) => a + b, 0);
      const sigmaX3 = listX3.reduce((a, b) => a + b, 0);
      const sigmaX4 = listX4.reduce((a, b) => a + b, 0);
      const sigmaX5 = listX5.reduce((a, b) => a + b, 0);

      let Y = [];
      X1.map((item, index) => {
        // console.log(item.dataValues);
        // console.log(X2[index].dataValues);
        let temp =
          X1[index].dataValues.jumlah +
          X2[index].dataValues.jumlah +
          X3[index].dataValues.jumlah +
          X4[index].dataValues.jumlah +
          X5[index].dataValues.jumlah;
        Y.push(temp);
      });
      const sigmaY = Y.reduce((a, b) => a + b, 0);

      let X1Y = [];
      X1.map((item, index) => {
        let temp = X1[index].dataValues.jumlah * Y[index];
        X1Y.push(temp);
      });
      const sigmaX1Y = X1Y.reduce((a, b) => a + b, 0);

      let X2Y = [];
      X2.map((item, index) => {
        let temp = X2[index].dataValues.jumlah * Y[index];
        X2Y.push(temp);
      });
      const sigmaX2Y = X2Y.reduce((a, b) => a + b, 0);

      let X3Y = [];
      X3.map((item, index) => {
        let temp = X3[index].dataValues.jumlah * Y[index];
        X3Y.push(temp);
      });
      const sigmaX3Y = X3Y.reduce((a, b) => a + b, 0);

      let X4Y = [];
      X4.map((item, index) => {
        let temp = X4[index].dataValues.jumlah * Y[index];
        X4Y.push(temp);
      });
      const sigmaX4Y = X4Y.reduce((a, b) => a + b, 0);

      let X5Y = [];
      X5.map((item, index) => {
        let temp = X5[index].dataValues.jumlah * Y[index];
        X5Y.push(temp);
      });
      const sigmaX5Y = X5Y.reduce((a, b) => a + b, 0);
      // console.log(sigmaX1, sigmaX2, sigmaX3, sigmaX4, sigmaX5, sigmaY);

      // console.log(sigmaX1Y, sigmaX2Y, sigmaX3Y, sigmaX4Y, sigmaX5Y);
      let X1X1 = [];
      X1.map((item, index) => {
        let temp = X1[index].dataValues.jumlah * X1[index].dataValues.jumlah;
        X1X1.push(temp);
      });
      const sigmaX1X1 = X1X1.reduce((a, b) => a + b, 0);

      let X1X2 = [];
      X1.map((item, index) => {
        let temp = X1[index].dataValues.jumlah * X2[index].dataValues.jumlah;
        X1X2.push(temp);
      });
      const sigmaX1X2 = X1X2.reduce((a, b) => a + b, 0);

      let X1X3 = [];
      X1.map((item, index) => {
        let temp = X1[index].dataValues.jumlah * X3[index].dataValues.jumlah;
        X1X3.push(temp);
      });
      const sigmaX1X3 = X1X3.reduce((a, b) => a + b, 0);

      let X1X4 = [];
      X1.map((item, index) => {
        let temp = X1[index].dataValues.jumlah * X4[index].dataValues.jumlah;
        X1X4.push(temp);
      });
      const sigmaX1X4 = X1X4.reduce((a, b) => a + b, 0);

      let X1X5 = [];
      X1.map((item, index) => {
        let temp = X1[index].dataValues.jumlah * X5[index].dataValues.jumlah;
        X1X5.push(temp);
      });
      const sigmaX1X5 = X1X5.reduce((a, b) => a + b, 0);

      // console.log(sigmaX1X1, sigmaX1X2, sigmaX1X3, sigmaX1X4, sigmaX1X5);
      let X2X2 = [];
      X2.map((item, index) => {
        let temp = X2[index].dataValues.jumlah * X2[index].dataValues.jumlah;
        X2X2.push(temp);
      });
      const sigmaX2X2 = X2X2.reduce((a, b) => a + b, 0);

      let X2X3 = [];
      X2.map((item, index) => {
        let temp = X2[index].dataValues.jumlah * X3[index].dataValues.jumlah;
        X2X3.push(temp);
      });
      const sigmaX2X3 = X2X3.reduce((a, b) => a + b, 0);

      let X2X4 = [];
      X2.map((item, index) => {
        let temp = X2[index].dataValues.jumlah * X4[index].dataValues.jumlah;
        X2X4.push(temp);
      });
      const sigmaX2X4 = X2X4.reduce((a, b) => a + b, 0);

      let X2X5 = [];
      X2.map((item, index) => {
        let temp = X2[index].dataValues.jumlah * X5[index].dataValues.jumlah;
        X2X5.push(temp);
      });
      const sigmaX2X5 = X2X5.reduce((a, b) => a + b, 0);

      // console.log(sigmaX2X2, sigmaX2X3, sigmaX2X4, sigmaX2X5);
      let X3X3 = [];
      X3.map((item, index) => {
        let temp = X3[index].dataValues.jumlah * X3[index].dataValues.jumlah;
        X3X3.push(temp);
      });
      const sigmaX3X3 = X3X3.reduce((a, b) => a + b, 0);

      let X3X4 = [];
      X3.map((item, index) => {
        let temp = X3[index].dataValues.jumlah * X4[index].dataValues.jumlah;
        X3X4.push(temp);
      });
      const sigmaX3X4 = X3X4.reduce((a, b) => a + b, 0);

      let X3X5 = [];
      X3.map((item, index) => {
        let temp = X3[index].dataValues.jumlah * X5[index].dataValues.jumlah;
        X3X5.push(temp);
      });
      const sigmaX3X5 = X3X5.reduce((a, b) => a + b, 0);

      let X4X4 = [];
      X4.map((item, index) => {
        let temp = X4[index].dataValues.jumlah * X4[index].dataValues.jumlah;
        X4X4.push(temp);
      });
      const sigmaX4X4 = X4X4.reduce((a, b) => a + b, 0);

      let X4X5 = [];
      X5.map((item, index) => {
        let temp = X4[index].dataValues.jumlah * X5[index].dataValues.jumlah;
        X4X5.push(temp);
      });
      const sigmaX4X5 = X4X5.reduce((a, b) => a + b, 0);

      let X5X5 = [];
      X5.map((item, index) => {
        let temp = X5[index].dataValues.jumlah * X5[index].dataValues.jumlah;
        X5X5.push(temp);
      });
      const sigmaX5X5 = X5X5.reduce((a, b) => a + b, 0);

      const detA1 = [
        [X1.length, sigmaY, sigmaX2, sigmaX3, sigmaX4, sigmaX5],
        [sigmaX1, sigmaX1Y, sigmaX1X2, sigmaX1X3, sigmaX1X4, sigmaX1X5],
        [sigmaX2, sigmaX2Y, sigmaX2X2, sigmaX2X3, sigmaX2X4, sigmaX2X5],
        [sigmaX3, sigmaX3Y, sigmaX2X3, sigmaX3X3, sigmaX3X4, sigmaX3X5],
        [sigmaX4, sigmaX4Y, sigmaX2X4, sigmaX3X4, sigmaX4X4, sigmaX4X5],
        [sigmaX5, sigmaX5Y, sigmaX2X5, sigmaX3X5, sigmaX4X5, sigmaX5X5],
      ];
      const detA0 = [
        [sigmaY, sigmaX1, sigmaX2, sigmaX3, sigmaX4, sigmaX5],
        [sigmaX1Y, sigmaX1X1, sigmaX1X2, sigmaX1X3, sigmaX1X4, sigmaX1X5],
        [sigmaX2Y, sigmaX1X2, sigmaX2X2, sigmaX2X3, sigmaX2X4, sigmaX2X5],
        [sigmaX3Y, sigmaX1X3, sigmaX2X3, sigmaX3X3, sigmaX3X4, sigmaX3X5],
        [sigmaX4Y, sigmaX1X4, sigmaX2X4, sigmaX3X4, sigmaX4X4, sigmaX4X5],
        [sigmaX5Y, sigmaX1X5, sigmaX2X5, sigmaX3X5, sigmaX4X5, sigmaX5X5],
      ];
      const detA2 = [
        [X1.length, sigmaX1, sigmaY, sigmaX3, sigmaX4, sigmaX5],
        [sigmaX1, sigmaX1X1, sigmaX1Y, sigmaX1X3, sigmaX1X4, sigmaX1X5],
        [sigmaX2, sigmaX1X2, sigmaX2Y, sigmaX2X3, sigmaX2X4, sigmaX2X5],
        [sigmaX3, sigmaX1X3, sigmaX3Y, sigmaX3X3, sigmaX3X4, sigmaX3X5],
        [sigmaX4, sigmaX1X4, sigmaX4Y, sigmaX3X4, sigmaX4X4, sigmaX4X5],
        [sigmaX5, sigmaX1X5, sigmaX5Y, sigmaX3X5, sigmaX4X5, sigmaX5X5],
      ];
      const detA3 = [
        [X1.length, sigmaX1, sigmaX2, sigmaY, sigmaX4, sigmaX5],
        [sigmaX1, sigmaX1X1, sigmaX1X2, sigmaX1Y, sigmaX1X4, sigmaX1X5],
        [sigmaX2, sigmaX1X2, sigmaX2X2, sigmaX2Y, sigmaX2X4, sigmaX2X5],
        [sigmaX3, sigmaX1X3, sigmaX2X3, sigmaX3Y, sigmaX3X4, sigmaX3X3],
        [sigmaX4, sigmaX1X4, sigmaX2X4, sigmaX4Y, sigmaX4X4, sigmaX4X5],
        [sigmaX5, sigmaX1X5, sigmaX2X5, sigmaX5Y, sigmaX4X5, sigmaX5X5],
      ];
      const detA4 = [
        [X1.length, sigmaX1, sigmaX2, sigmaX3, sigmaY, sigmaX5],
        [sigmaX1, sigmaX1X1, sigmaX1X2, sigmaX1X2, sigmaX1Y, sigmaX1X5],
        [sigmaX2, sigmaX1X2, sigmaX2X2, sigmaX2X3, sigmaX2Y, sigmaX2X5],
        [sigmaX3, sigmaX1X3, sigmaX2X3, sigmaX3X3, sigmaX3Y, sigmaX3X5],
        [sigmaX4, sigmaX1X4, sigmaX2X4, sigmaX3X4, sigmaX4Y, sigmaX4X5],
        [sigmaX5, sigmaX1X5, sigmaX2X5, sigmaX3X5, sigmaX5Y, sigmaX5X5],
      ];
      const detA = [
        [X1.length, sigmaX1, sigmaX2, sigmaX3, sigmaX4, sigmaX5],
        [sigmaX1, sigmaX1X1, sigmaX1X2, sigmaX1X3, sigmaX1X4, sigmaX1X5],
        [sigmaX2, sigmaX1X2, sigmaX2X2, sigmaX2X3, sigmaX2X4, sigmaX2X5],
        [sigmaX3, sigmaX1X3, sigmaX2X3, sigmaX3X3, sigmaX3X4, sigmaX3X5],
        [sigmaX4, sigmaX1X4, sigmaX2X4, sigmaX3X4, sigmaX4X4, sigmaX4X5],
        [sigmaX5, sigmaX1X5, sigmaX2X5, sigmaX3X5, sigmaX4X5, sigmaX5X5],
      ];

      const detA5 = [
        [X1.length, sigmaX1, sigmaX2, sigmaX3, sigmaX4, sigmaY],
        [sigmaX1, sigmaX1X1, sigmaX1X2, sigmaX1X2, sigmaX1X4, sigmaX1Y],
        [sigmaX2, sigmaX1X2, sigmaX2X2, sigmaX2X3, sigmaX2X4, sigmaX2Y],
        [sigmaX3, sigmaX1X3, sigmaX2X3, sigmaX3X3, sigmaX3X4, sigmaX3Y],
        [sigmaX4, sigmaX1X4, sigmaX2X4, sigmaX3X4, sigmaX4X4, sigmaX4Y],
        [sigmaX5, sigmaX1X5, sigmaX2X5, sigmaX3X5, sigmaX4X5, sigmaX5Y],
      ];
      const detMatriksA1 = math.det(detA1);
      const detMatriksA0 = math.det(detA0);
      const detMatriksA2 = math.det(detA2);
      const detMatriksA3 = math.det(detA3);
      const detMatriksA4 = math.det(detA4);
      const detMatriksA5 = math.det(detA5);
      const detMatriksA = math.det(detA);

      console.log(
        detMatriksA0,
        detMatriksA,
        detMatriksA1,
        detMatriksA2,
        detMatriksA3,
        detMatriksA4
      );

      const a = detMatriksA0 / detMatriksA;
      const b1 = detMatriksA1 / detMatriksA;
      const b2 = detMatriksA2 / detMatriksA;
      const b3 = detMatriksA3 / detMatriksA;
      const b4 = detMatriksA4 / detMatriksA;
      const b5 = detMatriksA5 / detMatriksA;

      const result =
        a +
        b1 * sigmaX1 +
        b2 * sigmaX2 +
        b3 * sigmaX3 +
        b4 * sigmaX4 +
        b5 * sigmaX5;
      console.log(result.toFixed());
      console.log(b1);
      const result2 = result.toFixed();
      const resultfinal = parseInt(result2.substr(0, 5)) / 3;
      const pred_m = resultfinal / 12;
      console.log(resultfinal);

      const createPrediction = await db.prediksi.create({
        pred_m: pred_m,
        pred_y: resultfinal,
        tahun: req.body.year,
        jumlah_product: 5
      });

      return response.ok("Success", res);
    }
    if (productX.length === 6) {
      console.log("yes");
      if (getAllProduct.length < 72) {
        return response.error(
          "Terdapat data penjualan yang belum lengkap",
          res
        );
      }
      console.log(getAllProduct);

      const X1 = getAllProduct.filter((x) => x.product_id === productX[0]);
      const X2 = getAllProduct.filter((x) => x.product_id === productX[1]);
      const X3 = getAllProduct.filter((x) => x.product_id === productX[2]);
      const X4 = getAllProduct.filter((x) => x.product_id === productX[3]);
      const X5 = getAllProduct.filter((x) => x.product_id === productX[4]);
      const X6 = getAllProduct.filter((x) => x.product_id === productX[5]);

      const listX1 = [];
      const listX2 = [];
      const listX3 = [];
      const listX4 = [];
      const listX5 = [];
      const listX6 = [];

      for (let key in X1) {
        let temp = X1[key].dataValues.jumlah;
        listX1.push(temp);
      }

      for (let key in X2) {
        let temp = X2[key].dataValues.jumlah;
        listX2.push(temp);
      }

      for (let key in X3) {
        let temp = X3[key].dataValues.jumlah;
        listX3.push(temp);
      }

      for (let key in X4) {
        let temp = X4[key].dataValues.jumlah;
        listX4.push(temp);
      }

      for (let key in X5) {
        let temp = X5[key].dataValues.jumlah;
        listX5.push(temp);
      }

      for (let key in X6) {
        let temp = X6[key].dataValues.jumlah;
        listX6.push(temp);
      }

      const sigmaX1 = listX1.reduce((a, b) => a + b, 0);
      const sigmaX2 = listX2.reduce((a, b) => a + b, 0);
      const sigmaX3 = listX3.reduce((a, b) => a + b, 0);
      const sigmaX4 = listX4.reduce((a, b) => a + b, 0);
      const sigmaX5 = listX5.reduce((a, b) => a + b, 0);
      const sigmaX6 = listX6.reduce((a, b) => a + b, 0);

      let Y = [];
      X1.map((item, index) => {
        // console.log(item.dataValues);
        // console.log(X2[index].dataValues);
        let temp =
          X1[index].dataValues.jumlah +
          X2[index].dataValues.jumlah +
          X3[index].dataValues.jumlah +
          X4[index].dataValues.jumlah +
          X5[index].dataValues.jumlah +
          X6[index].dataValues.jumlah;
        Y.push(temp);
      });
      const sigmaY = Y.reduce((a, b) => a + b, 0);

      let X1Y = [];
      X1.map((item, index) => {
        let temp = X1[index].dataValues.jumlah * Y[index];
        X1Y.push(temp);
      });
      const sigmaX1Y = X1Y.reduce((a, b) => a + b, 0);

      let X2Y = [];
      X2.map((item, index) => {
        let temp = X2[index].dataValues.jumlah * Y[index];
        X2Y.push(temp);
      });
      const sigmaX2Y = X2Y.reduce((a, b) => a + b, 0);

      let X3Y = [];
      X3.map((item, index) => {
        let temp = X3[index].dataValues.jumlah * Y[index];
        X3Y.push(temp);
      });
      const sigmaX3Y = X3Y.reduce((a, b) => a + b, 0);

      let X4Y = [];
      X4.map((item, index) => {
        let temp = X4[index].dataValues.jumlah * Y[index];
        X4Y.push(temp);
      });
      const sigmaX4Y = X4Y.reduce((a, b) => a + b, 0);

      let X5Y = [];
      X5.map((item, index) => {
        let temp = X5[index].dataValues.jumlah * Y[index];
        X5Y.push(temp);
      });
      const sigmaX5Y = X5Y.reduce((a, b) => a + b, 0);

      let X6Y = [];
      X6.map((item, index) => {
        let temp = X6[index].dataValues.jumlah * Y[index];
        X6Y.push(temp);
      });
      const sigmaX6Y = X6Y.reduce((a, b) => a + b, 0);
      // console.log(sigmaX1, sigmaX2, sigmaX3, sigmaX4, sigmaX5, sigmaX6, sigmaY);

      // console.log(sigmaX1Y, sigmaX2Y, sigmaX3Y, sigmaX4Y, sigmaX5Y);

      let X1X1 = [];
      X1.map((item, index) => {
        let temp = X1[index].dataValues.jumlah * X1[index].dataValues.jumlah;
        X1X1.push(temp);
      });
      const sigmaX1X1 = X1X1.reduce((a, b) => a + b, 0);

      let X1X2 = [];
      X1.map((item, index) => {
        let temp = X1[index].dataValues.jumlah * X2[index].dataValues.jumlah;
        X1X2.push(temp);
      });
      const sigmaX1X2 = X1X2.reduce((a, b) => a + b, 0);

      let X1X3 = [];
      X1.map((item, index) => {
        let temp = X1[index].dataValues.jumlah * X3[index].dataValues.jumlah;
        X1X3.push(temp);
      });
      const sigmaX1X3 = X1X3.reduce((a, b) => a + b, 0);

      let X1X4 = [];
      X1.map((item, index) => {
        let temp = X1[index].dataValues.jumlah * X4[index].dataValues.jumlah;
        X1X4.push(temp);
      });
      const sigmaX1X4 = X1X4.reduce((a, b) => a + b, 0);

      let X1X5 = [];
      X1.map((item, index) => {
        let temp = X1[index].dataValues.jumlah * X5[index].dataValues.jumlah;
        X1X5.push(temp);
      });
      const sigmaX1X5 = X1X5.reduce((a, b) => a + b, 0);

      let X1X6 = [];
      X1.map((item, index) => {
        let temp = X1[index].dataValues.jumlah * X6[index].dataValues.jumlah;
        X1X6.push(temp);
      });
      const sigmaX1X6 = X1X6.reduce((a, b) => a + b, 0);

      // console.log(
      //   sigmaX1X1,
      //   sigmaX1X2,
      //   sigmaX1X3,
      //   sigmaX1X4,
      //   sigmaX1X5,
      //   sigmaX1X6
      // );
      let X2X2 = [];
      X2.map((item, index) => {
        let temp = X2[index].dataValues.jumlah * X2[index].dataValues.jumlah;
        X2X2.push(temp);
      });
      const sigmaX2X2 = X2X2.reduce((a, b) => a + b, 0);

      let X2X3 = [];
      X2.map((item, index) => {
        let temp = X2[index].dataValues.jumlah * X3[index].dataValues.jumlah;
        X2X3.push(temp);
      });
      const sigmaX2X3 = X2X3.reduce((a, b) => a + b, 0);

      let X2X4 = [];
      X2.map((item, index) => {
        let temp = X2[index].dataValues.jumlah * X4[index].dataValues.jumlah;
        X2X4.push(temp);
      });
      const sigmaX2X4 = X2X4.reduce((a, b) => a + b, 0);

      let X2X5 = [];
      X2.map((item, index) => {
        let temp = X2[index].dataValues.jumlah * X5[index].dataValues.jumlah;
        X2X5.push(temp);
      });
      const sigmaX2X5 = X2X5.reduce((a, b) => a + b, 0);

      let X2X6 = [];
      X2.map((item, index) => {
        let temp = X2[index].dataValues.jumlah * X6[index].dataValues.jumlah;
        X2X6.push(temp);
      });
      const sigmaX2X6 = X2X6.reduce((a, b) => a + b, 0);

      // console.log(sigmaX2X2, sigmaX2X3, sigmaX2X4, sigmaX2X5, sigmaX2X6);
      let X3X3 = [];
      X3.map((item, index) => {
        let temp = X3[index].dataValues.jumlah * X3[index].dataValues.jumlah;
        X3X3.push(temp);
      });
      const sigmaX3X3 = X3X3.reduce((a, b) => a + b, 0);

      let X3X4 = [];
      X3.map((item, index) => {
        let temp = X3[index].dataValues.jumlah * X4[index].dataValues.jumlah;
        X3X4.push(temp);
      });
      const sigmaX3X4 = X3X4.reduce((a, b) => a + b, 0);

      let X3X5 = [];
      X3.map((item, index) => {
        let temp = X3[index].dataValues.jumlah * X5[index].dataValues.jumlah;
        X3X5.push(temp);
      });
      const sigmaX3X5 = X3X5.reduce((a, b) => a + b, 0);

      let X3X6 = [];
      X6.map((item, index) => {
        let temp = X3[index].dataValues.jumlah * X6[index].dataValues.jumlah;
        X3X6.push(temp);
      });
      const sigmaX3X6 = X3X6.reduce((a, b) => a + b, 0);

      let X4X4 = [];
      X4.map((item, index) => {
        let temp = X4[index].dataValues.jumlah * X4[index].dataValues.jumlah;
        X4X4.push(temp);
      });
      const sigmaX4X4 = X4X4.reduce((a, b) => a + b, 0);

      let X4X5 = [];
      X4.map((item, index) => {
        let temp = X4[index].dataValues.jumlah * X5[index].dataValues.jumlah;
        X4X5.push(temp);
      });
      const sigmaX4X5 = X4X5.reduce((a, b) => a + b, 0);

      let X4X6 = [];
      X4.map((item, index) => {
        let temp = X4[index].dataValues.jumlah * X6[index].dataValues.jumlah;
        X4X6.push(temp);
      });
      const sigmaX4X6 = X4X6.reduce((a, b) => a + b, 0);

      let X5X5 = [];
      X5.map((item, index) => {
        let temp = X5[index].dataValues.jumlah * X5[index].dataValues.jumlah;
        X5X5.push(temp);
      });
      const sigmaX5X5 = X5X5.reduce((a, b) => a + b, 0);

      let X5X6 = [];
      X5.map((item, index) => {
        let temp = X5[index].dataValues.jumlah * X6[index].dataValues.jumlah;
        X5X6.push(temp);
      });
      const sigmaX5X6 = X5X6.reduce((a, b) => a + b, 0);

      let X6X6 = [];
      X6.map((item, index) => {
        let temp = X6[index].dataValues.jumlah * X6[index].dataValues.jumlah;
        X6X6.push(temp);
      });
      const sigmaX6X6 = X6X6.reduce((a, b) => a + b, 0);

      const detA1 = [
        [X1.length, sigmaY, sigmaX2, sigmaX3, sigmaX4, sigmaX5, sigmaX6],
        [
          sigmaX1,
          sigmaX1Y,
          sigmaX1X2,
          sigmaX1X3,
          sigmaX1X4,
          sigmaX1X5,
          sigmaX1X6,
        ],
        [
          sigmaX2,
          sigmaX2Y,
          sigmaX2X2,
          sigmaX2X3,
          sigmaX2X4,
          sigmaX2X5,
          sigmaX2X6,
        ],
        [
          sigmaX3,
          sigmaX3Y,
          sigmaX2X3,
          sigmaX3X3,
          sigmaX3X4,
          sigmaX3X5,
          sigmaX3X6,
        ],
        [
          sigmaX4,
          sigmaX4Y,
          sigmaX2X4,
          sigmaX3X4,
          sigmaX4X4,
          sigmaX4X5,
          sigmaX4X6,
        ],
        [
          sigmaX5,
          sigmaX5Y,
          sigmaX2X5,
          sigmaX3X5,
          sigmaX4X5,
          sigmaX5X5,
          sigmaX5X6,
        ],
        [
          sigmaX6,
          sigmaX6Y,
          sigmaX2X6,
          sigmaX3X6,
          sigmaX4X6,
          sigmaX5X6,
          sigmaX6X6,
        ],
      ];
      const detA0 = [
        [sigmaY, sigmaX1, sigmaX2, sigmaX3, sigmaX4, sigmaX5, sigmaX6],
        [
          sigmaX1Y,
          sigmaX1X1,
          sigmaX1X2,
          sigmaX1X3,
          sigmaX1X4,
          sigmaX1X5,
          sigmaX1X6,
        ],
        [
          sigmaX2Y,
          sigmaX1X2,
          sigmaX2X2,
          sigmaX2X3,
          sigmaX2X4,
          sigmaX2X5,
          sigmaX2X6,
        ],
        [
          sigmaX3Y,
          sigmaX1X3,
          sigmaX2X3,
          sigmaX3X3,
          sigmaX3X4,
          sigmaX3X5,
          sigmaX3X6,
        ],
        [
          sigmaX4Y,
          sigmaX1X4,
          sigmaX2X4,
          sigmaX3X4,
          sigmaX4X4,
          sigmaX4X5,
          sigmaX4X6,
        ],
        [
          sigmaX5Y,
          sigmaX1X5,
          sigmaX2X5,
          sigmaX3X5,
          sigmaX4X5,
          sigmaX5X5,
          sigmaX5X6,
        ],
        [
          sigmaX6Y,
          sigmaX1X6,
          sigmaX2X6,
          sigmaX3X6,
          sigmaX4X6,
          sigmaX5X6,
          sigmaX6X6,
        ],
      ];
      const detA2 = [
        [X1.length, sigmaX1, sigmaY, sigmaX3, sigmaX4, sigmaX5, sigmaX6],
        [
          sigmaX1,
          sigmaX1X1,
          sigmaX1Y,
          sigmaX1X3,
          sigmaX1X4,
          sigmaX1X5,
          sigmaX1X6,
        ],
        [
          sigmaX2,
          sigmaX1X2,
          sigmaX2Y,
          sigmaX2X3,
          sigmaX2X4,
          sigmaX2X5,
          sigmaX2X6,
        ],
        [
          sigmaX3,
          sigmaX1X3,
          sigmaX3Y,
          sigmaX3X3,
          sigmaX3X4,
          sigmaX3X5,
          sigmaX3X6,
        ],
        [
          sigmaX4,
          sigmaX1X4,
          sigmaX4Y,
          sigmaX3X4,
          sigmaX4X4,
          sigmaX4X5,
          sigmaX4X6,
        ],
        [
          sigmaX5,
          sigmaX1X5,
          sigmaX5Y,
          sigmaX3X5,
          sigmaX4X5,
          sigmaX5X5,
          sigmaX5X6,
        ],
        [
          sigmaX6,
          sigmaX1X6,
          sigmaX6Y,
          sigmaX3X6,
          sigmaX4X6,
          sigmaX5X6,
          sigmaX6X6,
        ],
      ];
      const detA3 = [
        [X1.length, sigmaX1, sigmaX2, sigmaY, sigmaX4, sigmaX5, sigmaX6],
        [
          sigmaX1,
          sigmaX1X1,
          sigmaX1X2,
          sigmaX1Y,
          sigmaX1X4,
          sigmaX1X5,
          sigmaX1X6,
        ],
        [
          sigmaX2,
          sigmaX1X2,
          sigmaX2X2,
          sigmaX2Y,
          sigmaX2X4,
          sigmaX2X5,
          sigmaX2X6,
        ],
        [
          sigmaX3,
          sigmaX1X3,
          sigmaX2X3,
          sigmaX3Y,
          sigmaX3X4,
          sigmaX3X3,
          sigmaX3X6,
        ],
        [
          sigmaX4,
          sigmaX1X4,
          sigmaX2X4,
          sigmaX4Y,
          sigmaX4X4,
          sigmaX4X5,
          sigmaX4X6,
        ],
        [
          sigmaX5,
          sigmaX1X5,
          sigmaX2X5,
          sigmaX5Y,
          sigmaX4X5,
          sigmaX5X5,
          sigmaX5X6,
        ],
        [
          sigmaX6,
          sigmaX1X6,
          sigmaX2X6,
          sigmaX6Y,
          sigmaX4X6,
          sigmaX5X6,
          sigmaX6X6,
        ],
      ];
      const detA4 = [
        [X1.length, sigmaX1, sigmaX2, sigmaX3, sigmaY, sigmaX5, sigmaX6],
        [
          sigmaX1,
          sigmaX1X1,
          sigmaX1X2,
          sigmaX1X2,
          sigmaX1Y,
          sigmaX1X5,
          sigmaX1X6,
        ],
        [
          sigmaX2,
          sigmaX1X2,
          sigmaX2X2,
          sigmaX2X3,
          sigmaX2Y,
          sigmaX2X5,
          sigmaX2X6,
        ],
        [
          sigmaX3,
          sigmaX1X3,
          sigmaX2X3,
          sigmaX3X3,
          sigmaX3Y,
          sigmaX3X5,
          sigmaX3X6,
        ],
        [
          sigmaX4,
          sigmaX1X4,
          sigmaX2X4,
          sigmaX3X4,
          sigmaX4Y,
          sigmaX4X5,
          sigmaX4X6,
        ],
        [
          sigmaX5,
          sigmaX1X5,
          sigmaX2X5,
          sigmaX3X5,
          sigmaX5Y,
          sigmaX5X5,
          sigmaX5X6,
        ],
        [
          sigmaX6,
          sigmaX1X6,
          sigmaX2X6,
          sigmaX3X6,
          sigmaX6Y,
          sigmaX5X6,
          sigmaX6X6,
        ],
      ];
      const detA = [
        [X1.length, sigmaX1, sigmaX2, sigmaX3, sigmaX4, sigmaX5, sigmaX6],
        [
          sigmaX1,
          sigmaX1X1,
          sigmaX1X2,
          sigmaX1X3,
          sigmaX1X4,
          sigmaX1X5,
          sigmaX1X6,
        ],
        [
          sigmaX2,
          sigmaX1X2,
          sigmaX2X2,
          sigmaX2X3,
          sigmaX2X4,
          sigmaX2X5,
          sigmaX2X6,
        ],
        [
          sigmaX3,
          sigmaX1X3,
          sigmaX2X3,
          sigmaX3X3,
          sigmaX3X4,
          sigmaX3X5,
          sigmaX3X6,
        ],
        [
          sigmaX4,
          sigmaX1X4,
          sigmaX2X4,
          sigmaX3X4,
          sigmaX4X4,
          sigmaX4X5,
          sigmaX4X6,
        ],
        [
          sigmaX5,
          sigmaX1X5,
          sigmaX2X5,
          sigmaX3X5,
          sigmaX4X5,
          sigmaX5X5,
          sigmaX5X6,
        ],
        [
          sigmaX6,
          sigmaX1X6,
          sigmaX2X6,
          sigmaX3X6,
          sigmaX4X6,
          sigmaX5X6,
          sigmaX6X6,
        ],
      ];

      const detA5 = [
        [X1.length, sigmaX1, sigmaX2, sigmaX3, sigmaX4, sigmaY, sigmaX6],
        [
          sigmaX1,
          sigmaX1X1,
          sigmaX1X2,
          sigmaX1X2,
          sigmaX1X4,
          sigmaX1Y,
          sigmaX1X6,
        ],
        [
          sigmaX2,
          sigmaX1X2,
          sigmaX2X2,
          sigmaX2X3,
          sigmaX2X4,
          sigmaX2Y,
          sigmaX2X6,
        ],
        [
          sigmaX3,
          sigmaX1X3,
          sigmaX2X3,
          sigmaX3X3,
          sigmaX3X4,
          sigmaX3Y,
          sigmaX3X6,
        ],
        [
          sigmaX4,
          sigmaX1X4,
          sigmaX2X4,
          sigmaX3X4,
          sigmaX4X4,
          sigmaX4Y,
          sigmaX4X6,
        ],
        [
          sigmaX5,
          sigmaX1X5,
          sigmaX2X5,
          sigmaX3X5,
          sigmaX4X5,
          sigmaX5Y,
          sigmaX5X6,
        ],
        [
          sigmaX6,
          sigmaX1X6,
          sigmaX2X6,
          sigmaX3X6,
          sigmaX4X6,
          sigmaX6Y,
          sigmaX6X6,
        ],
      ];

      const detA6 = [
        [X1.length, sigmaX1, sigmaX2, sigmaX3, sigmaX4, sigmaX5, sigmaY],
        [
          sigmaX1,
          sigmaX1X1,
          sigmaX1X2,
          sigmaX1X2,
          sigmaX1X4,
          sigmaX1X5,
          sigmaX1Y,
        ],
        [
          sigmaX2,
          sigmaX1X2,
          sigmaX2X2,
          sigmaX2X3,
          sigmaX2X4,
          sigmaX2X5,
          sigmaX2Y,
        ],
        [
          sigmaX3,
          sigmaX1X3,
          sigmaX2X3,
          sigmaX3X3,
          sigmaX3X4,
          sigmaX3X5,
          sigmaX3Y,
        ],
        [
          sigmaX4,
          sigmaX1X4,
          sigmaX2X4,
          sigmaX3X4,
          sigmaX4X4,
          sigmaX4X5,
          sigmaX4Y,
        ],
        [
          sigmaX5,
          sigmaX1X5,
          sigmaX2X5,
          sigmaX3X5,
          sigmaX4X5,
          sigmaX5X5,
          sigmaX5Y,
        ],
        [
          sigmaX6,
          sigmaX1X6,
          sigmaX2X6,
          sigmaX3X6,
          sigmaX4X6,
          sigmaX5X6,
          sigmaX6Y,
        ],
      ];

      const detMatriksA1 = math.det(detA1);
      const detMatriksA0 = math.det(detA0);
      const detMatriksA2 = math.det(detA2);
      const detMatriksA3 = math.det(detA3);
      const detMatriksA4 = math.det(detA4);
      const detMatriksA5 = math.det(detA5);
      const detMatriksA6 = math.det(detA6);
      const detMatriksA = math.det(detA);

      console.log(
        detMatriksA0,
        detMatriksA,
        detMatriksA1,
        detMatriksA2,
        detMatriksA3,
        detMatriksA4,
        detMatriksA5,
        detMatriksA6
      );

      const a = detMatriksA0 / detMatriksA;
      const b1 = detMatriksA1 / detMatriksA;
      const b2 = detMatriksA2 / detMatriksA;
      const b3 = detMatriksA3 / detMatriksA;
      const b4 = detMatriksA4 / detMatriksA;
      const b5 = detMatriksA5 / detMatriksA;
      const b6 = detMatriksA6 / detMatriksA;

      const result =
        a +
        b1 * sigmaX1 +
        b2 * sigmaX2 +
        b3 * sigmaX3 +
        b4 * sigmaX4 +
        b5 * sigmaX5 +
        b6 * sigmaX6;
      console.log(result.toFixed());
      console.log(b1);
      const result2 = result.toFixed();
      const resultfinal = parseInt(result2.substr(0, 5)) / 3;
      const pred_m = resultfinal / 12;
      console.log(resultfinal, pred_m);

      const createPrediction = await db.prediksi.create({
        pred_m: pred_m,
        pred_y: resultfinal,
        tahun: req.body.year,
        jumlah_product: 6
      });

      return response.ok("Success", res);
    }
    if (productX.length === 7) {
      console.log("yes");
      if (getAllProduct.length < 84) {
        return response.error(
          "Terdapat data penjualan yang belum lengkap",
          res
        );
      }
      // console.log(getAllProduct);

      const X1 = getAllProduct.filter((x) => x.product_id === productX[0]);
      const X2 = getAllProduct.filter((x) => x.product_id === productX[1]);
      const X3 = getAllProduct.filter((x) => x.product_id === productX[2]);
      const X4 = getAllProduct.filter((x) => x.product_id === productX[3]);
      const X5 = getAllProduct.filter((x) => x.product_id === productX[4]);
      const X6 = getAllProduct.filter((x) => x.product_id === productX[5]);
      const X7 = getAllProduct.filter((x) => x.product_id === productX[6]);

      const listX1 = [];
      const listX2 = [];
      const listX3 = [];
      const listX4 = [];
      const listX5 = [];
      const listX6 = [];
      const listX7 = [];

      for (let key in X1) {
        let temp = X1[key].dataValues.jumlah;
        listX1.push(temp);
      }

      for (let key in X2) {
        let temp = X2[key].dataValues.jumlah;
        listX2.push(temp);
      }

      for (let key in X3) {
        let temp = X3[key].dataValues.jumlah;
        listX3.push(temp);
      }

      for (let key in X4) {
        let temp = X4[key].dataValues.jumlah;
        listX4.push(temp);
      }

      for (let key in X5) {
        let temp = X5[key].dataValues.jumlah;
        listX5.push(temp);
      }

      for (let key in X6) {
        let temp = X6[key].dataValues.jumlah;
        listX6.push(temp);
      }

      for (let key in X7) {
        let temp = X7[key].dataValues.jumlah;
        listX7.push(temp);
      }

      const sigmaX1 = listX1.reduce((a, b) => a + b, 0);
      const sigmaX2 = listX2.reduce((a, b) => a + b, 0);
      const sigmaX3 = listX3.reduce((a, b) => a + b, 0);
      const sigmaX4 = listX4.reduce((a, b) => a + b, 0);
      const sigmaX5 = listX5.reduce((a, b) => a + b, 0);
      const sigmaX6 = listX6.reduce((a, b) => a + b, 0);
      const sigmaX7 = listX7.reduce((a, b) => a + b, 0);

      let Y = [];
      X1.map((item, index) => {
        // console.log(item.dataValues);
        // console.log(X2[index].dataValues);
        let temp =
          X1[index].dataValues.jumlah +
          X2[index].dataValues.jumlah +
          X3[index].dataValues.jumlah +
          X4[index].dataValues.jumlah +
          X5[index].dataValues.jumlah +
          X6[index].dataValues.jumlah +
          X7[index].dataValues.jumlah;
        Y.push(temp);
      });
      const sigmaY = Y.reduce((a, b) => a + b, 0);

      let X1Y = [];
      X1.map((item, index) => {
        let temp = X1[index].dataValues.jumlah * Y[index];
        X1Y.push(temp);
      });
      const sigmaX1Y = X1Y.reduce((a, b) => a + b, 0);

      let X2Y = [];
      X2.map((item, index) => {
        let temp = X2[index].dataValues.jumlah * Y[index];
        X2Y.push(temp);
      });
      const sigmaX2Y = X2Y.reduce((a, b) => a + b, 0);

      let X3Y = [];
      X3.map((item, index) => {
        let temp = X3[index].dataValues.jumlah * Y[index];
        X3Y.push(temp);
      });
      const sigmaX3Y = X3Y.reduce((a, b) => a + b, 0);

      let X4Y = [];
      X4.map((item, index) => {
        let temp = X4[index].dataValues.jumlah * Y[index];
        X4Y.push(temp);
      });
      const sigmaX4Y = X4Y.reduce((a, b) => a + b, 0);

      let X5Y = [];
      X5.map((item, index) => {
        let temp = X5[index].dataValues.jumlah * Y[index];
        X5Y.push(temp);
      });
      const sigmaX5Y = X5Y.reduce((a, b) => a + b, 0);

      let X6Y = [];
      X6.map((item, index) => {
        let temp = X6[index].dataValues.jumlah * Y[index];
        X6Y.push(temp);
      });
      const sigmaX6Y = X6Y.reduce((a, b) => a + b, 0);

      let X7Y = [];
      X7.map((item, index) => {
        let temp = X7[index].dataValues.jumlah * Y[index];
        X7Y.push(temp);
      });
      const sigmaX7Y = X7Y.reduce((a, b) => a + b, 0);
      // console.log(
      //   sigmaX1,
      //   sigmaX2,
      //   sigmaX3,
      //   sigmaX4,
      //   sigmaX5,
      //   sigmaX6,
      //   sigmaX7,
      //   sigmaY
      // );

      // console.log(
      //   sigmaX1Y,
      //   sigmaX2Y,
      //   sigmaX3Y,
      //   sigmaX4Y,
      //   sigmaX5Y,
      //   sigmaX6Y,
      //   sigmaX7Y
      // );

      let X1X1 = [];
      X1.map((item, index) => {
        let temp = X1[index].dataValues.jumlah * X1[index].dataValues.jumlah;
        X1X1.push(temp);
      });
      const sigmaX1X1 = X1X1.reduce((a, b) => a + b, 0);

      let X1X2 = [];
      X1.map((item, index) => {
        let temp = X1[index].dataValues.jumlah * X2[index].dataValues.jumlah;
        X1X2.push(temp);
      });
      const sigmaX1X2 = X1X2.reduce((a, b) => a + b, 0);

      let X1X3 = [];
      X1.map((item, index) => {
        let temp = X1[index].dataValues.jumlah * X3[index].dataValues.jumlah;
        X1X3.push(temp);
      });
      const sigmaX1X3 = X1X3.reduce((a, b) => a + b, 0);

      let X1X4 = [];
      X1.map((item, index) => {
        let temp = X1[index].dataValues.jumlah * X4[index].dataValues.jumlah;
        X1X4.push(temp);
      });
      const sigmaX1X4 = X1X4.reduce((a, b) => a + b, 0);

      let X1X5 = [];
      X1.map((item, index) => {
        let temp = X1[index].dataValues.jumlah * X5[index].dataValues.jumlah;
        X1X5.push(temp);
      });
      const sigmaX1X5 = X1X5.reduce((a, b) => a + b, 0);

      let X1X6 = [];
      X1.map((item, index) => {
        let temp = X1[index].dataValues.jumlah * X6[index].dataValues.jumlah;
        X1X6.push(temp);
      });
      const sigmaX1X6 = X1X6.reduce((a, b) => a + b, 0);

      let X1X7 = [];
      X1.map((item, index) => {
        let temp = X1[index].dataValues.jumlah * X7[index].dataValues.jumlah;
        X1X7.push(temp);
      });
      const sigmaX1X7 = X1X6.reduce((a, b) => a + b, 0);

      // console.log(
      //   sigmaX1X1,
      //   sigmaX1X2,
      //   sigmaX1X3,
      //   sigmaX1X4,
      //   sigmaX1X5,
      //   sigmaX1X6,
      //   sigmaX1X7
      // );
      let X2X2 = [];
      X2.map((item, index) => {
        let temp = X2[index].dataValues.jumlah * X2[index].dataValues.jumlah;
        X2X2.push(temp);
      });
      const sigmaX2X2 = X2X2.reduce((a, b) => a + b, 0);

      let X2X3 = [];
      X2.map((item, index) => {
        let temp = X2[index].dataValues.jumlah * X3[index].dataValues.jumlah;
        X2X3.push(temp);
      });
      const sigmaX2X3 = X2X3.reduce((a, b) => a + b, 0);

      let X2X4 = [];
      X2.map((item, index) => {
        let temp = X2[index].dataValues.jumlah * X4[index].dataValues.jumlah;
        X2X4.push(temp);
      });
      const sigmaX2X4 = X2X4.reduce((a, b) => a + b, 0);

      let X2X5 = [];
      X2.map((item, index) => {
        let temp = X2[index].dataValues.jumlah * X5[index].dataValues.jumlah;
        X2X5.push(temp);
      });
      const sigmaX2X5 = X2X5.reduce((a, b) => a + b, 0);

      let X2X6 = [];
      X2.map((item, index) => {
        let temp = X2[index].dataValues.jumlah * X6[index].dataValues.jumlah;
        X2X6.push(temp);
      });
      const sigmaX2X6 = X2X6.reduce((a, b) => a + b, 0);

      let X2X7 = [];
      X2.map((item, index) => {
        let temp = X2[index].dataValues.jumlah * X7[index].dataValues.jumlah;
        X2X7.push(temp);
      });
      const sigmaX2X7 = X2X7.reduce((a, b) => a + b, 0);

      // console.log(
      //   sigmaX2X2,
      //   sigmaX2X3,
      //   sigmaX2X4,
      //   sigmaX2X5,
      //   sigmaX2X6,
      //   sigmaX2X7
      // );

      let X3X3 = [];
      X3.map((item, index) => {
        let temp = X3[index].dataValues.jumlah * X3[index].dataValues.jumlah;
        X3X3.push(temp);
      });
      const sigmaX3X3 = X3X3.reduce((a, b) => a + b, 0);

      let X3X4 = [];
      X3.map((item, index) => {
        let temp = X3[index].dataValues.jumlah * X4[index].dataValues.jumlah;
        X3X4.push(temp);
      });
      const sigmaX3X4 = X3X4.reduce((a, b) => a + b, 0);

      let X3X5 = [];
      X3.map((item, index) => {
        let temp = X3[index].dataValues.jumlah * X5[index].dataValues.jumlah;
        X3X5.push(temp);
      });
      const sigmaX3X5 = X3X5.reduce((a, b) => a + b, 0);

      let X3X6 = [];
      X6.map((item, index) => {
        let temp = X3[index].dataValues.jumlah * X6[index].dataValues.jumlah;
        X3X6.push(temp);
      });
      const sigmaX3X6 = X3X6.reduce((a, b) => a + b, 0);

      let X3X7 = [];
      X7.map((item, index) => {
        let temp = X3[index].dataValues.jumlah * X7[index].dataValues.jumlah;
        X3X7.push(temp);
      });
      const sigmaX3X7 = X3X7.reduce((a, b) => a + b, 0);

      // console.log(sigmaX3X3, sigmaX3X4, sigmaX3X5, sigmaX3X6, sigmaX3X7);

      let X4X4 = [];
      X4.map((item, index) => {
        let temp = X4[index].dataValues.jumlah * X4[index].dataValues.jumlah;
        X4X4.push(temp);
      });
      const sigmaX4X4 = X4X4.reduce((a, b) => a + b, 0);

      let X4X5 = [];
      X4.map((item, index) => {
        let temp = X4[index].dataValues.jumlah * X5[index].dataValues.jumlah;
        X4X5.push(temp);
      });
      const sigmaX4X5 = X4X5.reduce((a, b) => a + b, 0);

      let X4X6 = [];
      X4.map((item, index) => {
        let temp = X4[index].dataValues.jumlah * X6[index].dataValues.jumlah;
        X4X6.push(temp);
      });
      const sigmaX4X6 = X4X6.reduce((a, b) => a + b, 0);

      let X4X7 = [];
      X4.map((item, index) => {
        let temp = X4[index].dataValues.jumlah * X7[index].dataValues.jumlah;
        X4X7.push(temp);
      });
      const sigmaX4X7 = X4X7.reduce((a, b) => a + b, 0);

      // console.log(sigmaX4X4, sigmaX4X5, sigmaX4X6, sigmaX4X7);

      let X5X5 = [];
      X5.map((item, index) => {
        let temp = X5[index].dataValues.jumlah * X5[index].dataValues.jumlah;
        X5X5.push(temp);
      });
      const sigmaX5X5 = X5X5.reduce((a, b) => a + b, 0);

      let X5X6 = [];
      X5.map((item, index) => {
        let temp = X5[index].dataValues.jumlah * X6[index].dataValues.jumlah;
        X5X6.push(temp);
      });
      const sigmaX5X6 = X5X6.reduce((a, b) => a + b, 0);

      let X5X7 = [];
      X5.map((item, index) => {
        let temp = X5[index].dataValues.jumlah * X7[index].dataValues.jumlah;
        X5X7.push(temp);
      });
      const sigmaX5X7 = X5X7.reduce((a, b) => a + b, 0);

      // console.log(sigmaX5X5, sigmaX5X6, sigmaX5X7);

      let X6X6 = [];
      X6.map((item, index) => {
        let temp = X6[index].dataValues.jumlah * X6[index].dataValues.jumlah;
        X6X6.push(temp);
      });
      const sigmaX6X6 = X6X6.reduce((a, b) => a + b, 0);

      let X6X7 = [];
      X6.map((item, index) => {
        let temp = X6[index].dataValues.jumlah * X7[index].dataValues.jumlah;
        X6X7.push(temp);
      });
      const sigmaX6X7 = X6X7.reduce((a, b) => a + b, 0);

      let X7X7 = [];
      X7.map((item, index) => {
        let temp = X7[index].dataValues.jumlah * X7[index].dataValues.jumlah;
        X7X7.push(temp);
      });
      const sigmaX7X7 = X7X7.reduce((a, b) => a + b, 0);

      // console.log(sigmaX6X6, sigmaX6X7);

      const detA1 = [
        [
          X1.length,
          sigmaY,
          sigmaX2,
          sigmaX3,
          sigmaX4,
          sigmaX5,
          sigmaX6,
          sigmaX7,
        ],
        [
          sigmaX1,
          sigmaX1Y,
          sigmaX1X2,
          sigmaX1X3,
          sigmaX1X4,
          sigmaX1X5,
          sigmaX1X6,
          sigmaX1X7,
        ],
        [
          sigmaX2,
          sigmaX2Y,
          sigmaX2X2,
          sigmaX2X3,
          sigmaX2X4,
          sigmaX2X5,
          sigmaX2X6,
          sigmaX2X7,
        ],
        [
          sigmaX3,
          sigmaX3Y,
          sigmaX2X3,
          sigmaX3X3,
          sigmaX3X4,
          sigmaX3X5,
          sigmaX3X6,
          sigmaX3X7,
        ],
        [
          sigmaX4,
          sigmaX4Y,
          sigmaX2X4,
          sigmaX3X4,
          sigmaX4X4,
          sigmaX4X5,
          sigmaX4X6,
          sigmaX4X7,
        ],
        [
          sigmaX5,
          sigmaX5Y,
          sigmaX2X5,
          sigmaX3X5,
          sigmaX4X5,
          sigmaX5X5,
          sigmaX5X6,
          sigmaX5X7,
        ],
        [
          sigmaX6,
          sigmaX6Y,
          sigmaX2X6,
          sigmaX3X6,
          sigmaX4X6,
          sigmaX5X6,
          sigmaX6X6,
          sigmaX6X7,
        ],
        [
          sigmaX7,
          sigmaX7Y,
          sigmaX2X7,
          sigmaX3X7,
          sigmaX4X7,
          sigmaX5X7,
          sigmaX6X7,
          sigmaX7X7,
        ],
      ];
      const detA0 = [
        [sigmaY, sigmaX1, sigmaX2, sigmaX3, sigmaX4, sigmaX5, sigmaX6, sigmaX7],
        [
          sigmaX1Y,
          sigmaX1X1,
          sigmaX1X2,
          sigmaX1X3,
          sigmaX1X4,
          sigmaX1X5,
          sigmaX1X6,
          sigmaX1X7,
        ],
        [
          sigmaX2Y,
          sigmaX1X2,
          sigmaX2X2,
          sigmaX2X3,
          sigmaX2X4,
          sigmaX2X5,
          sigmaX2X6,
          sigmaX2X7,
        ],
        [
          sigmaX3Y,
          sigmaX1X3,
          sigmaX2X3,
          sigmaX3X3,
          sigmaX3X4,
          sigmaX3X5,
          sigmaX3X6,
          sigmaX3X7,
        ],
        [
          sigmaX4Y,
          sigmaX1X4,
          sigmaX2X4,
          sigmaX3X4,
          sigmaX4X4,
          sigmaX4X5,
          sigmaX4X6,
          sigmaX4X7,
        ],
        [
          sigmaX5Y,
          sigmaX1X5,
          sigmaX2X5,
          sigmaX3X5,
          sigmaX4X5,
          sigmaX5X5,
          sigmaX5X6,
          sigmaX5X7,
        ],
        [
          sigmaX6Y,
          sigmaX1X6,
          sigmaX2X6,
          sigmaX3X6,
          sigmaX4X6,
          sigmaX5X6,
          sigmaX6X6,
          sigmaX6X7,
        ],
        [
          sigmaX7Y,
          sigmaX1X7,
          sigmaX2X7,
          sigmaX3X7,
          sigmaX4X7,
          sigmaX5X7,
          sigmaX6X7,
          sigmaX7X7,
        ],
      ];
      const detA2 = [
        [
          X1.length,
          sigmaX1,
          sigmaY,
          sigmaX3,
          sigmaX4,
          sigmaX5,
          sigmaX6,
          sigmaX7,
        ],
        [
          sigmaX1,
          sigmaX1Y,
          sigmaX1X2,
          sigmaX1X3,
          sigmaX1X4,
          sigmaX1X5,
          sigmaX1X6,
          sigmaX1X7,
        ],
        [
          sigmaX2,
          sigmaX2Y,
          sigmaX2X2,
          sigmaX2X3,
          sigmaX2X4,
          sigmaX2X5,
          sigmaX2X6,
          sigmaX2X7,
        ],
        [
          sigmaX3,
          sigmaX3Y,
          sigmaX2X3,
          sigmaX3X3,
          sigmaX3X4,
          sigmaX3X5,
          sigmaX3X6,
          sigmaX3X7,
        ],
        [
          sigmaX4,
          sigmaX4Y,
          sigmaX2X4,
          sigmaX3X4,
          sigmaX4X4,
          sigmaX4X5,
          sigmaX4X6,
          sigmaX4X7,
        ],
        [
          sigmaX5,
          sigmaX5Y,
          sigmaX2X5,
          sigmaX3X5,
          sigmaX4X5,
          sigmaX5X5,
          sigmaX5X6,
          sigmaX5X7,
        ],
        [
          sigmaX6,
          sigmaX6Y,
          sigmaX2X6,
          sigmaX3X6,
          sigmaX4X6,
          sigmaX5X6,
          sigmaX6X6,
          sigmaX6X7,
        ],
        [
          sigmaX7,
          sigmaX7Y,
          sigmaX2X7,
          sigmaX3X7,
          sigmaX4X7,
          sigmaX5X7,
          sigmaX6X7,
          sigmaX7X7,
        ],
      ];
      const detA3 = [
        [
          X1.length,
          sigmaX1,
          sigmaX2,
          sigmaY,
          sigmaX4,
          sigmaX5,
          sigmaX6,
          sigmaX7,
        ],
        [
          sigmaX1,
          sigmaX1X1,
          sigmaX1X2,
          sigmaX1Y,
          sigmaX1X4,
          sigmaX1X5,
          sigmaX1X6,
          sigmaX1X7,
        ],
        [
          sigmaX2,
          sigmaX1X2,
          sigmaX2X2,
          sigmaX2Y,
          sigmaX2X4,
          sigmaX2X5,
          sigmaX2X6,
          sigmaX2X7,
        ],
        [
          sigmaX3,
          sigmaX1X3,
          sigmaX2X3,
          sigmaX3Y,
          sigmaX3X4,
          sigmaX4X5,
          sigmaX4X6,
          sigmaX4X7,
        ],
        [
          sigmaX4,
          sigmaX1X4,
          sigmaX2X4,
          sigmaX4Y,
          sigmaX4X4,
          sigmaX4X5,
          sigmaX4X6,
          sigmaX4X7,
        ],
        [
          sigmaX5,
          sigmaX1X5,
          sigmaX2X5,
          sigmaX3X5,
          sigmaX4X5,
          sigmaX5Y,
          sigmaX5X6,
          sigmaX5X7,
        ],
        [
          sigmaX6,
          sigmaX1X6,
          sigmaX2X6,
          sigmaX3X6,
          sigmaX4X6,
          sigmaX5X6,
          sigmaX6Y,
          sigmaX6X7,
        ],
        [
          sigmaX7,
          sigmaX1X7,
          sigmaX2X7,
          sigmaX3X7,
          sigmaX4X7,
          sigmaX5X7,
          sigmaX6X7,
          sigmaX7Y,
        ],
      ];
      const detA4 = [
        [
          X1.length,
          sigmaX1,
          sigmaX2,
          sigmaX3,
          sigmaY,
          sigmaX5,
          sigmaX6,
          sigmaX7,
        ],
        [
          sigmaX1,
          sigmaX1X1,
          sigmaX1X2,
          sigmaX1X3,
          sigmaX1Y,
          sigmaX1X5,
          sigmaX1X6,
          sigmaX1X7,
        ],
        [
          sigmaX2,
          sigmaX1X2,
          sigmaX2X2,
          sigmaX2X3,
          sigmaX2Y,
          sigmaX2X5,
          sigmaX2X6,
          sigmaX2X7,
        ],
        [
          sigmaX3,
          sigmaX1X3,
          sigmaX2X3,
          sigmaX3X3,
          sigmaX3Y,
          sigmaX3X5,
          sigmaX3X6,
          sigmaX3X7,
        ],
        [
          sigmaX4,
          sigmaX1X4,
          sigmaX2X4,
          sigmaX3X4,
          sigmaX4Y,
          sigmaX4X5,
          sigmaX4X6,
          sigmaX4X7,
        ],
        [
          sigmaX5,
          sigmaX1X5,
          sigmaX2X5,
          sigmaX3X5,
          sigmaX5Y,
          sigmaX5X5,
          sigmaX5X6,
          sigmaX5X7,
        ],
        [
          sigmaX6,
          sigmaX1X6,
          sigmaX2X6,
          sigmaX3X6,
          sigmaX6Y,
          sigmaX5X6,
          sigmaX6X6,
          sigmaX6X7,
        ],
        [
          sigmaX7,
          sigmaX1X7,
          sigmaX2X7,
          sigmaX3X7,
          sigmaX7Y,
          sigmaX5X7,
          sigmaX6X7,
          sigmaX7X7,
        ],
      ];
      const detA = [
        [
          X1.length,
          sigmaX1,
          sigmaX2,
          sigmaX3,
          sigmaX4,
          sigmaX5,
          sigmaX6,
          sigmaX7,
        ],
        [
          sigmaX1,
          sigmaX1X1,
          sigmaX1X2,
          sigmaX1X3,
          sigmaX1X4,
          sigmaX1X5,
          sigmaX1X6,
          sigmaX1X7,
        ],
        [
          sigmaX2,
          sigmaX1X2,
          sigmaX2X2,
          sigmaX2X3,
          sigmaX2X4,
          sigmaX2X5,
          sigmaX2X6,
          sigmaX2X7,
        ],
        [
          sigmaX3,
          sigmaX1X3,
          sigmaX2X3,
          sigmaX3X3,
          sigmaX3X4,
          sigmaX3X5,
          sigmaX3X6,
          sigmaX3X7,
        ],
        [
          sigmaX4,
          sigmaX1X4,
          sigmaX2X4,
          sigmaX3X4,
          sigmaX4X4,
          sigmaX4X5,
          sigmaX4X6,
          sigmaX4X7,
        ],
        [
          sigmaX5,
          sigmaX1X5,
          sigmaX2X5,
          sigmaX3X5,
          sigmaX4X5,
          sigmaX5X5,
          sigmaX5X6,
          sigmaX5X7,
        ],
        [
          sigmaX6,
          sigmaX1X6,
          sigmaX2X6,
          sigmaX3X6,
          sigmaX4X6,
          sigmaX5X6,
          sigmaX6X6,
          sigmaX6X7,
        ],
        [
          sigmaX7,
          sigmaX1X7,
          sigmaX2X7,
          sigmaX3X7,
          sigmaX4X7,
          sigmaX5X7,
          sigmaX6X7,
          sigmaX7X7,
        ],
      ];

      const detA5 = [
        [
          X1.length,
          sigmaX1,
          sigmaX2,
          sigmaX3,
          sigmaX4,
          sigmaY,
          sigmaX6,
          sigmaX7,
        ],
        [
          sigmaX1,
          sigmaX1X1,
          sigmaX1X2,
          sigmaX1X2,
          sigmaX1X4,
          sigmaX1Y,
          sigmaX1X6,
          sigmaX1X7,
        ],
        [
          sigmaX2,
          sigmaX1X2,
          sigmaX2X2,
          sigmaX2X3,
          sigmaX2X4,
          sigmaX2Y,
          sigmaX2X6,
          sigmaX2X7,
        ],
        [
          sigmaX3,
          sigmaX1X3,
          sigmaX2X3,
          sigmaX3X3,
          sigmaX3X4,
          sigmaX3Y,
          sigmaX3X6,
          sigmaX3X7,
        ],
        [
          sigmaX4,
          sigmaX1X4,
          sigmaX2X4,
          sigmaX3X4,
          sigmaX4X4,
          sigmaX4Y,
          sigmaX4X6,
          sigmaX4X7,
        ],
        [
          sigmaX5,
          sigmaX1X5,
          sigmaX2X5,
          sigmaX3X5,
          sigmaX4X5,
          sigmaX5Y,
          sigmaX5X6,
          sigmaX5X7,
        ],
        [
          sigmaX6,
          sigmaX1X6,
          sigmaX2X6,
          sigmaX3X6,
          sigmaX4X6,
          sigmaX6Y,
          sigmaX6X6,
          sigmaX6X7,
        ],
        [
          sigmaX7,
          sigmaX1X7,
          sigmaX2X7,
          sigmaX3X7,
          sigmaX4X7,
          sigmaX7Y,
          sigmaX6X7,
          sigmaX7X7,
        ],
      ];

      const detA6 = [
        [
          X1.length,
          sigmaX1,
          sigmaX2,
          sigmaX3,
          sigmaX4,
          sigmaX5,
          sigmaY,
          sigmaX7,
        ],
        [
          sigmaX1,
          sigmaX1X1,
          sigmaX1X2,
          sigmaX1X2,
          sigmaX1X4,
          sigmaX1X5,
          sigmaX1Y,
          sigmaX1X7,
        ],
        [
          sigmaX2,
          sigmaX1X2,
          sigmaX2X2,
          sigmaX2X3,
          sigmaX2X4,
          sigmaX2X5,
          sigmaX2Y,
          sigmaX2X7,
        ],
        [
          sigmaX3,
          sigmaX1X3,
          sigmaX2X3,
          sigmaX3X3,
          sigmaX3X4,
          sigmaX3X5,
          sigmaX3Y,
          sigmaX3X7,
        ],
        [
          sigmaX4,
          sigmaX1X4,
          sigmaX2X4,
          sigmaX3X4,
          sigmaX4X4,
          sigmaX4X5,
          sigmaX4Y,
          sigmaX4X7,
        ],
        [
          sigmaX5,
          sigmaX1X5,
          sigmaX2X5,
          sigmaX3X5,
          sigmaX4X5,
          sigmaX5X5,
          sigmaX5Y,
          sigmaX5X7,
        ],
        [
          sigmaX6,
          sigmaX1X6,
          sigmaX2X6,
          sigmaX3X6,
          sigmaX4X6,
          sigmaX5X6,
          sigmaX6Y,
          sigmaX6X7,
        ],
        [
          sigmaX7,
          sigmaX1X7,
          sigmaX2X7,
          sigmaX3X7,
          sigmaX4X7,
          sigmaX5X7,
          sigmaX6Y,
          sigmaX7X7,
        ],
      ];

      const detA7 = [
        [
          X1.length,
          sigmaX1,
          sigmaX2,
          sigmaX3,
          sigmaX4,
          sigmaX5,
          sigmaX6,
          sigmaY,
        ],
        [
          sigmaX1,
          sigmaX1X1,
          sigmaX1X2,
          sigmaX1X2,
          sigmaX1X4,
          sigmaX1X5,
          sigmaX1X6,
          sigmaX1Y,
        ],
        [
          sigmaX2,
          sigmaX1X2,
          sigmaX2X2,
          sigmaX2X3,
          sigmaX2X4,
          sigmaX2X5,
          sigmaX2X6,
          sigmaX2Y,
        ],
        [
          sigmaX3,
          sigmaX1X3,
          sigmaX2X3,
          sigmaX3X3,
          sigmaX3X4,
          sigmaX3X5,
          sigmaX3X6,
          sigmaX3Y,
        ],
        [
          sigmaX4,
          sigmaX1X4,
          sigmaX2X4,
          sigmaX3X4,
          sigmaX4X4,
          sigmaX4X5,
          sigmaX4X6,
          sigmaX4Y,
        ],
        [
          sigmaX5,
          sigmaX1X5,
          sigmaX2X5,
          sigmaX3X5,
          sigmaX4X5,
          sigmaX5X5,
          sigmaX5X6,
          sigmaX5Y,
        ],
        [
          sigmaX6,
          sigmaX1X6,
          sigmaX2X6,
          sigmaX3X6,
          sigmaX4X6,
          sigmaX5X6,
          sigmaX6X6,
          sigmaX6Y,
        ],
        [
          sigmaX7,
          sigmaX1X7,
          sigmaX2X7,
          sigmaX3X7,
          sigmaX4X7,
          sigmaX5X7,
          sigmaX6X7,
          sigmaX7Y,
        ],
      ];

      const detMatriksA1 = math.det(detA1);
      const detMatriksA0 = math.det(detA0);
      const detMatriksA2 = math.det(detA2);
      const detMatriksA3 = math.det(detA3);
      const detMatriksA4 = math.det(detA4);
      const detMatriksA5 = math.det(detA5);
      const detMatriksA6 = math.det(detA6);
      const detMatriksA7 = math.det(detA7);
      const detMatriksA = math.det(detA);

      console.log(
        detMatriksA0,
        detMatriksA,
        detMatriksA1,
        detMatriksA2,
        detMatriksA3,
        detMatriksA4,
        detMatriksA5,
        detMatriksA6,
        detMatriksA7
      );

      const a = detMatriksA0 / detMatriksA;
      const b1 = detMatriksA1 / detMatriksA;
      const b2 = detMatriksA2 / detMatriksA;
      const b3 = detMatriksA3 / detMatriksA;
      const b4 = detMatriksA4 / detMatriksA;
      const b5 = detMatriksA5 / detMatriksA;
      const b6 = detMatriksA6 / detMatriksA;
      const b7 = detMatriksA7 / detMatriksA;

      const result =
        a +
        b1 * sigmaX1 +
        b2 * sigmaX2 +
        b3 * sigmaX3 +
        b4 * sigmaX4 +
        b5 * sigmaX5 +
        b6 * sigmaX6 +
        b7 * sigmaX7;
      console.log(result.toFixed());
      console.log(b1);
      const result2 = result.toFixed();
      const resultfinal = parseInt(result2.substr(0, 5)) / 3;
      const pred_m = resultfinal / 12;
      console.log(resultfinal, pred_m);

      const createPrediction = await db.prediksi.create({
        pred_m: pred_m,
        pred_y: resultfinal,
        tahun: req.body.year,
        jumlah_product: 7
      });

      return response.ok("Success", res);
    }
  } catch (error) {
    console.log(error);
    response.error(`${error}`, res);
  }
};
