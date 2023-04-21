import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="flex h-screen">
      <div className="bg-sky-950 text-gray-100 flex-col w-64 rounded-3xl m-3 text-center">
        <div className="px-4 py-6">
          <h2 className="text-lg font-medium">WMS 2</h2>
        </div>
        <div className="px-4 py-2">
          <a
            href="/dashboard"
            className="block text-white hover:bg-white hover:text-black focus:bg-emerald-700 rounded-3xl p-3"
          >
            Dashboard
          </a>
          <a
            href="/sales"
            className="block text-white hover:bg-white hover:text-black focus:bg-emerald-700 rounded-3xl p-3"
          >
            Sales
          </a>
          <a
            href="/products"
            className="block text-white hover:bg-white hover:text-black focus:bg-emerald-700  rounded-3xl p-3"
          >
            Products
          </a>
          <a
            href="/purchaseorders"
            className="block text-white hover:bg-white hover:text-black focus:bg-emerald-700  rounded-3xl p-3"
          >
            Purchase Orders
          </a>
          <a
            href="/contacts"
            className="block text-white hover:bg-white hover:text-black focus:bg-emerald-700 rounded-3xl p-3"
          >
            Contacts
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
