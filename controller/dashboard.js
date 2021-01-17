const db = require("../models");
const response = require("../res");

exports.detailDashboard = async (req, res) => {
  try {
    const [product, penjualan, role, akun] = await Promise.all([
      db.product.findAndCountAll(),
      db.penjualan.findAndCountAll(),
      db.user_role.findAndCountAll(),
      db.user.findAndCountAll(),
    ]);

    const result = {
      produk: product.count,
      penjualan: penjualan.count,
      role: role.count,
      akun: akun.count,
    };

    response.ok(result, res);
  } catch (error) {
    console.log(error);
    response.error(`${error}`, res);
  }
};
