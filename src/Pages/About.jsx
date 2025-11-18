import React from "react";

export const About = () => {
  const foods = [
   {
      "id": 15,
      "name": "Saag (Spinach) with Makki di Roti",
      "ingredients": [
        "Mustard greens, washed and chopped",
        "Spinach, washed and chopped",
        "Cornmeal (makki ka atta)",
        "Onions, finely chopped",
        "Green chilies, chopped",
        "Ginger, grated",
        "Ghee",
        "Salt to taste"
      ],
      "instructions": [
        "Boil mustard greens and spinach until tender. Drain and blend into a coarse paste.",
        "In a pan, sauté chopped onions, green chilies, and grated ginger in ghee until golden brown.",
        "Add the greens paste and cook until it thickens.",
        "Meanwhile, knead cornmeal with water to make a dough. Roll into rotis (flatbreads).",
        "Cook the rotis on a griddle until golden brown.",
        "Serve hot saag with makki di roti and a dollop of ghee."
      ],
      "prepTimeMinutes": 40,
      "cookTimeMinutes": 30,
      "servings": 3,
      "difficulty": "Medium",
      "cuisine": "Pakistani",
      "caloriesPerServing": 280,
      "tags": [
        "Saag",
        "Roti",
        "Main course",
        "Indian",
        "Pakistani",
        "Asian"
      ],
      "userId": 43,
      "image": "https://cdn.dummyjson.com/recipe-images/15.webp",
      "rating": 4.3,
      "reviewCount": 86,
      "mealType": [
        "Breakfast",
        "Lunch",
        "Dinner"
      ]
    },
  ];
  return <div className="w-full">
      <div className="max-w-7xl  mx-auto overflow-hidden p-4">
            {
              foods.map(food => (
                <div className=" w-fit flex flex-col p-4  md:flex-row justify-center text-lg items-center gap-5">
                  <img className="w-120 object-cover rounded-lg" src={food.image} alt="" />
                  <div>
                    <h2 className="text-lg text-gray-600 p-2">{food.instructions}</h2>
                  </div>
                </div>
              ))
            }
      </div>
  </div>;
};
