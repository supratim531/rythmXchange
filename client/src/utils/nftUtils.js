export const parseNFTs = (rawNFTs) => {
  const nfts = rawNFTs.toArray().map((token) => {
    const nft = {
      song: {
        name: token[0][0],
        artist: token[0][1],
        imageURL: token[0][2],
      },
      price: token[1].toString(),
      tokenId: token[2].toString(),
      tokenURI: token[3],
      dateOfMint: token[4].toString(),
      creator: token[5],
      sellStartTimestamp: token[6].toString(),
      sellEndTimestamp: token[7].toString(),
    };

    return nft;
  });

  return nfts;
};
