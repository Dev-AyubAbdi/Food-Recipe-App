import React, { useState, useEffect } from "react";
import { FoodItems } from "../Components/FoodItems";
import axios from "axios";

export const Recipes = () => {
  const [search, setSearch] = useState("");
  const [foods, setFoods] = useState([]);
  const [laoding, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getfetchFoods = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("https://dummyjson.com/recipes");
        console.log(data);
        setFoods(data.recipes);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError("Your data fetch wrong");
      } finally {
      }
    };
    getfetchFoods();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();

    if (!search || search.trim === "") {
      alert("Please Search Your Food");
      return;
    }

    const searchQuery = async () => {
      const { data } = await axios.get(
        `https://dummyjson.com/recipes/search?q=${search}`
      );
      console.log(data.recipes);
      setFoods(data.recipes);
    };
    searchQuery();
  };

  if (laoding) return <h2>Loading..</h2>;

  return (
    <div className="w-full">
      <div className="mt-5 mb-5">
        <form onSubmit={handleSearch} className="flex justify-center">
          <input
            className=" border w-100 outline-0 text-shadow-2xs p-4 rounded-full h-10 mr-5"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            type="submit"
            className="bg-amber-400 w-30 rounded-full text-lg hover:bg-amber-500 transition-all duration-200 cursor-pointer"
          >
            Search
          </button>
        </form>
      </div>

      <div className=" max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {foods.length > 0 &&
          foods.map((food) => <FoodItems key={food.id} food={food} />)}
      </div>
    </div>
  );
};
