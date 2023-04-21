"use client";

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return <div className="font-bold text-white mb-5 text-4xl ">{title}</div>;
};

export default Header;
