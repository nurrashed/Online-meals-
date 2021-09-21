import React from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Chicken Tikka Masala",
    description: "Grilled chicken fillet with cream, tomato and nuts in a yoghurt sauce.",
    price: 199,
  },
  {
    id: "m2",
    name: "Chili Chicken Korma",
    description: "Grilled chicken marinated in green chili, with ginger and coriander, nuts, raisins and mint, served in a mild creamy cashewnut sauce.",
    price: 199,
  },
  {
    id: "m3",
    name: "Mixed Sizzlar",
    description: "Grilled chicken fillet, lamb fillet and king prawns.",
    price: 259,
  },
  {
    id: "m4",
    name: "Green Vegetable Curry",
    description: "Mixed vegetables broccoli, fava beans, pumpkin, green papaya, eggplant medium- hot tomato/curry sauce.",
    price: 189,
  },
];
export default function AvailableMeals() {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}
