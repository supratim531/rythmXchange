import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import defaultAxios from "../axios";
import { mintNFT } from "../redux/services/nft";
import toast from "react-hot-toast";

const UploadSong = () => {
  const dispatch = useDispatch();
  const { nftContract, businessContract } = useSelector((state) => state.auth);

  const [data, setData] = useState({
    song: "",
    artist: "",
    color: "",
    numberOfEditions: "",
    price: "",
    description: "",
    sellStartTimestamp: "",
    sellEndTimestamp: "",
  });

  const [file, setFile] = useState({
    imageFile: null,
    coverImageFile: null,
    songFile: null,
  });

  const handleDataChange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (e) => {
    setFile((prev) => ({
      ...prev,
      [e.target.name]: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("song", data.song);
      formData.append("artist", data.artist);
      formData.append("color", data.color);
      formData.append("description", data.description);
      formData.append("file", file.imageFile);
      formData.append("file", file.coverImageFile);
      formData.append("file", file.songFile);

      console.log(data);
      console.log(file);
      console.log(formData);

      const res = await defaultAxios.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log({ res });
      toast.success("Assets uploaded to IPFS successfully");

      const tokenURI = res.data.tokenURI;
      dispatch(mintNFT(data, tokenURI, nftContract, businessContract));
    } catch (err) {
      console.log({ err });
    }
  };

  return (
    <div className="container mx-auto py-10">
      <form onSubmit={handleSubmit} className="flex flex-col gap-10">
        <input
          type="text"
          name="song"
          className="form-input"
          placeholder="Name of the Song"
          value={data.song}
          onChange={handleDataChange}
        />
        <input
          type="text"
          name="artist"
          className="form-input"
          placeholder="Name of the Artist"
          value={data.artist}
          onChange={handleDataChange}
        />
        <input
          type="color"
          name="color"
          className="form-input"
          value={data.color}
          onChange={handleDataChange}
        />
        <input
          type="text"
          name="numberOfEditions"
          className="form-input"
          placeholder="Number of Editions"
          value={data.numberOfEditions}
          onChange={handleDataChange}
        />
        <input
          type="text"
          name="price"
          className="form-input"
          placeholder="Price of each Edition"
          value={data.price}
          onChange={handleDataChange}
        />
        <textarea
          rows={5}
          cols={3}
          name="description"
          className="form-input"
          placeholder="Description for the Song"
          value={data.description}
          onChange={handleDataChange}
        ></textarea>
        <div>
          <label htmlFor="time">Select Sell Start Time: </label>
          <input
            type="datetime-local"
            name="time"
            className="form-input"
            onChange={(e) => {
              // Convert the input datetime to a Unix timestamp
              const date = new Date(e.target.value);
              setData((prev) => ({
                ...prev,
                sellStartTimestamp: Math.floor(date.getTime() / 1000),
              }));
            }}
          />
        </div>
        <div>
          <label htmlFor="time">Select Sell End Time: </label>
          <input
            type="datetime-local"
            name="time"
            className="form-input"
            onChange={(e) => {
              // Convert the input datetime to a Unix timestamp
              const date = new Date(e.target.value);
              setData((prev) => ({
                ...prev,
                sellEndTimestamp: Math.floor(date.getTime() / 1000),
              }));
            }}
          />
        </div>
        <div>
          <label>Choose an Image: </label>
          <input type="file" name="imageFile" onChange={handleFileChange} />
        </div>
        <div>
          <label>Choose a Cover Image: </label>
          <input
            type="file"
            name="coverImageFile"
            onChange={handleFileChange}
          />
        </div>
        <div className="">
          <label>Choose the Song: </label>
          <input type="file" name="songFile" onChange={handleFileChange} />
        </div>
        <button
          type="submit"
          className="self-start px-6 py-3 pb-4 rounded transition-all text-white bg-blue-600 hover:bg-blue-800"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default UploadSong;
