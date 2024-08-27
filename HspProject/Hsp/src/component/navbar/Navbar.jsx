import React, { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../../firebaseConfig/FireBase.jsx";
import { signOut } from "firebase/auth";
import { Radar } from "lucide-react";

const menuUpperItems = [
  { name: "Find a Doctor", href: "/consultdoctors" },
  { name: "Blogs", href: "#" },
  { name: "My Reports", href: "#" },
  { name: "Investors", href: "/adddoctor" },
  { name: "Research", href: "#" },
  { name: "CSR", href: "#" },
  { name: "Contact Us", href: "#" },
];

const menuItems = [
  {
    name: "Patient Care",
    href: "/patientcare",
    subitems: [
      {
        name: "Find a Doctor",
        href: "/consultdoctors",
        subsubitems: [
          { name: "Heart Care", href: "/orthopedics" },
          { name: "Orthopedics", href: "/orthopedics" },
          { name: "Pulmonology", href: "/pulmonology" },
          { name: "Cancer", href: "/cancer" },
          { name: "Urology", href: "/urology" },
          { name: "Radio Oncology", href: "/radiooncology" },
        ],
      },
      { name: "Blogs", href: "/whoweare" },
      { name: "My Reports", href: "#" },
      { name: "Blogs", href: "specialist" },
      { name: "My Reports", href: "#" },
    ],
  },
  {
    name: "Center Of Excellence",
    href: "/specialist",
    subitems: [
      { name: "Orthopedics", href: "/orthopedics" },
      { name: "Gastroenterology", href: "gastroenterology" },
      { name: "Rheumatology", href: "/rheumatology" },
    ],
  },
  {
    name: "Specialities",
    href: "/Specialist",
    subitems: [
      {
        name: "Cardiology",
        href: "/cardiology",
        subsubitems: [
          { name: "ByePass Surgery", href: "#" },
          { name: "Heart Value Replacement", href: "#" },
          { name: "ASD Surgery", href: "#" },
          { name: "Endoscopic", href: "#" },
        ],
      },
      {
        name: "Neurology",
        href: "https://www.healthline.com/find-care/articles/neurologists/neurologist#procedures",
        subsubitems: [
          { name: "Head Injuries", href: "#" },
          { name: "Chronic headaches", href: "#" },
          { name: "Migranine", href: "#" },
          { name: "Multiple sclerosis", href: "#" },
        ],
      },
    ],
  },
  {
    name: "Procedures",
    href: "https://www.linkedin.com/pulse/10-occupational-health-safety-procedures-you-need-know-hsewatch/",
    subitems: [
      { name: "Lumbar Puncture", href: "#" },
      { name: "Tensilon test", href: "#" },
      { name: "Electromyography(EMG)", href: "#" },
    ],
  },
  {
    name: "International Patients",
    href: "https://www.linkedin.com/pulse/10-occupational-health-safety-procedures-you-need-know-hsewatch/",
    subitems: [
      { name: "Service A", href: "#" },
      { name: "Service B", href: "#" },
      { name: "Service C", href: "#" },
      { name: "Service D", href: "#" },
      { name: "Service E", href: "#" },
      { name: "Service F", href: "#" },
    ],
  },
  {
    name: "Academic & Research",
    href: "https://www.linkedin.com/pulse/10-occupational-health-safety-procedures-you-need-know-hsewatch/",
    subitems: [
      { name: "Research A", href: "#" },
      { name: "Research B", href: "#" },
      { name: "Research C", href: "#" },
      { name: "Research D", href: "#" },
      { name: "Research E", href: "#" },
      { name: "Research F", href: "#" },
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
      navigate("/login");
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
            Logout({user.firstName}
             ({user.role}))
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
          <span className=" ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#171616"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-radar"
            >
              <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34" />
              <path d="M4 6h.01" />
              <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35" />
              <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67" />
              <path d="M12 18h.01" />
              <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67" />
              <circle cx="12" cy="12" r="2" />
              <path d="m13.41 10.59 5.66-5.66" />
            </svg>
          </span>
          <span className="font-bold text-black"></span>
        </div>

        <div className="hidden lg:block relative">
          <ul className="ml-12 inline-flex space-x-6 ">
            {menuItems.map((item, index) => (
              <li
                key={item.name}
                onMouseEnter={() => setOpenDropdownIndex(index)}
                onMouseLeave={() => setOpenDropdownIndex(null)}
                className="relative "
              >
                <a
                  href={item.href}
                  className="inline-flex items-center text-sm font-semibold text-white hover:text-yellow-300 "
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
                          className="relative border-b p-1 border-black "
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
                            <div className="absolute text-sm top-0 left-full ml-1 mt-0.5 w-36 bg-white text-black rounded shadow-lg z-20">
                              <ul>
                                {subitem.subsubitems.map((subsubitem) => (
                                  <li
                                    key={subsubitem.name}
                                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer border-b border-black "
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
