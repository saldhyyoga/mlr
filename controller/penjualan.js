const db = require("../models");
const response = require("../res");

exports.listPenjualan = async (req, res) => {
  try {
    const result = await db.penjualan.findAll({
      include: [db.product],
    });
    console.log(result);

    return response.ok(result, res);
  } catch (error) {
    response.error(`${error}`, res);
  }
};

exports.create = async (req, res) => {
  try {
    const result = await db.penjualan.create(req.body);

    return response.ok(result, res);
  } catch (error) {
    response.error(`${error}`, res);
  }
};

exports.updatePenjualan = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db.penjualan.update(req.body, {
      where: {
        id: id,
      },
    });

    return response.ok(result, res);
  } catch (error) {
    console.log(error);
    response.error(`${error}`, res);
  }
};

exports.deletePenjualan = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db.penjualan.destroy({
      where: {
        id: id,
      },
    });

    return response.ok(result, res);
  } catch (error) {
    console.log(error);
    response.error(`${error}`, res);
  }
};
