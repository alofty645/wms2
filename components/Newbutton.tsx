"use client";
import Link from "next/link";

const Newbutton = ({ title }) => {
  return (
    <button className=" font-bold text-black bg-white mb-5 p-3 text-l rounded-3xl ">
      {title}
    </button>
  );
};

export default Newbutton;
