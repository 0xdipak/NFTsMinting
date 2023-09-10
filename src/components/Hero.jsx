import avatar from "../assets/cover.jpg";
import github from "../assets/github_icon.png";
import facebook from "../assets/facebook_icon.png";
import twitter from "../assets/twitter_icon.png";
import linkedIn from "../assets/linkedIn_icon.png";
import medium from "../assets/medium_icon.png";
import { setAlert, setGlobalState, setLoadingMsg, useGlobalState } from "../store";
import { payToMint } from "../dChain";

const Hero = () => {

  const [nfts] = useGlobalState('nfts');

  const onMintNFT = async () => {
    setGlobalState("loading", {
      show: true,
      msg: "Minting new NFT to your account",
    });

    await payToMint()
      .then(() => setAlert("Minting Successful...", "green"))
      .catch(() => setGlobalState("loading", { show: false, msg: "" }));
  };


  return (
    <div
      className="bg-[url('https://cdn.pixabay.com/photo/2022/03/01/02/51/galaxy-7040416_960_720.png')]
    bg-no-repeat bg-cover"
    >
      <div className="flex flex-col justify-center items-center mx-auto py-10">
        <h1 className="text-white text-5xl font-bold text-center">
          A.I Arts <br />
          <span className="text-gradient">NFTs</span> Collection
        </h1>
        <p className="text-white font-semibold text-sm mt-3">
          Mint and collect the hottest NFTs around.
        </p>

        <button
        onClick={onMintNFT}
          className="shadow-xl shadow-black text-white bg-[#e32970] hover:bg-[#bd255f]
        p-2 cursor-pointer rounded-full my-4"
        >
          Mint Now
        </button>

        <a
          className="flex justify-center items-center space-x-2 bg-[#000000ad] rounded-full
        my-4 pr-3 cursor-pointer"
          href="https://github.com/0xdipak"
          target="_blank"
        >
          <img
            className="w-11 h-11 object-cover rounded-full"
            src={avatar}
            alt="Avatar"
          />
          <div className="flex  flex-col font-semibold text-white text-sm">
            <span>0x5f...146a</span>
            <span className="text-[#e32970]">0xdipak</span>
          </div>
        </a>

        <div className="text-white text-right">
          <p className="text-sm font-medium text-center">
            "Unlock the Future, One NFT at a Time! Your Gateway to Digital{" "}
            <br />
            Ownership – Mint, Collect, and Embrace the Metaverse with Us!"{" "}
            <br />
          </p>
          <small>~ dChain</small>
        </div>
        <ul className="flex flex-row justify-center space-x-2 items-center my-4">
          <a
            className="bg-white hover:scale-50 transition-all duration-75 delay-75
            rounded-full mx-2"
            href="#"
          >
            <img className="w-7 h-7" src={github} alt="Github" />
          </a>
          <a
            className="bg-white hover:scale-50 transition-all duration-75 delay-75
            rounded-full mx-2"
            href="#"
          >
            <img className="w-7 h-7" src={facebook} alt="Github" />
          </a>
          <a
            className="bg-white hover:scale-50 transition-all duration-75 delay-75
            rounded-full mx-2"
            href="#"
          >
            <img className="w-7 h-7" src={linkedIn} alt="Github" />
          </a>
          <a
            className="bg-white hover:scale-50 transition-all duration-75 delay-75
            rounded-full mx-2"
            href="#"
          >
            <img className="w-7 h-7" src={twitter} alt="Github" />
          </a>
          <a
            className="bg-white hover:scale-50 transition-all duration-75 delay-75
            rounded-full mx-2"
            href="#"
          >
            <img className="w-7 h-7" src={medium} alt="Github" />
          </a>
        </ul>

        <div className="shadow-xl shadow-black flex justify-center items-center w-10 h-10 rounded-full
        bg-white cursor-pointer p-3 ml-4 hover:bg-[#bd255f] hover:text-white
        transition-all duration-75 delay-100">
            <span className="text-sm font-bold">{nfts.length}/99</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
