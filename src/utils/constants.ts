import { BigInt, BigDecimal, Address } from "@graphprotocol/graph-ts";

export let ZERO_BI = BigInt.fromI32(0);
export let ONE_BI = BigInt.fromI32(1);
export let ZERO_BD = BigDecimal.fromString("0");
export let ONE_BD = BigDecimal.fromString("1");
export let HUNDRED_PERCENT = BigInt.fromI32(100);

export let NAME_NATIVE_TOKEN = "Binance coin";
export let SYMBOL_NATIVE_TOKEN = "BNB";
export let DECIMALS_NATIVE_TOKEN = 18;

export let ZERO_ADDRESS = Address.fromString("0x0000000000000000000000000000000000000000");

export let MARKETPLACE_ADDRESS = Address.fromString("0xB0E70D6DD4615Bd74824552675c521489bC5A7D1");
export let LEXIT_COLLECTION_ADDRESS = Address.fromString("0xB0E70D6DD4615Bd74824552675c521489bC5A7D1");

export enum ORDER_STATUS {
  OPEN,
  EXECUTED,
  CANCELLED,
}
