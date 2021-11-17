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

export class CollectionCreated extends ethereum.Event {
  get params(): CollectionCreated__Params {
    return new CollectionCreated__Params(this);
  }
}

export class CollectionCreated__Params {
  _event: CollectionCreated;

  constructor(event: CollectionCreated) {
    this._event = event;
  }

  get creator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get ColCode(): string {
    return this._event.parameters[1].value.toString();
  }

  get Colname(): string {
    return this._event.parameters[2].value.toString();
  }

  get ColDescription(): string {
    return this._event.parameters[3].value.toString();
  }

  get ColProperties(): Array<string> {
    return this._event.parameters[4].value.toStringArray();
  }

  get myContract(): Address {
    return this._event.parameters[5].value.toAddress();
  }

  get quantity(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }
}

export class CollectionUpdated extends ethereum.Event {
  get params(): CollectionUpdated__Params {
    return new CollectionUpdated__Params(this);
  }
}

export class CollectionUpdated__Params {
  _event: CollectionUpdated;

  constructor(event: CollectionUpdated) {
    this._event = event;
  }

  get creator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get ColCode(): string {
    return this._event.parameters[1].value.toString();
  }

  get Colname(): string {
    return this._event.parameters[2].value.toString();
  }

  get ColDescription(): string {
    return this._event.parameters[3].value.toString();
  }

  get ColProperties(): Array<string> {
    return this._event.parameters[4].value.toStringArray();
  }

  get myContract(): Address {
    return this._event.parameters[5].value.toAddress();
  }

  get quantity(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }
}

export class BlingMaster__collectionsResult {
  value0: string;
  value1: BigInt;
  value2: string;
  value3: Address;

  constructor(value0: string, value1: BigInt, value2: string, value3: Address) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromString(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromString(this.value2));
    map.set("value3", ethereum.Value.fromAddress(this.value3));
    return map;
  }
}

export class BlingMaster__getCollectionDetailsResult {
  value0: string;
  value1: string;
  value2: Array<string>;
  value3: BigInt;

  constructor(
    value0: string,
    value1: string,
    value2: Array<string>,
    value3: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromString(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    map.set("value2", ethereum.Value.fromStringArray(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    return map;
  }
}

export class BlingMaster extends ethereum.SmartContract {
  static bind(address: Address): BlingMaster {
    return new BlingMaster("BlingMaster", address);
  }

  createCollection(
    _colCode: string,
    _colName: string,
    _colDescription: string,
    _colQuantity: BigInt,
    _colProperties: Array<string>
  ): Address {
    let result = super.call(
      "createCollection",
      "createCollection(string,string,string,uint256,string[]):(address)",
      [
        ethereum.Value.fromString(_colCode),
        ethereum.Value.fromString(_colName),
        ethereum.Value.fromString(_colDescription),
        ethereum.Value.fromUnsignedBigInt(_colQuantity),
        ethereum.Value.fromStringArray(_colProperties)
      ]
    );

    return result[0].toAddress();
  }

  try_createCollection(
    _colCode: string,
    _colName: string,
    _colDescription: string,
    _colQuantity: BigInt,
    _colProperties: Array<string>
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "createCollection",
      "createCollection(string,string,string,uint256,string[]):(address)",
      [
        ethereum.Value.fromString(_colCode),
        ethereum.Value.fromString(_colName),
        ethereum.Value.fromString(_colDescription),
        ethereum.Value.fromUnsignedBigInt(_colQuantity),
        ethereum.Value.fromStringArray(_colProperties)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  collections(param0: Address, param1: string): BlingMaster__collectionsResult {
    let result = super.call(
      "collections",
      "collections(address,string):(string,uint256,string,address)",
      [ethereum.Value.fromAddress(param0), ethereum.Value.fromString(param1)]
    );

    return new BlingMaster__collectionsResult(
      result[0].toString(),
      result[1].toBigInt(),
      result[2].toString(),
      result[3].toAddress()
    );
  }

  try_collections(
    param0: Address,
    param1: string
  ): ethereum.CallResult<BlingMaster__collectionsResult> {
    let result = super.tryCall(
      "collections",
      "collections(address,string):(string,uint256,string,address)",
      [ethereum.Value.fromAddress(param0), ethereum.Value.fromString(param1)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new BlingMaster__collectionsResult(
        value[0].toString(),
        value[1].toBigInt(),
        value[2].toString(),
        value[3].toAddress()
      )
    );
  }

  getCode(param0: Address): string {
    let result = super.call("getCode", "getCode(address):(string)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toString();
  }

  try_getCode(param0: Address): ethereum.CallResult<string> {
    let result = super.tryCall("getCode", "getCode(address):(string)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  getCollection(param0: Address, param1: string): Address {
    let result = super.call(
      "getCollection",
      "getCollection(address,string):(address)",
      [ethereum.Value.fromAddress(param0), ethereum.Value.fromString(param1)]
    );

    return result[0].toAddress();
  }

  try_getCollection(
    param0: Address,
    param1: string
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getCollection",
      "getCollection(address,string):(address)",
      [ethereum.Value.fromAddress(param0), ethereum.Value.fromString(param1)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getCollectionDetails(
    user: Address,
    _code: string
  ): BlingMaster__getCollectionDetailsResult {
    let result = super.call(
      "getCollectionDetails",
      "getCollectionDetails(address,string):(string,string,string[],uint256)",
      [ethereum.Value.fromAddress(user), ethereum.Value.fromString(_code)]
    );

    return new BlingMaster__getCollectionDetailsResult(
      result[0].toString(),
      result[1].toString(),
      result[2].toStringArray(),
      result[3].toBigInt()
    );
  }

  try_getCollectionDetails(
    user: Address,
    _code: string
  ): ethereum.CallResult<BlingMaster__getCollectionDetailsResult> {
    let result = super.tryCall(
      "getCollectionDetails",
      "getCollectionDetails(address,string):(string,string,string[],uint256)",
      [ethereum.Value.fromAddress(user), ethereum.Value.fromString(_code)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new BlingMaster__getCollectionDetailsResult(
        value[0].toString(),
        value[1].toString(),
        value[2].toStringArray(),
        value[3].toBigInt()
      )
    );
  }

  whitelisted(param0: Address): boolean {
    let result = super.call("whitelisted", "whitelisted(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_whitelisted(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("whitelisted", "whitelisted(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class AddWhitelistCall extends ethereum.Call {
  get inputs(): AddWhitelistCall__Inputs {
    return new AddWhitelistCall__Inputs(this);
  }

  get outputs(): AddWhitelistCall__Outputs {
    return new AddWhitelistCall__Outputs(this);
  }
}

export class AddWhitelistCall__Inputs {
  _call: AddWhitelistCall;

  constructor(call: AddWhitelistCall) {
    this._call = call;
  }

  get brands(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }
}

export class AddWhitelistCall__Outputs {
  _call: AddWhitelistCall;

  constructor(call: AddWhitelistCall) {
    this._call = call;
  }
}

export class CreateCollectionCall extends ethereum.Call {
  get inputs(): CreateCollectionCall__Inputs {
    return new CreateCollectionCall__Inputs(this);
  }

  get outputs(): CreateCollectionCall__Outputs {
    return new CreateCollectionCall__Outputs(this);
  }
}

export class CreateCollectionCall__Inputs {
  _call: CreateCollectionCall;

  constructor(call: CreateCollectionCall) {
    this._call = call;
  }

  get _colCode(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _colName(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _colDescription(): string {
    return this._call.inputValues[2].value.toString();
  }

  get _colQuantity(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _colProperties(): Array<string> {
    return this._call.inputValues[4].value.toStringArray();
  }
}

export class CreateCollectionCall__Outputs {
  _call: CreateCollectionCall;

  constructor(call: CreateCollectionCall) {
    this._call = call;
  }

  get collection(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class UpdateCollectionCall extends ethereum.Call {
  get inputs(): UpdateCollectionCall__Inputs {
    return new UpdateCollectionCall__Inputs(this);
  }

  get outputs(): UpdateCollectionCall__Outputs {
    return new UpdateCollectionCall__Outputs(this);
  }
}

export class UpdateCollectionCall__Inputs {
  _call: UpdateCollectionCall;

  constructor(call: UpdateCollectionCall) {
    this._call = call;
  }

  get _colContract(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _colCode(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _colName(): string {
    return this._call.inputValues[2].value.toString();
  }

  get _colDescription(): string {
    return this._call.inputValues[3].value.toString();
  }

  get _colProperties(): Array<string> {
    return this._call.inputValues[4].value.toStringArray();
  }

  get _totalSupply(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }
}

export class UpdateCollectionCall__Outputs {
  _call: UpdateCollectionCall;

  constructor(call: UpdateCollectionCall) {
    this._call = call;
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

  get _treasury(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _nftMarket(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}
