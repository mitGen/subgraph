import { Address } from "@graphprotocol/graph-ts";
import { Collection } from "../../generated/schema";
import { fetchNameNft, fetchSymbolNft } from "../utils/erc721";
import { ZERO_BI } from "../utils/constants";

export function getCollection(address: Address): Collection {
  let collection = Collection.load(address.toHexString());

  if (collection === null) {
    collection = new Collection(address.toHexString());
    collection.name = fetchNameNft(address);
    collection.symbol = fetchSymbolNft(address);
    collection.totalTrades = ZERO_BI;
    collection.numberTokensListed = ZERO_BI;
    collection.save();
  }

  return collection;
}
