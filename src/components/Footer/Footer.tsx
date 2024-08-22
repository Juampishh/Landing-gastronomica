import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="py-6 text-white bg-gray-900">
      <div className="container flex flex-col items-center mx-auto">
        <div className="flex flex-wrap justify-center mb-4 space-x-4">
          <Link
            to="/"
            className="transition duration-300 hover:text-yellow-500"
          >
            Bienvenida
          </Link>
          <Link
            to="/catalog"
            className="transition duration-300 hover:text-yellow-500"
          >
            Catálogo
          </Link>
          <Link
            to="/contact"
            className="transition duration-300 hover:text-yellow-500"
          >
            Contacto
          </Link>
        </div>
        <p className="mb-2 text-sm text-center">
          © {new Date().getFullYear()} Burger Haven. Todos los derechos
          reservados.
        </p>
        <p className="text-sm text-center">Designed by Juan Pablo Merino</p>

        {/* Ubicación de Google Maps */}
        <div className="flex justify-center w-full mt-8">
          <div className="w-1/2 h-64 overflow-hidden rounded-lg shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.874810574707!2d-46.65149648434141!3d-23.55052028468193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59a70aef7fdb%3A0x3dd6d927ad5f2d28!2sPra%C3%A7a%20da%20Rep%C3%BAblica%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2010100-000!5e0!3m2!1ses!2sbr!4v1689194764720!5m2!1ses!2sbr"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              aria-hidden="false"
              title="Mapa"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
