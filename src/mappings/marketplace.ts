import { CreateOrder, ExecuteOrder, Mint, MintBatch, CancelOrder } from "../../generated/Marketplace/Marketplace";
import { NFT, User, OrderDetails, PaymentToken, Order, Transaction } from "../../generated/schema";
import { getCollection } from "../helpers/collection";
import { getUser } from "../helpers/user";
import {
  fetchDecimals,
  fetchName,
  fetchRoyaltyInfo,
  fetchSymbol,
  fetchTokenURI,
  fetchOrderHash,
  DECIMALS_NATIVE_TOKEN,
  LEXIT_COLLECTION_ADDRESS,
  NAME_NATIVE_TOKEN,
  ONE_BI,
  SYMBOL_NATIVE_TOKEN,
  ZERO_ADDRESS,
  ZERO_BI,
  ORDER_STATUS,
  toBigDecimal,
} from "../utils";

export function handleMint(event: Mint): void {
  let collection = getCollection(LEXIT_COLLECTION_ADDRESS);

  let tokenIdSchema = collection.id + "-" + event.params.tokenId.toString();
  let nft = NFT.load(tokenIdSchema);

  if (nft === null) {
    nft = new NFT(tokenIdSchema);
    nft.collection = collection.id;
    nft.tokenId = event.params.tokenId;
    nft.cid = event.params.cid;
    nft.metadataUrl = fetchTokenURI(LEXIT_COLLECTION_ADDRESS, nft.tokenId);
    nft.creatorAddress = event.transaction.from;
    nft.royaltyReceiver = event.params.royaltyReceiver;
    nft.royaltyFraction = event.params.royaltyFraction;
    nft.totalTrades = ZERO_BI;
    nft.save();
  }
}

export function handleMintBatch(event: MintBatch): void {
  let collection = getCollection(LEXIT_COLLECTION_ADDRESS);

  for (let i = 0; i < event.params.tokenIds.length; i++) {
    let tokenIdSchema = collection.id + "-" + event.params.tokenIds[i].toString();
    let nft = NFT.load(tokenIdSchema);

    if (nft === null) {
      nft = new NFT(tokenIdSchema);
      nft.collection = collection.id;
      nft.tokenId = event.params.tokenIds[i];
      nft.cid = event.params.cids[i];
      nft.metadataUrl = fetchTokenURI(LEXIT_COLLECTION_ADDRESS, nft.tokenId);
      nft.creatorAddress = event.transaction.from;
      nft.royaltyReceiver = event.params.royaltyReceiver;
      nft.royaltyFraction = event.params.royaltyFraction;
      nft.totalTrades = ZERO_BI;
      nft.save();
    }
  }
}

export function handleCreateOrder(event: CreateOrder): void {
  // Order entity saved
  let order = Order.load(event.transaction.hash.toHexString());

  // Order(Ask or Bid) entity saved
  let hashOrder = fetchOrderHash(event.params.param0);

}

export function handleExecuteOrder(event: ExecuteOrder): void {
}

export function handleCancelOrder(event: CancelOrder): void {
}
