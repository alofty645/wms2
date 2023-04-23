"use client";

import clsx from "clsx";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ className, title, ...rest }: Props) => {
  return (
    <button
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
        "disabled:bg-indigo-500/50 disabled:cursor-not-allowed",
        className
      )}
      {...rest}
    >
      {title}
    </button>
  );
};

export default Button;
