const dbconnect = require("../../database/dbconnect");
const dbdisconnect = require("../../database/dbdisconnect");
const dishSchema = require("../../models/dishSchema");

module.exports = async function (req, res) {
  const dishesOfTheDay = [
    {
      name: "Spaghetti Bolognese",
      description:
        "Traditional Italian dish made with minced beef, tomatoes, and herbs, served with spaghetti",
      image: "https://example.com/spaghetti_bolognese.jpg",
      price: 8.99,
    },
    {
      name: "Chicken Curry",
      description:
        "A flavorful dish made with chicken, spices, and coconut milk, served with rice",
      image: "https://example.com/chicken_curry.jpg",
      price: 9.99,
    },
    {
      name: "Vegetable Stir-Fry",
      description:
        "A healthy dish made with a variety of vegetables and served with rice",
      image: "https://example.com/vegetable_stirfry.jpg",
      price: 7.99,
    },
    {
      name: "Pork Chops",
      description:
        "Pan-fried pork chops served with roasted vegetables and mashed potatoes",
      image: "https://example.com/pork_chops.jpg",
      price: 11.99,
    },
    {
      name: "Fish and Chips",
      description:
        "Crispy battered fish served with french fries and tartar sauce",
      image: "https://example.com/fish_and_chips.jpg",
      price: 10.99,
    },
  ];
  await dbconnect();
  try {
    dishesOfTheDay.forEach(async (dish) => {
      await dbconnect();
      await dishSchema.findOneAndUpdate(
        { name: dish.name },
        {
          $set: {
            image: dish.image,
            description: dish.description,
            price: dish.price,
          },
        },
        { new: true, upsert: true }
      );
      await dbdisconnect();
    });
    res.status(200).send();
  } catch (error) {
    console.log(error);
  }
};
