
const CartModal = ({ cart, closeModal, removeFromCart }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-96 p-6 rounded-lg shadow-lg relative">
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>

        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="space-y-4 max-h-80 overflow-y-auto">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-2"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-12 w-12 object-contain"
                />
                <p className="flex-1 px-2 text-sm">{item.title}</p>
                <p className="font-semibold">${item.price}</p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-2 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-gray-600 hover:text-black text-lg"
        >
          ✖
        </button>
      </div>
    </div>
  );
};

export default CartModal;
