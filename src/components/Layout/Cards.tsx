import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cartSlice";
import toast from "react-hot-toast";

interface ProductCardProps {
  name: string;
  image: string;
  price: number;
  isNew?: boolean;
}

const generateRandomRating = () => {
  return Math.floor(Math.random() * 5) + 1; // Genera un número entre 1 y 5
};

const RatingStars: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex items-center space-x-1 text-yellow-500">
      {Array.from({ length: 5 }, (_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 ${
            index < rating ? "text-yellow-500" : "text-gray-300"
          }`}
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 17.27L18.18 21 16.54 14.64 22 10.27H15.81L12 4 8.19 10.27H2L7.46 14.64 5.82 21 12 17.27z" />
        </svg>
      ))}
    </div>
  );
};

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  image,
  price,
  isNew = false,
}) => {
  const dispatch = useDispatch();
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
    }).format(price);
  };

  const handleAddToCart = () => {
    dispatch(addItem({ id: Date.now(), name, price, quantity: 1 }));
    toast.success("Producto añadido correctamente");
  };

  const rating = generateRandomRating();

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full transition-transform transform hover:scale-105 hover:shadow-2xl">
      <div className="relative w-full h-48">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        {isNew && (
          <div className="absolute top-4 left-4">
            <span className="bg-yellow-500 text-white text-xs font-semibold uppercase px-2 py-1 rounded-full">
              Nueva
            </span>
          </div>
        )}
      </div>
      <div className="p-6 flex-1">
        <h2 className="text-xl font-bold mb-2 text-gray-800">{name}</h2>
        <p className="text-gray-700">{formatPrice(price)}</p>
        <RatingStars rating={rating} />
      </div>
      <div className="p-4 flex justify-center">
        <button
          onClick={handleAddToCart}
          className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition duration-300"
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
