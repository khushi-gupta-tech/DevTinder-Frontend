import { useSelector } from "react-redux";

const NavBar = () => {
  const user = useSelector((store) => store.user);
  console.log(user);

  return (
    <div className="navbar bg-black text-white shadow-lg px-6 py-3">
      {/* Left Brand */}
      <div className="flex-1">
        <a className="text-2xl font-bold tracking-wide hover:opacity-80 cursor-pointer">
          DevTinder
        </a>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {user && (
          <div className="dropdown dropdown-end flex items-center gap-3">
            <p className="hidden sm:block text-sm opacity-90">
              Welcome, <span className="font-semibold">{user.firstName}</span>
            </p>

            {/* Avatar */}
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar hover:bg-white/10"
            >
              <div className="w-10 rounded-full border border-white overflow-hidden">
                <img alt="user" src={user.photoUrl} />
              </div>
            </div>

            {/* Dropdown Menu */}
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-white text-black rounded-xl mt-3 w-48 p-2 shadow-2xl border border-gray-200"
            >
              <li>
                <a className="flex justify-between items-center hover:bg-gray-100 rounded-md">
                  Profile
                  <span className="badge bg-black text-white">New</span>
                </a>
              </li>

              <li>
                <a className="hover:bg-gray-100 rounded-md">Settings</a>
              </li>

              <li>
                <a className="hover:bg-gray-100 rounded-md">Logout</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
