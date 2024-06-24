import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSongs } from "../redux/services/businessServices";

const SongList = () => {
  const dispatch = useDispatch();
  const { songs } = useSelector((state) => state.business);
  const { businessContract } = useSelector((state) => state.auth);

  useEffect(() => {
    businessContract && dispatch(getAllSongs(businessContract));
  }, [businessContract]);

  return (
    <div className="m-4 flex flex-col justify-center items-center">
      {!songs.length && <div>No songs are exist till now</div>}
      {songs.length && (
        <div>
          {songs.map((song, index) => (
            <div
              key={index}
              className="flex m-4 justify-center items-center"
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SongList;
