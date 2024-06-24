import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSongs } from "../redux/services/businessServices";

const SongList = () => {
  const dispatch = useDispatch();
  const { nfts } = useSelector((state) => state.business);
  const { businessContract } = useSelector((state) => state.auth);

  useEffect(() => {
    if (businessContract) {
      dispatch(getAllSongs(businessContract));
    }
  }, [businessContract]);

  return (
    <div className="m-4 flex flex-col justify-center items-center">
      {!nfts.length && <div>No songs are exist till now</div>}
      {nfts.length ? (
        <div>
          {nfts.map((nft, index) => (
            <div key={index} className="flex m-4 justify-center items-center">
              {nft.tokenURI}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default SongList;
