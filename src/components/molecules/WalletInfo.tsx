import { FaWallet } from "react-icons/fa";

function WalletInfo({ saldo, onclick }: { saldo: number, onclick?: () => void }) {
    return (
        <button onClick={onclick} className="cursor-pointer flex items-center gap-2 text-black font-bold hover:text-gray-500 transition-colors duration-300">           
            <FaWallet className="cursor-pointer" />
            <span>${saldo}</span>
            <span>Billetera</span>
        </button>
    );
}

export default WalletInfo;
