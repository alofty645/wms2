import clsx from "clsx";
import Link from "next/link";

interface StyledLinkProps {
  title: string;
  href: string;
  id?: string;
}

const StyledLink: React.FC<StyledLinkProps> = ({ title, href, id }) => {
  return (
    <Link
      href={href}
      id={id}
      className={clsx(
        "bg-white text-black m-1",
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
      {title}
    </Link>
  );
};

export default StyledLink;
