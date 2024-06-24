import toast from "react-hot-toast";

export const mintNFT =
  (data, tokenURI, nftContract, businessContract) =>
  async (dispatch, getState) => {
    try {
      let res = await nftContract.mintNFT(tokenURI, data.numberOfEditions);
      console.log({ res });
      let receipt = await res.wait();
      console.log({ receipt });

      res = await nftContract.getTokenId();
      const currentTokenId = res;
      console.log({ currentTokenId });

      // setApprovalToBusinessContract
      await (
        await nftContract.setApprovalForAll(businessContract.target, true)
      ).wait();

      res = await businessContract.saveAndTransferTokensToBusinessContract(
        data.price,
        tokenURI,
        data.sellStartTimestamp,
        data.sellEndTimestamp,
        nftContract.target,
        Number(currentTokenId) - data.numberOfEditions,
        data.numberOfEditions
      );
      console.log({ res });
      receipt = await res.wait();
      console.log({ receipt });
      toast.success("NFT minted successfully");
    } catch (err) {
      console.log({ err });
    }
  };
