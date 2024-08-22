import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./Cards";
import toast from "react-hot-toast";

interface Product {
  id: number;
  title: string;
  image: string;
}

function Layout() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://api.spoonacular.com/recipes/complexSearch",
          {
            params: {
              query: "burger cheese",
              number: 16, // Número de hamburguesas a obtener
              apiKey: "4628f29d981440c0a44c062a3162e21c",
            },
          }
        );

        setProducts(response.data.results);
      } catch (err) {
        setError(err as Error);
        toast.error("Se alcanzó el límite de consultas a la API diarias.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="spinner"></div>
      </div>
    );
  if (error)
    return (
      <div className="flex items-center justify-center h-screen bg-red-100">
        <div className="p-6 text-center bg-red-200 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-red-700">
            ¡Ocurrió un error!
          </h2>
          <p className="mt-2 text-red-600">
            No se pudieron cargar los productos en este momento. Por favor,
            intenta de nuevo más tarde.
          </p>
        </div>
      </div>
    );

  // Función para generar un precio aleatorio entre 3500 y 5000
  const generateRandomPrice = () => {
    return Math.floor(Math.random() * (5000 - 3500 + 1)) + 3500;
  };

  return (
    <div className="relative p-10">
      {/* Overlay oscuro */}
      <div className="absolute inset-0 z-0 bg-black opacity-50"></div>
      <div className="relative z-10">
        {products.length === 0 ? (
          <div className="flex items-center justify-center h-screen text-center text-gray-600">
            <p>No se encontraron productos disponibles.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product, index) => (
              <ProductCard
                key={product.id}
                name={product.title}
                price={generateRandomPrice()} // Asigna un precio aleatorio
                image={product.image}
                isNew={index < 5} // Marca los primeros 5 productos como nuevos
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Layout;
