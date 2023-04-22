"use client";
import Button from "./UI/Button";
import { Popover, Transition } from "@headlessui/react";
import clsx from "clsx";
import Link from "next/link";
import Styledlink from "./UI/styledlink";

const Topbar = () => {
  return (
    <div className="flex flex-col flex-1 ">
      <div className="flex justify-between m-3 p-1">
        <div className="flex appearance-none left-3 rounded-3xl  bg-sky-950 ">
          <input
            type="text"
            className="appearance-none bg-transparent px-4 py-2 w-64 rounded-3xl text-white "
            placeholder="Search..."
          />
          <button className="flex items-center justify-center px-5 rounded-3xl ">
            <svg
              className="w-6 h-6"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path>
            </svg>
          </button>

          <div className="dropdown">
            <label
              tabIndex={0}
              className={clsx(
                "bg-white text-black",
                "py-2 px-8 leading-6",
                "rounded-full",
                "font-semibold",
                "tracking-wide",
                "cursor-pointer",
                "inline-flex",
                "items-center",
                "justify-center",
                "relative shadow",
                // Hover
                "transition",
                "hover:bg-indigo-600",
                "hover:shadow-md",
                // Focus
                "outline-none",
                "ring-indigo-500/70",
                "ring-offset-2",
                "focus-visible:ring-2",
                "focus:scale-[0.98]",
                // Disabled
                "disabled:bg-indigo-500/50 disabled:cursor-not-allowed"
              )}
            >
              Quick Action
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-sky-950 rounded-box w-52"
            >
              <Styledlink id="1" href="/builder" title={"+ Sale"}></Styledlink>
              <Styledlink
                id="2"
                href="/builder"
                title={"+ Product"}
              ></Styledlink>
              <Styledlink
                id="3"
                href="/builder"
                title={"+ Purchase"}
              ></Styledlink>
              <Styledlink
                id="4"
                href="/builder"
                title={"+ Contact"}
              ></Styledlink>
            </ul>
          </div>
        </div>

        <div className="m-1 text-white">
          <a
            href="#"
            className="m-1  hover:bg-white hover:text-black rounded-3xl p-3"
          >
            Notifcations
          </a>
          <a
            href="#"
            className="m-1  hover:bg-white hover:text-black rounded-3xl p-3"
          >
            Settings
          </a>
          <a
            href="#"
            className="m-1  hover:bg-white hover:text-black rounded-3xl p-3"
          >
            Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
