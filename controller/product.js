const db = require("../models");
const response = require("../res");

exports.listProducts = async (req, res) => {
  try {
    const result = await db.product.findAll();

    return response.ok(result, res);
  } catch (error) {
    console.log(error);
    response.error(`${error}`, res);
  }
};

exports.addProduct = async (req, res) => {
  try {
    const result = await db.product.create(req.body);

    return response.ok(result, res);
  } catch (error) {
    console.log(error);
    response.error(`${error}`, res);
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    
    const deletePenjualan = await db.penjualan.destroy({
      where: {
        product_id: id
      }
    })

    const deletePrediksi = await db.prediksi.destroy({
      truncate: true
    })
    
    const result = await db.product.destroy({
      where: {
        id: id,
      },
    });

    if(result){
      return response.ok(result, res);
    }
  } catch (error) {
    console.log(error);
    response.error(`${error}`, res);
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db.product.update(req.body, {
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
