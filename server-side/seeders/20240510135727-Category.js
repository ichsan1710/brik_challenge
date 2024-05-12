"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Categories", [
      {
        name: "Food Staples",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Beverages",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Snacks",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Canned Goods",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Spices and Seasonings",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cleaning Supplies",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Personal Care",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Frozen Foods",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Dairy and Eggs",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Household Essentials",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
