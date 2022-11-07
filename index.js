const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("sqlite::memory:");

const Board = sequelize.define("Board", {
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const Cheese = sequelize.define("Cheese", {
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Board.belongsToMany(Cheese, { through: "Boards_Cheeses" });
Cheese.belongsToMany(Board, { through: "Boards_Cheeses" });

(async () => {
  await sequelize.sync({ force: true });

  const board = await Board.create({ name: "board" });
  const cheese = await Cheese.create({ name: "cheese" });

  await board.addCheese(cheese);

  const b = await Board.findAll({ include: Cheese });

  console.log(b[0]);
})();
