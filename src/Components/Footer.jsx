import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#FFA500] to-[#FF6F3C] py-10">
      <div className="flex flex-col gap-4 md:flex-row justify-around p-5">
        {/* logo and social media */}
        <div className="flex flex-col gap-7">
          <h1>
            <Link to={"/"} className="text-4xl font-semibold text-[#000]">
              CookMate
            </Link>
          </h1>
          {/* social media accounts */}
          <div className="flex gap-4 ">
            <Link
              className="bg-amber-50 p-2 rounded-full"
              to={`https://instagram.com/yourusername`}
            >
              <FaInstagram size={20} />
            </Link>
            <Link
              className="bg-amber-50 p-2 rounded-full"
              to={`https://instagram.com/yourusername`}
            >
              <FaTiktok size={20} />
            </Link>
            <Link
              className="bg-amber-50 p-2 rounded-full"
              to={`https://instagram.com/yourusername`}
            >
              <FaYoutube size={20} />
            </Link>
            <Link
              className="bg-amber-50 p-2 rounded-full"
              to={`https://instagram.com/yourusername`}
            >
              <FaFacebookF size={20} />
            </Link>
          </div>
        </div>

        {/* Form footer */}
        <div>
          <form>
            <h2 className="text-2xl font-bold pb-2">Join Our NewsLetter</h2>
            <input
              type="text"
              placeholder="Name"
              className="border-t border-l border-r w-60 rounded-full p-2 outline-0 mb-3 "
            />{" "}
            <br />
            <input
              type="email"
              placeholder="Email"
              className="border-t border-l border-r w-60 rounded-full p-2 outline-0 mb-5"
            />{" "}
            <br />
            <button className="bg-black w-30 mt-4 text-white p-2 rounded-full">
              Subscribe
            </button>
          </form>
        </div>

        {/* Explore Pages */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Explore </h2>
          <Link className="font-medium" to={"/recipes"}>Latest Recipes</Link>
          <Link className="font-medium" to={"/respicDetails"}>All Recipes</Link>
          <Link className="font-medium" to={""}>Meel Recipes</Link>
          <Link className="font-medium" to={"/Contact"}>Contact</Link>
        </div>
      </div>
    </div>
  );
};
