const dbconnect = require("../../database/dbconnect");
const dbdisconnect = require("../../database/dbdisconnect");
const dishSchema = require("../../models/dishSchema");

module.exports = async function (req, res) {
  await dbconnect();
  try {
    let dishes = await dishSchema.find({});
    if (dishes.length > 0) {
      res.status(200).send(dishes);
    } else {
      res.status(201).send();
    }
  } catch (error) {
    console.log(error);
  }
  await dbdisconnect();
};
