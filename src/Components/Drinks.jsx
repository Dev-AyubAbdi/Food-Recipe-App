import React from "react";
import { Link } from "react-router-dom";
export const Drinks = () => {
  const Drinks = [
    {
      id: 30,
      name: "Brazilian Caipirinha",
      ingredients: [
        "Cachaça (Brazilian sugarcane spirit)",
        "Lime, cut into wedges",
        "Granulated sugar",
        "Ice cubes",
      ],
      instructions: [
        "In a glass, muddle lime wedges with granulated sugar to release the juice.",
        "Fill the glass with ice cubes.",
        "Pour cachaça over the ice and stir well.",
        "Sip and enjoy the refreshing taste of the Brazilian Caipirinha!",
        "Adjust sugar and lime to suit your taste preferences.",
      ],
      prepTimeMinutes: 5,
      cookTimeMinutes: 0,
      servings: 1,
      difficulty: "Easy",
      cuisine: "Brazilian",
      caloriesPerServing: 150,
      tags: ["Caipirinha", "Brazilian", "Cocktail"],
      userId: 134,
      image: "https://cdn.dummyjson.com/recipe-images/30.webp",
      rating: 4.4,
      reviewCount: 55,
      mealType: ["Beverage"],
    },
    {
      id: 25,
      name: "Blueberry Banana Smoothie",
      ingredients: [
        "Blueberries, fresh or frozen",
        "Banana, peeled and sliced",
        "Greek yogurt",
        "Almond milk",
        "Honey",
        "Chia seeds (optional)",
      ],
      instructions: [
        "In a blender, combine blueberries, banana, Greek yogurt, almond milk, and honey.",
        "Blend until smooth and creamy.",
        "Add chia seeds for extra nutrition and blend briefly.",
        "Pour into a glass and enjoy this nutritious Blueberry Banana Smoothie!",
      ],
      prepTimeMinutes: 10,
      cookTimeMinutes: 0,
      servings: 1,
      difficulty: "Easy",
      cuisine: "Smoothie",
      caloriesPerServing: 220,
      tags: ["Smoothie", "Blueberry", "Banana"],
      userId: 16,
      image: "https://cdn.dummyjson.com/recipe-images/25.webp",
      rating: 4.8,
      reviewCount: 30,
      mealType: ["Breakfast", "Beverage"],
    },
    {
      id: 22,
      name: "Mango Lassi",
      ingredients: [
        "Ripe mango, peeled and diced",
        "Yogurt",
        "Milk",
        "Honey",
        "Cardamom powder",
        "Ice cubes",
      ],
      instructions: [
        "In a blender, combine diced mango, yogurt, milk, honey, and cardamom powder.",
        "Blend until smooth and creamy.",
        "Add ice cubes and blend again until the lassi is chilled.",
        "Pour into glasses and garnish with a sprinkle of cardamom.",
        "Enjoy this refreshing Mango Lassi!",
      ],
      prepTimeMinutes: 10,
      cookTimeMinutes: 0,
      servings: 2,
      difficulty: "Easy",
      cuisine: "Indian",
      caloriesPerServing: 180,
      tags: ["Lassi", "Mango", "Indian", "Pakistani", "Asian"],
      userId: 76,
      image: "https://cdn.dummyjson.com/recipe-images/22.webp",
      rating: 4.7,
      reviewCount: 15,
      mealType: ["Beverage"],
    },
  ];
  return (
    <div className="max-w-7xl mx-auto">
      <div className="p-4">
        {/* title Food */}
        <h2 className="text-center pb-4 text-3xl font-light underline">
          Drinks of CookMate
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-4">
          {Drinks.map((food) => (
            <div className="flex flex-col justify-center items-center rounded-lg shadow pb-5">
              <img
                className=" rounded-t-lg flex justify-center"
                src={food.image}
                alt=""
              />

              <div className="text-center pt-4">
                <h2 className="text-lg font-bold">{food.name}</h2>
                <p className="text-gray-500 mb-4">{food.mealType}</p>
                <Link
                  to={"/recipes"}
                  className="bg-[#FF6F3C] mt-7 px-4 py-2 rounded-full text-white"
                >
                  Order
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
