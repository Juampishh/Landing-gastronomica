import { useState } from "react";
import { Link } from "react-router-dom";
import CartDropdown from "./CartDropDown";

function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 z-40 w-full py-4 text-white bg-gray-900 shadow-lg">
      <div className="container flex items-center justify-between mx-auto">
        <Link to="/" className="text-3xl font-extrabold tracking-wide">
          Burger Haven
        </Link>
        <div className="hidden space-x-8 md:flex">
          <Link
            to="/"
            className="transition duration-300 hover:text-yellow-500 hover:underline underline-offset-4"
          >
            Bienvenida
          </Link>
          <Link
            to="/catalog"
            className="transition duration-300 hover:text-yellow-500 hover:underline underline-offset-4"
          >
            Catálogo
          </Link>
          <Link
            to="/contact"
            className="transition duration-300 hover:text-yellow-500 hover:underline underline-offset-4"
          >
            Contacto
          </Link>
          <button
            onClick={toggleCart}
            className="relative p-2 text-yellow-500 hover:text-yellow-400"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l3 9h11l3-9h2"
              ></path>
              <circle cx="9" cy="21" r="1" fill="currentColor"></circle>
              <circle cx="20" cy="21" r="1" fill="currentColor"></circle>
            </svg>
            {isCartOpen && (
              <CartDropdown
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
              />
            )}
          </button>
        </div>
        <button
          onClick={toggleMenu}
          className="text-yellow-500 md:hidden hover:text-yellow-400 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-gray-900 text-white flex flex-col items-center pt-16 transition-transform transform ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        } z-50`}
        style={{ zIndex: 9999 }}
      >
        <Link
          to="/"
          className="py-4 text-2xl transition duration-300 hover:text-yellow-500"
          onClick={() => setIsMenuOpen(false)}
        >
          Bienvenida
        </Link>
        <Link
          to="/catalog"
          className="py-4 text-2xl transition duration-300 hover:text-yellow-500"
          onClick={() => setIsMenuOpen(false)}
        >
          Catálogo
        </Link>
        <Link
          to="/contact"
          className="py-4 text-2xl transition duration-300 hover:text-yellow-500"
          onClick={() => setIsMenuOpen(false)}
        >
          Contacto
        </Link>
        <button
          onClick={() => {
            toggleCart();
            setIsMenuOpen(false);
          }}
          className="relative p-2 text-yellow-500 hover:text-yellow-400"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l3 9h11l3-9h2"
            ></path>
            <circle cx="9" cy="21" r="1" fill="currentColor"></circle>
            <circle cx="20" cy="21" r="1" fill="currentColor"></circle>
          </svg>
          {isCartOpen && (
            <CartDropdown
              isOpen={isCartOpen}
              onClose={() => setIsCartOpen(false)}
            />
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
