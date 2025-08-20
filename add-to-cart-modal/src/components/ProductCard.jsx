
const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col justify-between">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 w-full object-contain mb-4"
      />
      <h2 className="font-semibold text-lg line-clamp-2">{product.title}</h2>
      <p className="text-gray-700 font-bold mt-2">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-4 bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
