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
                "hover:bg-slate-300",
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

        <div className="m-2 text-white flex gap-3 ">
          <a href="#" className="hover:bg-sky-950 hover:rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
          </a>
          <a href="#" className="hover:bg-sky-950 hover:rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </a>
          <a href="#" className="hover:bg-sky-950 hover:rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
