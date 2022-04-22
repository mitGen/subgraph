import { Address } from "@graphprotocol/graph-ts";
import { User } from "../../generated/schema";
import { ZERO_BI, ONE_BI } from "../utils/constants";

export function getUser(address: Address, isSeller: boolean): User {
  let user = User.load(address.toHexString());

  if (user === null) {
    user = new User(address.toHexString());
    user.numberTokensListed = ZERO_BI;
    user.numberTokensPurchased = ZERO_BI;
    user.numberTokensSold = ZERO_BI;
  }

  if (isSeller) {
    user.numberTokensSold = user.numberTokensSold.plus(ONE_BI);
  } else {
    user.numberTokensPurchased = user.numberTokensPurchased.plus(ONE_BI);
  }
  user.save();

  return user;
}
