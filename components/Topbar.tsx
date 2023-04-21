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
