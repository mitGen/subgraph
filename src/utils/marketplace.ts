import { ethereum, crypto } from "@graphprotocol/graph-ts";
import { MARKETPLACE_ADDRESS, ZERO_ADDRESS } from "./constants";
import { Marketplace, Marketplace__getOrderHashInputOrderStruct } from "../../generated/Marketplace/Marketplace";

export function fetchOrderHash<T extends Marketplace__getOrderHashInputOrderStruct>(order: T): string {
  let contract = Marketplace.bind(MARKETPLACE_ADDRESS);
  // let tupple = new Marketplace__getOrderHashInputOrderStruct(2);
  // 0xec56a0cd01088566ed17e2d525c22efdc9d7cb8cc2880b9d4a55fb3c359c55e6

  // let params: Array<ethereum.Value> = [
  //   ethereum.Value.fromAddress(order.seller),
  //   ethereum.Value.fromAddress(order.buyer),
  //   ethereum.Value.fromAddress(order.nft),
  //   ethereum.Value.fromUnsignedBigInt(order.nftId),
  //   ethereum.Value.fromAddress(order.token),
  //   ethereum.Value.fromUnsignedBigInt(order.price),
  //   ethereum.Value.fromUnsignedBigInt(order.start),
  //   ethereum.Value.fromUnsignedBigInt(order.end),
  //   ethereum.Value.fromUnsignedBigInt(order.salt),
  // ];

  // let marketplaceStruct = new Marketplace__getOrderHashInputOrderStruct(
  //   [
  //     ethereum.Value.fromAddress(order.seller),
  //     ethereum.Value.fromAddress(order.buyer),
  //     ethereum.Value.fromAddress(order.nft),
  //     ethereum.Value.fromUnsignedBigInt(order.nftId),
  //     ethereum.Value.fromAddress(order.token),
  //     ethereum.Value.fromUnsignedBigInt(order.price),
  //     ethereum.Value.fromUnsignedBigInt(order.start),
  //     ethereum.Value.fromUnsignedBigInt(order.end),
  //     ethereum.Value.fromUnsignedBigInt(order.salt)
  //   ]
  // )

  let hash = contract.try_getOrderHash([
    ethereum.Value.fromAddress(order.seller),
    ethereum.Value.fromAddress(order.buyer),
    ethereum.Value.fromAddress(order.nft),
    ethereum.Value.fromUnsignedBigInt(order.nftId),
    ethereum.Value.fromAddress(order.token),
    ethereum.Value.fromUnsignedBigInt(order.price),
    ethereum.Value.fromUnsignedBigInt(order.start),
    ethereum.Value.fromUnsignedBigInt(order.end),
    ethereum.Value.fromUnsignedBigInt(order.salt),
  ] as Marketplace__getOrderHashInputOrderStruct);

  if (hash.reverted) {
    return "unknown";
  }

  return hash.value.toHexString();
}
