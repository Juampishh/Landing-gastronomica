import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function Welcome() {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-cover bg-center bg-[url('https://i.pinimg.com/originals/d7/17/81/d71781dfb3d9d4892fe99636ebd2deeb.jpg')] relative">
      <div className="relative z-50 w-full">
        <Navbar />
      </div>

      {/* Contenedor principal con el overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="absolute inset-0 z-10 bg-black bg-opacity-50"></div>{" "}
        {/* Overlay oscuro */}
        <div className="relative z-20 text-center">
          <h1 className="mb-4 text-6xl font-extrabold text-white drop-shadow-lg">
            ¡Bienvenido a Burger Haven!
          </h1>
          <p className="mb-8 text-xl text-white drop-shadow-md">
            Las mejores hamburguesas americanas en un solo lugar
          </p>
          <p className="mb-8 text-lg text-yellow-300">
            ¡Disfruta un 20% de descuento en tu primera orden!
          </p>
          <button
            onClick={() => {
              navigate("/catalog");
            }}
            className="px-8 py-4 text-white transition duration-300 transform bg-yellow-500 rounded-full hover:bg-yellow-600 hover:shadow-lg hover:scale-105"
          >
            Ver Menú
          </button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
