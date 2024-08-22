import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { removeItem, updateQuantity } from "../../redux/cartSlice";

const Cart: React.FC = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch<AppDispatch>();

  const handleRemove = (id: number) => {
    dispatch(removeItem(id));
  };

  const handleQuantityChange = (id: number, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  return (
    <div className="p-6">
      <h2 className="mb-4 text-xl font-bold">Carrito de Compras</h2>
      {items.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between mb-4"
            >
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p>Precio: ${item.price}</p>
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={(e) =>
                    handleQuantityChange(item.id, parseInt(e.target.value))
                  }
                  className="w-16 text-center border border-gray-300 rounded"
                />
              </div>
              <button
                onClick={() => handleRemove(item.id)}
                className="px-4 py-2 text-white bg-red-500 rounded"
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
