import React, { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../../firebaseConfig/FireBase.jsx";
import { signOut } from "firebase/auth";

const menuUpperItems = [
  { name: "Find a Doctor", href: "/consultdoctors" },
  { name: "Blogs", href: "#" },
  { name: "My Reports", href: "#" },
  { name: "Investors", href: "#" },
  { name: "Research", href: "#" },
  { name: "CSR", href: "#" },
  { name: "Contact Us", href: "#" },
];

const menuItems = [
  {
    name: "Patient Care",
    href: "#",
    subitems: [
      {
        name: "Find a Doctor",
        href: "/consultdoctors",
        subsubitems: [
          { name: "Doctor A", href: "#" },
          { name: "Doctor B", href: "#" },
          { name: "Doctor C", href: "#" },
        ],
      },
      { name: "Blogs", href: "#" },
      { name: "My Reports", href: "#" },
    ],
  },
  {
    name: "Center Of Excellence",
    href: "/specialist",
    subitems: [
      { name: "Department A", href: "#" },
      { name: "Department B", href: "#" },
      { name: "Department C", href: "#" },
    ],
  },
  {
    name: "Specialities",
    href: "/Specialist",
    subitems: [
      {
        name: "Cardiology",
        href: "#",
        subsubitems: [
          { name: "Treatment A", href: "#" },
          { name: "Treatment B", href: "#" },
        ],
      },
      {
        name: "Neurology",
        href: "#",
        subsubitems: [
          { name: "Treatment A", href: "#" },
          { name: "Treatment B", href: "#" },
        ],
      },
    ],
  },
  {
    name: "Procedures",
    href: "#",
    subitems: [
      { name: "Procedure A", href: "#" },
      { name: "Procedure B", href: "#" },
      { name: "Procedure C", href: "#" },
    ],
  },
  {
    name: "International Patients",
    href: "#",
    subitems: [
      { name: "Service A", href: "#" },
      { name: "Service B", href: "#" },
      { name: "Service C", href: "#" },
    ],
  },
  {
    name: "Academic & Research",
    href: "#",
    subitems: [
      { name: "Research A", href: "#" },
      { name: "Research B", href: "#" },
      { name: "Research C", href: "#" },
    ],
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [submenuIndex, setSubmenuIndex] = useState(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser.user);
      setIsAuthenticated(true);
    }
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scroll down
        setIsNavbarVisible(false);
      } else {
        // scroll up
        setIsNavbarVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleLogoutClick = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("user");
      setUser(null);
      setIsAuthenticated(false);
      toast.success("Logged out successfully", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      navigate("/");
    } catch (error) {
      toast.error("Logout Failed", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <div className="relative w-full bg-gradient-to-r from-green-300 to-blue-500 text-white rounded-sm h-36 font-semibold  font-sans">
      <div className="flex items-center bg-yellow-500 w-full p-2 font-semibold hover:text-yellow-700 cursor-pointer justify-center lg:pl-96">
        Get Free Second Opinion From India's Leading Specialists.
        <div
          className="relative ml-2"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <ChevronDown className="h-4 w-4" />
          {isDropdownOpen && (
            <div className="absolute text-sm font-thin top-full left-0 mt-2 w-40 bg-white text-black rounded shadow-lg">
              <ul>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  Option 1
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  Option 2
                </li>
               
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="h-9 hidden lg:flex bg-green-700 p-6 lg:ml-96 rounded-bl-3xl justify-between items-center">
        <ul className="inline-flex space-x-6">
          {menuUpperItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="inline-flex items-center text-sm font-semibold text-white hover:text-yellow-300"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        {isAuthenticated ? (
          <button
            onClick={handleLogoutClick}
            className="text-gray-50 p-2 border-stone-100 rounded-full animate-buttonBgColorChange hover:bg-red-400 hover:cursor-pointer ml-6"
          >
            Logout({user.email})
          </button>
        ) : (
          <button
            onClick={handleLoginClick}
            className="text-gray-50 p-2 border-stone-100 rounded-full animate-buttonBgColorChange hover:bg-red-400 hover:cursor-pointer ml-6"
          >
            LogIn/SignUp
          </button>
        )}
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <span>
            <svg
              width="30"
              height="30"
              viewBox="0 0 50 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.3451 16.9634 30.7239C18.6907 32.1026 20.1699 33.3872 20.2671 33.6831C20.7072 34.4723 19.5731 35.5569 18.6871 34.6708C18.1439 34.1276 8.67815 28.5061 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                fill="black"
              />
            </svg>
          </span>
          <span className="font-bold">JhaJee</span>
        </div>

        <div className="hidden lg:block relative">
          <ul className="ml-12 inline-flex space-x-6">
            {menuItems.map((item, index) => (
              <li
                key={item.name}
                onMouseEnter={() => setOpenDropdownIndex(index)}
                onMouseLeave={() => setOpenDropdownIndex(null)}
                className="relative"
              >
                <a
                  href={item.href}
                  className="inline-flex items-center text-sm font-semibold text-white hover:text-yellow-300"
                >
                  {item.name}
                  {item.subitems && <ChevronDown className="ml-2 h-4 w-4" />}
                </a>
                {item.subitems && openDropdownIndex === index && (
                  <div className="absolute font-light top-full left-12 m-2 p-2 mt-0.5 w-40 text-sm  bg-white text-black rounded shadow-lg z-10 ">
                    <ul>
                      {item.subitems.map((subitem, subIndex) => (
                        <li
                          key={subitem.name}
                          onMouseEnter={() => setSubmenuIndex(subIndex)}
                          onMouseLeave={() => setSubmenuIndex(null)}
                          className="relative"
                        >
                          <a
                            href={subitem.href}
                            className="px-2 py-1 hover:bg-gray-200 cursor-pointer flex items-center"
                          >
                            {subitem.name}
                            {subitem.subsubitems && (
                              <ChevronDown className="ml-2 h-4 w-4" />
                            )}
                          </a>
                          {subitem.subsubitems && submenuIndex === subIndex && (
                            <div className="absolute text-sm top-0 left-full mt-0 w-32 bg-white text-black rounded shadow-lg z-20">
                              <ul>
                                {subitem.subsubitems.map((subsubitem) => (
                                  <li
                                    key={subsubitem.name}
                                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                                  >
                                    <a href={subsubitem.href}>
                                      {subsubitem.name}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex grow justify-end">
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
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>

        <div className="ml-2 block lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden bg-gradient-to-r from-green-400 to-blue-500 p-2">
          <ul>
            {menuUpperItems.concat(menuItems).map((item) => (
              <li key={item.name} className="p-2">
                <a
                  href={item.href}
                  className="block text-sm text-white hover:text-yellow-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      <ToastContainer />
    </div>
  );
}
