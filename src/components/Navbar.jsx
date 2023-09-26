function Navbar() {
  return (
    <div>
      <div className="navbar bg-[#FFF8F8] fixed top-0 left-0 right-0 opacity-95">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-[#FFF8F8] shadow-xl rounded-box w-52 text-xl"
            >
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Project</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-start px-2 lg:justify-end">
            <img
              src="/public/img-header.svg"
              alt="icon-navbar"
              width={50}
              height={50}
            />
            <a className="px-1 text-xl font-medium normal-case" href="#">
              Dimdimah
            </a>
          </div>
        </div>
        <div className="hidden navbar-end lg:flex">
          <ul className="flex px-3 text-xl cursor-pointer text-gray-950">
            <li className="px-3 hover:text-gray-500">
              <a>About</a>
            </li>
            <li className="px-3 hover:text-gray-500">
              <a>Project</a>
            </li>
            <li className="px-3 hover:text-gray-500">
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
