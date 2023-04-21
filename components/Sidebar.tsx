import Link from "next/link";
import Newbutton from "./Newbutton";

const Sidebar = () => {
  return (
    <div className="flex h-screen">
      <div className="bg-sky-950 text-gray-100 flex-col w-64 rounded-3xl m-3 text-center">
        <div className="px-4 py-6">
          <h2 className="text-lg font-medium">WMS 2</h2>
        </div>
        <div className="px-4 py-2">
          <Link
            className="block text-white hover:bg-white hover:text-black focus:bg-emerald-700 rounded-3xl p-3"
            href="/dashboard"
          >
            Dashboard
          </Link>

          <Link
            className="block text-white hover:bg-white hover:text-black focus:bg-emerald-700 rounded-3xl p-3"
            href="/sales"
          >
            Sales
          </Link>
          <Link
            className="block text-white hover:bg-white hover:text-black focus:bg-emerald-700 rounded-3xl p-3"
            href="/products"
          >
            Products
          </Link>
          <Link
            className="block text-white hover:bg-white hover:text-black focus:bg-emerald-700 rounded-3xl p-3"
            href="/purchaseorders"
          >
            Purchase Orders
          </Link>
          <Link
            className="block text-white hover:bg-white hover:text-black focus:bg-emerald-700 rounded-3xl p-3"
            href="/contacts"
          >
            Contacts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
