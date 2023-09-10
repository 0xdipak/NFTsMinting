import ethLogo from "../assets/ethlogo.png";
import { connectWallet } from "../dChain";
import { useGlobalState, truncate } from "../store";

const Header = () => {
  const [connectedAccount] = useGlobalState('connectedAccount');
  return (
    <nav className="w-4/5 flex md:justify-center justify-between items-center py-4 mx-auto">
      <div className="flex flex-row justify-start items-center md:flex-[0.5] flex-initial">
        <img className="w-8 cursor-pointer" src={ethLogo} alt="logo" />
        <span className="text-white text-2xl ml-2">dChain</span>
      </div>

      <ul className="md:flex md:flex-[0.5] text-white hidden list-none flex-row justify-between items-center flex-initial">
        <li className="mx-4 cursor-pointer">Explore</li>
        <li className="mx-4 cursor-pointer">Features</li>
        <li className="mx-4 cursor-pointer">Community</li>
      </ul>

      {connectedAccount ? (
        <button
          onClick={connectWallet}
          className="shadow-xl shadow-black text-white bg-[#e32970] hover:bg-[#bd255f] md:text-xs p-2
      rounded-full cursor-pointer lg:ml-12"
        >
          {truncate(connectedAccount,4,4,11)}
        </button>
      ) : (
        <button
          onClick={connectWallet}
          className="shadow-xl shadow-black text-white bg-[#e32970] hover:bg-[#bd255f] md:text-xs p-2
      rounded-full cursor-pointer lg:ml-12"
        >
          Connect Wallet
        </button>
      )}
    </nav>
  );
};

export default Header;
