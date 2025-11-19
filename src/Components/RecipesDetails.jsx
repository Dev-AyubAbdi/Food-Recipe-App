import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import axios from "axios";

export const RecipesDetails = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [foods, setFoods] = useState(null);

  useEffect(() => {
    const getFoodRecipes = async () => {
      const { data } = await axios.get(`https://dummyjson.com/recipes/${id}`);
      console.log(data);
      setFoods(data);
    };

    getFoodRecipes();
  }, [id]);

  if (!foods) {
    return <p className="text-center mt-10 text-2xl">Loading...</p>;

  }

  return (
      
    <div className="w-full">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1 bg-amber-400 mt-4 ml-6 p-3 rounded-lg cursor-pointer hover:bg-amber-500 transition-all duration-300"
        >
          {" "}
          <IoMdArrowRoundBack /> Go To Back
        </button>
        { foods > 0 && foods?.map((food) => (
            <div className="p-4 flex flex-col justify-center items-center ">
              <div className="shadow">
                <img
                  className="w-full rounded-t-lg pb-5 object-cover"
                  src={food.image}
                  alt=""
                />
                <div className="p-4">
                  <h2 className="font-bold text-2xl">{food.name}</h2>
                  <p className="text-lg">{food.cuisine}</p>
                  <p className="mb-6">{food.instructions}</p>
                  <Link className=" bg-amber-500 mb-4 text-lg rounded-lg p-2">
                    Add To Favorite
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>

    )
    

};
