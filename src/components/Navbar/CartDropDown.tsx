import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { removeItem, updateQuantity } from "../../redux/cartSlice";

const CartDropdown: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const items = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch<AppDispatch>();

  const handleRemove = (id: number) => {
    dispatch(removeItem(id));
  };

  const handleQuantityChange = (id: number, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  // Evitar el cierre del modal al hacer clic dentro de él
  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  // Calcular el total del pedido
  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handlePurchase = () => {
    // Implementar la lógica de compra aquí
    alert("Compra realizada con éxito!"); // Placeholder
  };

  return isOpen ? (
    <div
      className="fixed inset-0 z-40 flex items-start justify-end bg-gray-900 bg-opacity-50"
      onClick={onClose} // Cerrar el modal al hacer clic fuera de él
    >
      <div
        className="w-96 bg-white text-gray-800 shadow-2xl rounded-lg p-6 border border-gray-200 overflow-y-auto max-h-[80vh]"
        onClick={handleModalClick} // Evitar el cierre al hacer clic dentro del modal
      >
        <h2 className="pb-2 mb-4 text-2xl font-bold border-b border-gray-200">
          Carrito de Compras
        </h2>
        {items.length === 0 ? (
          <p className="text-center text-gray-600">El carrito está vacío.</p>
        ) : (
          <>
            <ul className="mb-4 space-y-4">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex items-start p-4 bg-gray-100 border border-gray-300 rounded-lg"
                >
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600">Precio: ${item.price}</p>
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) =>
                        handleQuantityChange(item.id, parseInt(e.target.value))
                      }
                      className="w-24 mt-1 text-center border border-gray-300 rounded"
                    />
                  </div>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="flex-shrink-0 px-4 py-2 ml-4 text-white transition bg-red-500 rounded hover:bg-red-600"
                  >
                    Eliminar
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex justify-between pt-4 text-lg font-bold border-t border-gray-200">
              <span>Total</span>
              <span>${calculateTotal().toFixed(2)}</span>
            </div>
            <button
              onClick={handlePurchase}
              className="w-full py-2 mt-4 text-white transition bg-green-500 rounded hover:bg-green-600"
            >
              Comprar
            </button>
          </>
        )}
        <button
          onClick={onClose}
          className="w-full py-2 mt-4 text-white transition bg-gray-800 rounded hover:bg-gray-700"
        >
          Cerrar
        </button>
      </div>
    </div>
  ) : null;
};

export default CartDropdown;
