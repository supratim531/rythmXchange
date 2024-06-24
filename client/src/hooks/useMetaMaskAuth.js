import { ethers } from "ethers";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/authActions";
import Business from "../contracts/Business.json";
import MusicNFT from "../contracts/MusicNFT.json";
import { BusinessAddress, MusicNFTAddress } from "../contracts/addresses";

const useMetaMaskAuth = () => {
  const { ethereum } = window;
  const dispatch = useDispatch();

  // const [authState, setAuthState] = useState({
  //   wallet: null,
  //   signer: null,
  //   provider: null,
  //   nftContract: null,
  //   businessContract: null,
  // });

  const connectWallet = async () => {
    try {
      if (ethereum) {
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        const provider = new ethers.BrowserProvider(ethereum);
        const signer = await provider.getSigner();
        const nftContract = new ethers.Contract(
          MusicNFTAddress,
          MusicNFT.abi,
          signer
        );
        const businessContract = new ethers.Contract(
          BusinessAddress,
          Business.abi,
          signer
        );
        dispatch(
          login({
            wallet: accounts[0],
            signer: signer,
            provider: provider,
            nftContract: nftContract,
            businessContract: businessContract,
          })
        );
        // setAuthState({
        //   wallet: accounts[0],
        //   signer: signer,
        //   provider: provider,
        //   nftContract: nftContract,
        //   businessContract: businessContract,
        // });
      }
    } catch (err) {
      console.log(err);
      alert(err.message);
    }
  };

  return connectWallet;
};

export default useMetaMaskAuth;
