import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const FoodItems = ({ food }) => {

  return (
    <div className="max-w-7xl mx-auto">
      <div className="p-4">
        {
          <Link to={`/RecipesDetails/${food.id}`}>
            {" "}
            <div className="shadow">
              <img className="rounded-t-lg" src={food.image} alt="" />

              <div className="mt-4 ml-4 pb-3">
                <h2 className="text-lg font-semibold">{food.name}</h2>
                <p className="pb-4">{food.mealType}</p>
                <div>
                  <span className="bg-amber-300 text-gray-900 rounded-full p-2">
                    {food.difficulty}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        }
      </div>
    </div>
  );
};
