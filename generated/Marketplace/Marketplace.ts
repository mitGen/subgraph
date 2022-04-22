// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class CancelOrder extends ethereum.Event {
  get params(): CancelOrder__Params {
    return new CancelOrder__Params(this);
  }
}

export class CancelOrder__Params {
  _event: CancelOrder;

  constructor(event: CancelOrder) {
    this._event = event;
  }

  get param0(): CancelOrderParam0Struct {
    return changetype<CancelOrderParam0Struct>(
      this._event.parameters[0].value.toTuple()
    );
  }
}

export class CancelOrderParam0Struct extends ethereum.Tuple {
  get seller(): Address {
    return this[0].toAddress();
  }

  get buyer(): Address {
    return this[1].toAddress();
  }

  get nft(): Address {
    return this[2].toAddress();
  }

  get nftId(): BigInt {
    return this[3].toBigInt();
  }

  get token(): Address {
    return this[4].toAddress();
  }

  get price(): BigInt {
    return this[5].toBigInt();
  }

  get start(): BigInt {
    return this[6].toBigInt();
  }

  get end(): BigInt {
    return this[7].toBigInt();
  }

  get salt(): BigInt {
    return this[8].toBigInt();
  }
}

export class CreateOrder extends ethereum.Event {
  get params(): CreateOrder__Params {
    return new CreateOrder__Params(this);
  }
}

export class CreateOrder__Params {
  _event: CreateOrder;

  constructor(event: CreateOrder) {
    this._event = event;
  }

  get param0(): CreateOrderParam0Struct {
    return changetype<CreateOrderParam0Struct>(
      this._event.parameters[0].value.toTuple()
    );
  }
}

export class CreateOrderParam0Struct extends ethereum.Tuple {
  get seller(): Address {
    return this[0].toAddress();
  }

  get buyer(): Address {
    return this[1].toAddress();
  }

  get nft(): Address {
    return this[2].toAddress();
  }

  get nftId(): BigInt {
    return this[3].toBigInt();
  }

  get token(): Address {
    return this[4].toAddress();
  }

  get price(): BigInt {
    return this[5].toBigInt();
  }

  get start(): BigInt {
    return this[6].toBigInt();
  }

  get end(): BigInt {
    return this[7].toBigInt();
  }

  get salt(): BigInt {
    return this[8].toBigInt();
  }
}

export class ExecuteOrder extends ethereum.Event {
  get params(): ExecuteOrder__Params {
    return new ExecuteOrder__Params(this);
  }
}

export class ExecuteOrder__Params {
  _event: ExecuteOrder;

  constructor(event: ExecuteOrder) {
    this._event = event;
  }

  get param0(): ExecuteOrderParam0Struct {
    return changetype<ExecuteOrderParam0Struct>(
      this._event.parameters[0].value.toTuple()
    );
  }
}

export class ExecuteOrderParam0Struct extends ethereum.Tuple {
  get seller(): Address {
    return this[0].toAddress();
  }

  get buyer(): Address {
    return this[1].toAddress();
  }

  get nft(): Address {
    return this[2].toAddress();
  }

  get nftId(): BigInt {
    return this[3].toBigInt();
  }

  get token(): Address {
    return this[4].toAddress();
  }

  get price(): BigInt {
    return this[5].toBigInt();
  }

  get start(): BigInt {
    return this[6].toBigInt();
  }

  get end(): BigInt {
    return this[7].toBigInt();
  }

  get salt(): BigInt {
    return this[8].toBigInt();
  }
}

export class Mint extends ethereum.Event {
  get params(): Mint__Params {
    return new Mint__Params(this);
  }
}

export class Mint__Params {
  _event: Mint;

  constructor(event: Mint) {
    this._event = event;
  }

  get tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get cid(): string {
    return this._event.parameters[1].value.toString();
  }

  get royaltyReceiver(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get royaltyFraction(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class MintBatch extends ethereum.Event {
  get params(): MintBatch__Params {
    return new MintBatch__Params(this);
  }
}

export class MintBatch__Params {
  _event: MintBatch;

  constructor(event: MintBatch) {
    this._event = event;
  }

  get tokenIds(): Array<BigInt> {
    return this._event.parameters[0].value.toBigIntArray();
  }

  get cids(): Array<string> {
    return this._event.parameters[1].value.toStringArray();
  }

  get royaltyReceiver(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get royaltyFraction(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class Paused extends ethereum.Event {
  get params(): Paused__Params {
    return new Paused__Params(this);
  }
}

export class Paused__Params {
  _event: Paused;

  constructor(event: Paused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class RoleAdminChanged extends ethereum.Event {
  get params(): RoleAdminChanged__Params {
    return new RoleAdminChanged__Params(this);
  }
}

export class RoleAdminChanged__Params {
  _event: RoleAdminChanged;

  constructor(event: RoleAdminChanged) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get previousAdminRole(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get newAdminRole(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class RoleGranted extends ethereum.Event {
  get params(): RoleGranted__Params {
    return new RoleGranted__Params(this);
  }
}

export class RoleGranted__Params {
  _event: RoleGranted;

  constructor(event: RoleGranted) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class RoleRevoked extends ethereum.Event {
  get params(): RoleRevoked__Params {
    return new RoleRevoked__Params(this);
  }
}

export class RoleRevoked__Params {
  _event: RoleRevoked;

  constructor(event: RoleRevoked) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class SetBeneficiary extends ethereum.Event {
  get params(): SetBeneficiary__Params {
    return new SetBeneficiary__Params(this);
  }
}

export class SetBeneficiary__Params {
  _event: SetBeneficiary;

  constructor(event: SetBeneficiary) {
    this._event = event;
  }

  get beneficiary(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class SetMarketplaceFee extends ethereum.Event {
  get params(): SetMarketplaceFee__Params {
    return new SetMarketplaceFee__Params(this);
  }
}

export class SetMarketplaceFee__Params {
  _event: SetMarketplaceFee;

  constructor(event: SetMarketplaceFee) {
    this._event = event;
  }

  get fee(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class Unpaused extends ethereum.Event {
  get params(): Unpaused__Params {
    return new Unpaused__Params(this);
  }
}

export class Unpaused__Params {
  _event: Unpaused;

  constructor(event: Unpaused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class UpdateOrder extends ethereum.Event {
  get params(): UpdateOrder__Params {
    return new UpdateOrder__Params(this);
  }
}

export class UpdateOrder__Params {
  _event: UpdateOrder;

  constructor(event: UpdateOrder) {
    this._event = event;
  }

  get param0(): UpdateOrderParam0Struct {
    return changetype<UpdateOrderParam0Struct>(
      this._event.parameters[0].value.toTuple()
    );
  }
}

export class UpdateOrderParam0Struct extends ethereum.Tuple {
  get seller(): Address {
    return this[0].toAddress();
  }

  get buyer(): Address {
    return this[1].toAddress();
  }

  get nft(): Address {
    return this[2].toAddress();
  }

  get nftId(): BigInt {
    return this[3].toBigInt();
  }

  get token(): Address {
    return this[4].toAddress();
  }

  get price(): BigInt {
    return this[5].toBigInt();
  }

  get start(): BigInt {
    return this[6].toBigInt();
  }

  get end(): BigInt {
    return this[7].toBigInt();
  }

  get salt(): BigInt {
    return this[8].toBigInt();
  }
}

export class Marketplace__getOrderResultValue0Struct extends ethereum.Tuple {
  get seller(): Address {
    return this[0].toAddress();
  }

  get buyer(): Address {
    return this[1].toAddress();
  }

  get nft(): Address {
    return this[2].toAddress();
  }

  get nftId(): BigInt {
    return this[3].toBigInt();
  }

  get token(): Address {
    return this[4].toAddress();
  }

  get price(): BigInt {
    return this[5].toBigInt();
  }

  get start(): BigInt {
    return this[6].toBigInt();
  }

  get end(): BigInt {
    return this[7].toBigInt();
  }

  get salt(): BigInt {
    return this[8].toBigInt();
  }
}

export class Marketplace__getOrderInputOrder_Struct extends ethereum.Tuple {
  get seller(): Address {
    return this[0].toAddress();
  }

  get buyer(): Address {
    return this[1].toAddress();
  }

  get nft(): Address {
    return this[2].toAddress();
  }

  get nftId(): BigInt {
    return this[3].toBigInt();
  }

  get token(): Address {
    return this[4].toAddress();
  }

  get price(): BigInt {
    return this[5].toBigInt();
  }

  get start(): BigInt {
    return this[6].toBigInt();
  }

  get end(): BigInt {
    return this[7].toBigInt();
  }

  get salt(): BigInt {
    return this[8].toBigInt();
  }
}

export class Marketplace__getOrderHashInputOrderStruct extends ethereum.Tuple {
  get seller(): Address {
    return this[0].toAddress();
  }

  get buyer(): Address {
    return this[1].toAddress();
  }

  get nft(): Address {
    return this[2].toAddress();
  }

  get nftId(): BigInt {
    return this[3].toBigInt();
  }

  get token(): Address {
    return this[4].toAddress();
  }

  get price(): BigInt {
    return this[5].toBigInt();
  }

  get start(): BigInt {
    return this[6].toBigInt();
  }

  get end(): BigInt {
    return this[7].toBigInt();
  }

  get salt(): BigInt {
    return this[8].toBigInt();
  }
}

export class Marketplace__isOrderActiveInputOrder_Struct extends ethereum.Tuple {
  get seller(): Address {
    return this[0].toAddress();
  }

  get buyer(): Address {
    return this[1].toAddress();
  }

  get nft(): Address {
    return this[2].toAddress();
  }

  get nftId(): BigInt {
    return this[3].toBigInt();
  }

  get token(): Address {
    return this[4].toAddress();
  }

  get price(): BigInt {
    return this[5].toBigInt();
  }

  get start(): BigInt {
    return this[6].toBigInt();
  }

  get end(): BigInt {
    return this[7].toBigInt();
  }

  get salt(): BigInt {
    return this[8].toBigInt();
  }
}

export class Marketplace__isOrderExistInputOrderStruct extends ethereum.Tuple {
  get seller(): Address {
    return this[0].toAddress();
  }

  get buyer(): Address {
    return this[1].toAddress();
  }

  get nft(): Address {
    return this[2].toAddress();
  }

  get nftId(): BigInt {
    return this[3].toBigInt();
  }

  get token(): Address {
    return this[4].toAddress();
  }

  get price(): BigInt {
    return this[5].toBigInt();
  }

  get start(): BigInt {
    return this[6].toBigInt();
  }

  get end(): BigInt {
    return this[7].toBigInt();
  }

  get salt(): BigInt {
    return this[8].toBigInt();
  }
}

export class Marketplace extends ethereum.SmartContract {
  static bind(address: Address): Marketplace {
    return new Marketplace("Marketplace", address);
  }

  ADMIN_ROLE(): Bytes {
    let result = super.call("ADMIN_ROLE", "ADMIN_ROLE():(bytes32)", []);

    return result[0].toBytes();
  }

  try_ADMIN_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("ADMIN_ROLE", "ADMIN_ROLE():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  DEFAULT_ADMIN_ROLE(): Bytes {
    let result = super.call(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_DEFAULT_ADMIN_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  HUNDRED_PERCENT(): BigInt {
    let result = super.call(
      "HUNDRED_PERCENT",
      "HUNDRED_PERCENT():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_HUNDRED_PERCENT(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "HUNDRED_PERCENT",
      "HUNDRED_PERCENT():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  PAUSER_ROLE(): Bytes {
    let result = super.call("PAUSER_ROLE", "PAUSER_ROLE():(bytes32)", []);

    return result[0].toBytes();
  }

  try_PAUSER_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("PAUSER_ROLE", "PAUSER_ROLE():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  beneficiary(): Address {
    let result = super.call("beneficiary", "beneficiary():(address)", []);

    return result[0].toAddress();
  }

  try_beneficiary(): ethereum.CallResult<Address> {
    let result = super.tryCall("beneficiary", "beneficiary():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  collection(): Address {
    let result = super.call("collection", "collection():(address)", []);

    return result[0].toAddress();
  }

  try_collection(): ethereum.CallResult<Address> {
    let result = super.tryCall("collection", "collection():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getOrder(
    order_: Marketplace__getOrderInputOrder_Struct
  ): Marketplace__getOrderResultValue0Struct {
    let result = super.call(
      "getOrder",
      "getOrder((address,address,address,uint256,address,uint256,uint256,uint256,uint256)):((address,address,address,uint256,address,uint256,uint256,uint256,uint256))",
      [ethereum.Value.fromTuple(order_)]
    );

    return changetype<Marketplace__getOrderResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getOrder(
    order_: Marketplace__getOrderInputOrder_Struct
  ): ethereum.CallResult<Marketplace__getOrderResultValue0Struct> {
    let result = super.tryCall(
      "getOrder",
      "getOrder((address,address,address,uint256,address,uint256,uint256,uint256,uint256)):((address,address,address,uint256,address,uint256,uint256,uint256,uint256))",
      [ethereum.Value.fromTuple(order_)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<Marketplace__getOrderResultValue0Struct>(value[0].toTuple())
    );
  }

  getOrderHash(order: Marketplace__getOrderHashInputOrderStruct): Bytes {
    let result = super.call(
      "getOrderHash",
      "getOrderHash((address,address,address,uint256,address,uint256,uint256,uint256,uint256)):(bytes32)",
      [ethereum.Value.fromTuple(order)]
    );

    return result[0].toBytes();
  }

  try_getOrderHash(
    order: Marketplace__getOrderHashInputOrderStruct
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getOrderHash",
      "getOrderHash((address,address,address,uint256,address,uint256,uint256,uint256,uint256)):(bytes32)",
      [ethereum.Value.fromTuple(order)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getRoleAdmin(role: Bytes): Bytes {
    let result = super.call("getRoleAdmin", "getRoleAdmin(bytes32):(bytes32)", [
      ethereum.Value.fromFixedBytes(role)
    ]);

    return result[0].toBytes();
  }

  try_getRoleAdmin(role: Bytes): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getRoleAdmin",
      "getRoleAdmin(bytes32):(bytes32)",
      [ethereum.Value.fromFixedBytes(role)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getRoleMember(role: Bytes, index: BigInt): Address {
    let result = super.call(
      "getRoleMember",
      "getRoleMember(bytes32,uint256):(address)",
      [
        ethereum.Value.fromFixedBytes(role),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );

    return result[0].toAddress();
  }

  try_getRoleMember(role: Bytes, index: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getRoleMember",
      "getRoleMember(bytes32,uint256):(address)",
      [
        ethereum.Value.fromFixedBytes(role),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getRoleMemberCount(role: Bytes): BigInt {
    let result = super.call(
      "getRoleMemberCount",
      "getRoleMemberCount(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(role)]
    );

    return result[0].toBigInt();
  }

  try_getRoleMemberCount(role: Bytes): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getRoleMemberCount",
      "getRoleMemberCount(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(role)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  hasRole(role: Bytes, account: Address): boolean {
    let result = super.call("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBoolean();
  }

  try_hasRole(role: Bytes, account: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isOrderActive(order_: Marketplace__isOrderActiveInputOrder_Struct): boolean {
    let result = super.call(
      "isOrderActive",
      "isOrderActive((address,address,address,uint256,address,uint256,uint256,uint256,uint256)):(bool)",
      [ethereum.Value.fromTuple(order_)]
    );

    return result[0].toBoolean();
  }

  try_isOrderActive(
    order_: Marketplace__isOrderActiveInputOrder_Struct
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isOrderActive",
      "isOrderActive((address,address,address,uint256,address,uint256,uint256,uint256,uint256)):(bool)",
      [ethereum.Value.fromTuple(order_)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isOrderExist(order: Marketplace__isOrderExistInputOrderStruct): boolean {
    let result = super.call(
      "isOrderExist",
      "isOrderExist((address,address,address,uint256,address,uint256,uint256,uint256,uint256)):(bool)",
      [ethereum.Value.fromTuple(order)]
    );

    return result[0].toBoolean();
  }

  try_isOrderExist(
    order: Marketplace__isOrderExistInputOrderStruct
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isOrderExist",
      "isOrderExist((address,address,address,uint256,address,uint256,uint256,uint256,uint256)):(bool)",
      [ethereum.Value.fromTuple(order)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  marketplaceFee(): BigInt {
    let result = super.call("marketplaceFee", "marketplaceFee():(uint256)", []);

    return result[0].toBigInt();
  }

  try_marketplaceFee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "marketplaceFee",
      "marketplaceFee():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  paused(): boolean {
    let result = super.call("paused", "paused():(bool)", []);

    return result[0].toBoolean();
  }

  try_paused(): ethereum.CallResult<boolean> {
    let result = super.tryCall("paused", "paused():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  timestamp(): BigInt {
    let result = super.call("timestamp", "timestamp():(uint256)", []);

    return result[0].toBigInt();
  }

  try_timestamp(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("timestamp", "timestamp():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get collection_(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get beneficiary_(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get marketplaceFee_(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CancelAskCall extends ethereum.Call {
  get inputs(): CancelAskCall__Inputs {
    return new CancelAskCall__Inputs(this);
  }

  get outputs(): CancelAskCall__Outputs {
    return new CancelAskCall__Outputs(this);
  }
}

export class CancelAskCall__Inputs {
  _call: CancelAskCall;

  constructor(call: CancelAskCall) {
    this._call = call;
  }

  get order_(): CancelAskCallOrder_Struct {
    return changetype<CancelAskCallOrder_Struct>(
      this._call.inputValues[0].value.toTuple()
    );
  }
}

export class CancelAskCall__Outputs {
  _call: CancelAskCall;

  constructor(call: CancelAskCall) {
    this._call = call;
  }
}

export class CancelAskCallOrder_Struct extends ethereum.Tuple {
  get seller(): Address {
    return this[0].toAddress();
  }

  get buyer(): Address {
    return this[1].toAddress();
  }

  get nft(): Address {
    return this[2].toAddress();
  }

  get nftId(): BigInt {
    return this[3].toBigInt();
  }

  get token(): Address {
    return this[4].toAddress();
  }

  get price(): BigInt {
    return this[5].toBigInt();
  }

  get start(): BigInt {
    return this[6].toBigInt();
  }

  get end(): BigInt {
    return this[7].toBigInt();
  }

  get salt(): BigInt {
    return this[8].toBigInt();
  }
}

export class CancelBidCall extends ethereum.Call {
  get inputs(): CancelBidCall__Inputs {
    return new CancelBidCall__Inputs(this);
  }

  get outputs(): CancelBidCall__Outputs {
    return new CancelBidCall__Outputs(this);
  }
}

export class CancelBidCall__Inputs {
  _call: CancelBidCall;

  constructor(call: CancelBidCall) {
    this._call = call;
  }

  get order_(): CancelBidCallOrder_Struct {
    return changetype<CancelBidCallOrder_Struct>(
      this._call.inputValues[0].value.toTuple()
    );
  }
}

export class CancelBidCall__Outputs {
  _call: CancelBidCall;

  constructor(call: CancelBidCall) {
    this._call = call;
  }
}

export class CancelBidCallOrder_Struct extends ethereum.Tuple {
  get seller(): Address {
    return this[0].toAddress();
  }

  get buyer(): Address {
    return this[1].toAddress();
  }

  get nft(): Address {
    return this[2].toAddress();
  }

  get nftId(): BigInt {
    return this[3].toBigInt();
  }

  get token(): Address {
    return this[4].toAddress();
  }

  get price(): BigInt {
    return this[5].toBigInt();
  }

  get start(): BigInt {
    return this[6].toBigInt();
  }

  get end(): BigInt {
    return this[7].toBigInt();
  }

  get salt(): BigInt {
    return this[8].toBigInt();
  }
}

export class CreateAskCall extends ethereum.Call {
  get inputs(): CreateAskCall__Inputs {
    return new CreateAskCall__Inputs(this);
  }

  get outputs(): CreateAskCall__Outputs {
    return new CreateAskCall__Outputs(this);
  }
}

export class CreateAskCall__Inputs {
  _call: CreateAskCall;

  constructor(call: CreateAskCall) {
    this._call = call;
  }

  get order(): CreateAskCallOrderStruct {
    return changetype<CreateAskCallOrderStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }
}

export class CreateAskCall__Outputs {
  _call: CreateAskCall;

  constructor(call: CreateAskCall) {
    this._call = call;
  }
}

export class CreateAskCallOrderStruct extends ethereum.Tuple {
  get seller(): Address {
    return this[0].toAddress();
  }

  get buyer(): Address {
    return this[1].toAddress();
  }

  get nft(): Address {
    return this[2].toAddress();
  }

  get nftId(): BigInt {
    return this[3].toBigInt();
  }

  get token(): Address {
    return this[4].toAddress();
  }

  get price(): BigInt {
    return this[5].toBigInt();
  }

  get start(): BigInt {
    return this[6].toBigInt();
  }

  get end(): BigInt {
    return this[7].toBigInt();
  }

  get salt(): BigInt {
    return this[8].toBigInt();
  }
}

export class CreateBidCall extends ethereum.Call {
  get inputs(): CreateBidCall__Inputs {
    return new CreateBidCall__Inputs(this);
  }

  get outputs(): CreateBidCall__Outputs {
    return new CreateBidCall__Outputs(this);
  }
}

export class CreateBidCall__Inputs {
  _call: CreateBidCall;

  constructor(call: CreateBidCall) {
    this._call = call;
  }

  get order(): CreateBidCallOrderStruct {
    return changetype<CreateBidCallOrderStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }
}

export class CreateBidCall__Outputs {
  _call: CreateBidCall;

  constructor(call: CreateBidCall) {
    this._call = call;
  }
}

export class CreateBidCallOrderStruct extends ethereum.Tuple {
  get seller(): Address {
    return this[0].toAddress();
  }

  get buyer(): Address {
    return this[1].toAddress();
  }

  get nft(): Address {
    return this[2].toAddress();
  }

  get nftId(): BigInt {
    return this[3].toBigInt();
  }

  get token(): Address {
    return this[4].toAddress();
  }

  get price(): BigInt {
    return this[5].toBigInt();
  }

  get start(): BigInt {
    return this[6].toBigInt();
  }

  get end(): BigInt {
    return this[7].toBigInt();
  }

  get salt(): BigInt {
    return this[8].toBigInt();
  }
}

export class ExecuteAskCall extends ethereum.Call {
  get inputs(): ExecuteAskCall__Inputs {
    return new ExecuteAskCall__Inputs(this);
  }

  get outputs(): ExecuteAskCall__Outputs {
    return new ExecuteAskCall__Outputs(this);
  }
}

export class ExecuteAskCall__Inputs {
  _call: ExecuteAskCall;

  constructor(call: ExecuteAskCall) {
    this._call = call;
  }

  get order_(): ExecuteAskCallOrder_Struct {
    return changetype<ExecuteAskCallOrder_Struct>(
      this._call.inputValues[0].value.toTuple()
    );
  }
}

export class ExecuteAskCall__Outputs {
  _call: ExecuteAskCall;

  constructor(call: ExecuteAskCall) {
    this._call = call;
  }
}

export class ExecuteAskCallOrder_Struct extends ethereum.Tuple {
  get seller(): Address {
    return this[0].toAddress();
  }

  get buyer(): Address {
    return this[1].toAddress();
  }

  get nft(): Address {
    return this[2].toAddress();
  }

  get nftId(): BigInt {
    return this[3].toBigInt();
  }

  get token(): Address {
    return this[4].toAddress();
  }

  get price(): BigInt {
    return this[5].toBigInt();
  }

  get start(): BigInt {
    return this[6].toBigInt();
  }

  get end(): BigInt {
    return this[7].toBigInt();
  }

  get salt(): BigInt {
    return this[8].toBigInt();
  }
}

export class ExecuteBidCall extends ethereum.Call {
  get inputs(): ExecuteBidCall__Inputs {
    return new ExecuteBidCall__Inputs(this);
  }

  get outputs(): ExecuteBidCall__Outputs {
    return new ExecuteBidCall__Outputs(this);
  }
}

export class ExecuteBidCall__Inputs {
  _call: ExecuteBidCall;

  constructor(call: ExecuteBidCall) {
    this._call = call;
  }

  get order_(): ExecuteBidCallOrder_Struct {
    return changetype<ExecuteBidCallOrder_Struct>(
      this._call.inputValues[0].value.toTuple()
    );
  }
}

export class ExecuteBidCall__Outputs {
  _call: ExecuteBidCall;

  constructor(call: ExecuteBidCall) {
    this._call = call;
  }
}

export class ExecuteBidCallOrder_Struct extends ethereum.Tuple {
  get seller(): Address {
    return this[0].toAddress();
  }

  get buyer(): Address {
    return this[1].toAddress();
  }

  get nft(): Address {
    return this[2].toAddress();
  }

  get nftId(): BigInt {
    return this[3].toBigInt();
  }

  get token(): Address {
    return this[4].toAddress();
  }

  get price(): BigInt {
    return this[5].toBigInt();
  }

  get start(): BigInt {
    return this[6].toBigInt();
  }

  get end(): BigInt {
    return this[7].toBigInt();
  }

  get salt(): BigInt {
    return this[8].toBigInt();
  }
}

export class GrantRoleCall extends ethereum.Call {
  get inputs(): GrantRoleCall__Inputs {
    return new GrantRoleCall__Inputs(this);
  }

  get outputs(): GrantRoleCall__Outputs {
    return new GrantRoleCall__Outputs(this);
  }
}

export class GrantRoleCall__Inputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class GrantRoleCall__Outputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }
}

export class MintCall extends ethereum.Call {
  get inputs(): MintCall__Inputs {
    return new MintCall__Inputs(this);
  }

  get outputs(): MintCall__Outputs {
    return new MintCall__Outputs(this);
  }
}

export class MintCall__Inputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get cid(): string {
    return this._call.inputValues[1].value.toString();
  }

  get royaltyReceiver(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get royaltyFraction(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class MintCall__Outputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }
}

export class MintBatchCall extends ethereum.Call {
  get inputs(): MintBatchCall__Inputs {
    return new MintBatchCall__Inputs(this);
  }

  get outputs(): MintBatchCall__Outputs {
    return new MintBatchCall__Outputs(this);
  }
}

export class MintBatchCall__Inputs {
  _call: MintBatchCall;

  constructor(call: MintBatchCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get cids(): Array<string> {
    return this._call.inputValues[1].value.toStringArray();
  }

  get royaltyReceiver(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get royaltyFraction(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class MintBatchCall__Outputs {
  _call: MintBatchCall;

  constructor(call: MintBatchCall) {
    this._call = call;
  }
}

export class PauseCall extends ethereum.Call {
  get inputs(): PauseCall__Inputs {
    return new PauseCall__Inputs(this);
  }

  get outputs(): PauseCall__Outputs {
    return new PauseCall__Outputs(this);
  }
}

export class PauseCall__Inputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class PauseCall__Outputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class RenounceRoleCall extends ethereum.Call {
  get inputs(): RenounceRoleCall__Inputs {
    return new RenounceRoleCall__Inputs(this);
  }

  get outputs(): RenounceRoleCall__Outputs {
    return new RenounceRoleCall__Outputs(this);
  }
}

export class RenounceRoleCall__Inputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RenounceRoleCall__Outputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }
}

export class RevokeRoleCall extends ethereum.Call {
  get inputs(): RevokeRoleCall__Inputs {
    return new RevokeRoleCall__Inputs(this);
  }

  get outputs(): RevokeRoleCall__Outputs {
    return new RevokeRoleCall__Outputs(this);
  }
}

export class RevokeRoleCall__Inputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RevokeRoleCall__Outputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }
}

export class SetBeneficiaryCall extends ethereum.Call {
  get inputs(): SetBeneficiaryCall__Inputs {
    return new SetBeneficiaryCall__Inputs(this);
  }

  get outputs(): SetBeneficiaryCall__Outputs {
    return new SetBeneficiaryCall__Outputs(this);
  }
}

export class SetBeneficiaryCall__Inputs {
  _call: SetBeneficiaryCall;

  constructor(call: SetBeneficiaryCall) {
    this._call = call;
  }

  get beneficiary_(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetBeneficiaryCall__Outputs {
  _call: SetBeneficiaryCall;

  constructor(call: SetBeneficiaryCall) {
    this._call = call;
  }
}

export class SetMearketplaceFeeCall extends ethereum.Call {
  get inputs(): SetMearketplaceFeeCall__Inputs {
    return new SetMearketplaceFeeCall__Inputs(this);
  }

  get outputs(): SetMearketplaceFeeCall__Outputs {
    return new SetMearketplaceFeeCall__Outputs(this);
  }
}

export class SetMearketplaceFeeCall__Inputs {
  _call: SetMearketplaceFeeCall;

  constructor(call: SetMearketplaceFeeCall) {
    this._call = call;
  }

  get fee(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetMearketplaceFeeCall__Outputs {
  _call: SetMearketplaceFeeCall;

  constructor(call: SetMearketplaceFeeCall) {
    this._call = call;
  }
}

export class UnpauseCall extends ethereum.Call {
  get inputs(): UnpauseCall__Inputs {
    return new UnpauseCall__Inputs(this);
  }

  get outputs(): UnpauseCall__Outputs {
    return new UnpauseCall__Outputs(this);
  }
}

export class UnpauseCall__Inputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}

export class UnpauseCall__Outputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}

export class UpdateOrderCall extends ethereum.Call {
  get inputs(): UpdateOrderCall__Inputs {
    return new UpdateOrderCall__Inputs(this);
  }

  get outputs(): UpdateOrderCall__Outputs {
    return new UpdateOrderCall__Outputs(this);
  }
}

export class UpdateOrderCall__Inputs {
  _call: UpdateOrderCall;

  constructor(call: UpdateOrderCall) {
    this._call = call;
  }

  get oldOrder(): UpdateOrderCallOldOrderStruct {
    return changetype<UpdateOrderCallOldOrderStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }

  get newOrder(): UpdateOrderCallNewOrderStruct {
    return changetype<UpdateOrderCallNewOrderStruct>(
      this._call.inputValues[1].value.toTuple()
    );
  }
}

export class UpdateOrderCall__Outputs {
  _call: UpdateOrderCall;

  constructor(call: UpdateOrderCall) {
    this._call = call;
  }
}

export class UpdateOrderCallOldOrderStruct extends ethereum.Tuple {
  get seller(): Address {
    return this[0].toAddress();
  }

  get buyer(): Address {
    return this[1].toAddress();
  }

  get nft(): Address {
    return this[2].toAddress();
  }

  get nftId(): BigInt {
    return this[3].toBigInt();
  }

  get token(): Address {
    return this[4].toAddress();
  }

  get price(): BigInt {
    return this[5].toBigInt();
  }

  get start(): BigInt {
    return this[6].toBigInt();
  }

  get end(): BigInt {
    return this[7].toBigInt();
  }

  get salt(): BigInt {
    return this[8].toBigInt();
  }
}

export class UpdateOrderCallNewOrderStruct extends ethereum.Tuple {
  get seller(): Address {
    return this[0].toAddress();
  }

  get buyer(): Address {
    return this[1].toAddress();
  }

  get nft(): Address {
    return this[2].toAddress();
  }

  get nftId(): BigInt {
    return this[3].toBigInt();
  }

  get token(): Address {
    return this[4].toAddress();
  }

  get price(): BigInt {
    return this[5].toBigInt();
  }

  get start(): BigInt {
    return this[6].toBigInt();
  }

  get end(): BigInt {
    return this[7].toBigInt();
  }

  get salt(): BigInt {
    return this[8].toBigInt();
  }
}
