
const Navbar = ({ cartCount, openModal }) => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">🛒 Fake Store</h1>
      <button
        onClick={openModal}
        className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold shadow hover:bg-gray-200"
      >
        Cart ({cartCount})
      </button>
    </nav>
  );
};

export default Navbar;
