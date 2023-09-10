import { useEffect } from "react";
import Alert from "./components/Alert";
import Artworks from "./components/Artworks";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Loading from "./components/Loading";
import { isWallectConnected, loadNfts } from "./dChain";
import { useGlobalState } from "./store";

const App = () => {

  const [nfts] = useGlobalState('nfts');

  useEffect(() => {
    const check = async () => {
      await isWallectConnected().then(() => console.log("Blockchain Loaded."));
      await loadNfts();
    }

    check();

  },[])


  return (
    <div className="min-h-screen">
      <div className="gradient-bg-hero">
        <Header />
        <Hero />
      </div>
      <Artworks artworks={nfts} />
      <Footer />
      <Alert />
      <Loading />
    </div>
  );
};

export default App;



// Contract-Address : "0x628Cd0134867beE6bed31202B54f1AC02b004765";