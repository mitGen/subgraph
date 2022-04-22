import { Address } from "@graphprotocol/graph-ts";
import { IERC20Metadata } from "../../generated/Marketplace/IERC20Metadata";

export function fetchName(collectionAddress: Address): string {
  let contract = IERC20Metadata.bind(collectionAddress);

  let name = contract.try_name();
  if (name.reverted) {
    return "unknown";
  }

  return name.value;
}

export function fetchSymbol(collectionAddress: Address): string {
  let contract = IERC20Metadata.bind(collectionAddress);

  let symbol = contract.try_symbol();
  if (symbol.reverted) {
    return "unknown";
  }

  return symbol.value;
}

export function fetchDecimals(collectionAddress: Address): i32 {
  let contract = IERC20Metadata.bind(collectionAddress);

  let decimals = contract.try_decimals();
  if (decimals.reverted) {
    return 0;
  }

  return decimals.value;
}
