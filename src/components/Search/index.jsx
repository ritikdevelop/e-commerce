import React from "react";
import "./style.css";
import Button from "@mui/material/Button";
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className="searchBox w-[100%] h-[50px] bg-[#e5e5e5] rounded-[5px] relative p-2">
      <input
        type="text"
        placeholder="Search for products"
        className="w-full h-[35px] focus:outline-none bg-inherit p-2 text[14px]"
      />
      <Button className="!absolute top-[8px] right-[5px] z-50 !w-[40px] !min-w-[40px] h-[40px] !rounded-full !text-black">
        <IoSearch className="text-gray-500 text-[18px]" />
      </Button>
    </div>
  );
};

export default Search;
