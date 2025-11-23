import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants";
import { removeUser } from "../redux/userSlice";

const NavBar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await axios.post(BASE_URL + "/logout", {}, { withCredentials: true });
      dispatch(removeUser());
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full bg-black text-white shadow-lg px-6 py-3 flex items-center">
      <div className="flex items-center gap-3">
        <Link
          to="/"
          className="flex items-center gap-2 hover:opacity-80 cursor-pointer"
        >
          <img
            src="logo.jpeg"
            alt="logo"
            className="w-10 h-10 object-cover rounded-full"
          />
          <h1 className="text-2xl font-bold tracking-wide">DevTinder</h1>
        </Link>
      </div>

      <div className=" hidden md:flex justify-center items-center gap-10 text-lg font-normal ml-10 underline">
        <h2 className="cursor-pointer hover:text-gray-300 transition">
          Products
        </h2>
        <h2 className="cursor-pointer hover:text-gray-300 transition">Learn</h2>
        <h2 className="cursor-pointer hover:text-gray-300 transition">
          Safety
        </h2>
        <h2 className="cursor-pointer hover:text-gray-300 transition">
          Support
        </h2>
        <h2 className="cursor-pointer hover:text-gray-300 transition">
          Download
        </h2>
      </div>

      <div className="flex ml-auto items-center gap-5">
        {user && (
          <div className="dropdown dropdown-end flex items-center gap-3">
            <p className=" text-sm opacity-90">
              Welcome, <span className="font-semibold">{user.firstName}</span>
            </p>

            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar hover:bg-white/10"
            >
              <div className="w-10 h-10 rounded-full border border-white overflow-hidden">
                <img src={user.photoUrl} alt="user" />
              </div>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white text-black rounded-xl mt-48 w-48 p-2 shadow-2xl border border-gray-200"
            >
              <li>
                <Link
                  to="/profile"
                  className="flex justify-between items-center hover:bg-gray-100 rounded-md px-2 py-2"
                >
                  Profile
                </Link>
              </li>

              <li>
                <Link
                  to="/connections"
                  className="hover:bg-gray-100 rounded-md px-2 py-2"
                >
                  Connections
                </Link>
              </li>

              <li>
                <Link
                  to="/requests"
                  className="hover:bg-gray-100 rounded-md px-2 py-2"
                >
                  Requests
                </Link>
              </li>

              <li>
                <button
                  onClick={handleLogOut}
                  className="hover:bg-gray-100 rounded-md px-2 py-2 text-left"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
