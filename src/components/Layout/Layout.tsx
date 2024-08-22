import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./Cards";

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
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner"></div>
      </div>
    );
  if (error)
    return (
      <p className="text-red-500 text-center mt-4">
        Hubo un error al cargar los productos.
      </p>
    );

  // Función para generar un precio aleatorio entre 3500 y 5000
  const generateRandomPrice = () => {
    return Math.floor(Math.random() * (5000 - 3500 + 1)) + 3500;
  };

  return (
    <div className="relative p-10">
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <div className="relative z-10">
        {products.length === 0 ? (
          <div className="flex justify-center items-center h-screen text-center text-gray-600">
            <p>No se encontraron productos disponibles.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
