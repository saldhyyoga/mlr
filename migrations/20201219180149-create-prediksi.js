"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("prediksis", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      penjualan_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "penjualans",
          },
          key: "id",
        },
      },
      pred_m: {
        type: Sequelize.DECIMAL,
      },
      pred_y: {
        type: Sequelize.DECIMAL,
      },
      tahun: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("prediksis");
  },
};
