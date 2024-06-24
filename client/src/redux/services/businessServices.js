import { fetchAllSongs } from "../actions/businessActions";

export const getAllSongs = (businessContract) => async (dispatch, getState) => {
  try {
    const res = await businessContract.getAllTokens();
    console.log({ res });
    const tokenList = res.toArray();
    dispatch(fetchAllSongs(tokenList));
  } catch (err) {
    console.log({ err });
  }
};
