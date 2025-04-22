import { FiShoppingCart } from "react-icons/fi";

function CartInfo({ onclick }: { onclick?: () => void }) {
  return (
    <button onClick={onclick} className="cursor-pointer flex items-center gap-2 text-black font-bold hover:text-gray-500 transition-colors duration-300">
      <FiShoppingCart />
      <span>Carrito de compras</span>
    </button>
  );
}
export default CartInfo;