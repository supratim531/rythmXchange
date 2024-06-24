import { parseNFTs } from "../../utils/nftUtils";
import { fetchAllSongs } from "../actions/businessActions";

export const getAllSongs = (businessContract) => async (dispatch, getState) => {
  try {
    const res = await businessContract.fetchAllTokens();
    console.log({ res });
    const rawNFTs = res[1];
    const totalNFTs = Number(res[0]);
    const nfts = parseNFTs(rawNFTs);
    console.log(totalNFTs, nfts);
    dispatch(fetchAllSongs(nfts));
  } catch (err) {
    console.log({ err });
  }
};
