import { Address, BigInt, ethereum } from "@graphprotocol/graph-ts";
import { IERC721Metadata } from "../../generated/Marketplace/IERC721Metadata";
import { HUNDRED_PERCENT, ZERO_ADDRESS, ZERO_BI } from "./constants";
import { LexitCollection, LexitCollection__royaltyInfoResult } from "../../generated/Marketplace/LexitCollection";

export function fetchNameNft(collectionAddress: Address): string {
  let contract = IERC721Metadata.bind(collectionAddress);

  let name = contract.try_name();
  if (name.reverted) {
    return "unknown";
  }

  return name.value;
}

export function fetchSymbolNft(collectionAddress: Address): string {
  let contract = IERC721Metadata.bind(collectionAddress);

  let symbol = contract.try_symbol();
  if (symbol.reverted) {
    return "unknown";
  }

  return symbol.value;
}

export function fetchTokenURI(collectionAddress: Address, tokenId: BigInt): string {
  let contract = IERC721Metadata.bind(collectionAddress);

  let tokenURI = contract.try_tokenURI(tokenId);
  if (tokenURI.reverted) {
    return "unknown";
  }

  return tokenURI.value;
}

export function fetchRoyaltyInfo(
  collectionAddress: Address,
  tokenId: BigInt
): ethereum.CallResult<LexitCollection__royaltyInfoResult> {
  let contract = LexitCollection.bind(collectionAddress);

  let royaltyInfo = contract.try_royaltyInfo(tokenId, HUNDRED_PERCENT);
  if (royaltyInfo.reverted) {
    royaltyInfo.value.value0 = ZERO_ADDRESS;
    royaltyInfo.value.value1 = ZERO_BI;
    return royaltyInfo;
  }

  return royaltyInfo;
}
