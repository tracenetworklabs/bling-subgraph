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

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get approved(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class BaseURIUpdated extends ethereum.Event {
  get params(): BaseURIUpdated__Params {
    return new BaseURIUpdated__Params(this);
  }
}

export class BaseURIUpdated__Params {
  _event: BaseURIUpdated;

  constructor(event: BaseURIUpdated) {
    this._event = event;
  }

  get baseURI(): string {
    return this._event.parameters[0].value.toString();
  }
}

export class Minted extends ethereum.Event {
  get params(): Minted__Params {
    return new Minted__Params(this);
  }
}

export class Minted__Params {
  _event: Minted;

  constructor(event: Minted) {
    this._event = event;
  }

  get creator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get indexedTokenIPFSPath(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get tokenIPFSPath(): string {
    return this._event.parameters[3].value.toString();
  }
}

export class NFTMarketUpdated extends ethereum.Event {
  get params(): NFTMarketUpdated__Params {
    return new NFTMarketUpdated__Params(this);
  }
}

export class NFTMarketUpdated__Params {
  _event: NFTMarketUpdated;

  constructor(event: NFTMarketUpdated) {
    this._event = event;
  }

  get nftMarket(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class NFTMetadataUpdated extends ethereum.Event {
  get params(): NFTMetadataUpdated__Params {
    return new NFTMetadataUpdated__Params(this);
  }
}

export class NFTMetadataUpdated__Params {
  _event: NFTMetadataUpdated;

  constructor(event: NFTMetadataUpdated) {
    this._event = event;
  }

  get name(): string {
    return this._event.parameters[0].value.toString();
  }

  get symbol(): string {
    return this._event.parameters[1].value.toString();
  }

  get baseURI(): string {
    return this._event.parameters[2].value.toString();
  }
}

export class TokenCreatorPaymentAddressSet extends ethereum.Event {
  get params(): TokenCreatorPaymentAddressSet__Params {
    return new TokenCreatorPaymentAddressSet__Params(this);
  }
}

export class TokenCreatorPaymentAddressSet__Params {
  _event: TokenCreatorPaymentAddressSet;

  constructor(event: TokenCreatorPaymentAddressSet) {
    this._event = event;
  }

  get fromPaymentAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get toPaymentAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class TokenCreatorUpdated extends ethereum.Event {
  get params(): TokenCreatorUpdated__Params {
    return new TokenCreatorUpdated__Params(this);
  }
}

export class TokenCreatorUpdated__Params {
  _event: TokenCreatorUpdated;

  constructor(event: TokenCreatorUpdated) {
    this._event = event;
  }

  get fromCreator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get toCreator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class TokenIPFSPathUpdated extends ethereum.Event {
  get params(): TokenIPFSPathUpdated__Params {
    return new TokenIPFSPathUpdated__Params(this);
  }
}

export class TokenIPFSPathUpdated__Params {
  _event: TokenIPFSPathUpdated;

  constructor(event: TokenIPFSPathUpdated) {
    this._event = event;
  }

  get tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get indexedTokenIPFSPath(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get tokenIPFSPath(): string {
    return this._event.parameters[2].value.toString();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Updated extends ethereum.Event {
  get params(): Updated__Params {
    return new Updated__Params(this);
  }
}

export class Updated__Params {
  _event: Updated;

  constructor(event: Updated) {
    this._event = event;
  }

  get creator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get indexedTokenIPFSPath(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get tokenIPFSPath(): string {
    return this._event.parameters[3].value.toString();
  }
}

export class Collection__getFeesResult {
  value0: Array<Address>;
  value1: Array<BigInt>;

  constructor(value0: Array<Address>, value1: Array<BigInt>) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddressArray(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigIntArray(this.value1));
    return map;
  }
}

export class Collection extends ethereum.SmartContract {
  static bind(address: Address): Collection {
    return new Collection("Collection", address);
  }

  balanceOf(owner: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(owner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  baseURI(): string {
    let result = super.call("baseURI", "baseURI():(string)", []);

    return result[0].toString();
  }

  try_baseURI(): ethereum.CallResult<string> {
    let result = super.tryCall("baseURI", "baseURI():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  blingMaster(): Address {
    let result = super.call("blingMaster", "blingMaster():(address)", []);

    return result[0].toAddress();
  }

  try_blingMaster(): ethereum.CallResult<Address> {
    let result = super.tryCall("blingMaster", "blingMaster():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getApproved(tokenId: BigInt): Address {
    let result = super.call("getApproved", "getApproved(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_getApproved(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getApproved",
      "getApproved(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getFeeBps(param0: BigInt): Array<BigInt> {
    let result = super.call("getFeeBps", "getFeeBps(uint256):(uint256[])", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toBigIntArray();
  }

  try_getFeeBps(param0: BigInt): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall("getFeeBps", "getFeeBps(uint256):(uint256[])", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  getFeeRecipients(id: BigInt): Array<Address> {
    let result = super.call(
      "getFeeRecipients",
      "getFeeRecipients(uint256):(address[])",
      [ethereum.Value.fromUnsignedBigInt(id)]
    );

    return result[0].toAddressArray();
  }

  try_getFeeRecipients(id: BigInt): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "getFeeRecipients",
      "getFeeRecipients(uint256):(address[])",
      [ethereum.Value.fromUnsignedBigInt(id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  getFees(tokenId: BigInt): Collection__getFeesResult {
    let result = super.call(
      "getFees",
      "getFees(uint256):(address[2],uint256[2])",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );

    return new Collection__getFeesResult(
      result[0].toAddressArray(),
      result[1].toBigIntArray()
    );
  }

  try_getFees(tokenId: BigInt): ethereum.CallResult<Collection__getFeesResult> {
    let result = super.tryCall(
      "getFees",
      "getFees(uint256):(address[2],uint256[2])",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Collection__getFeesResult(
        value[0].toAddressArray(),
        value[1].toBigIntArray()
      )
    );
  }

  getFoundationTreasury(): Address {
    let result = super.call(
      "getFoundationTreasury",
      "getFoundationTreasury():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_getFoundationTreasury(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getFoundationTreasury",
      "getFoundationTreasury():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getHasCreatorMintedIPFSHash(
    creator: Address,
    tokenIPFSPath: string
  ): boolean {
    let result = super.call(
      "getHasCreatorMintedIPFSHash",
      "getHasCreatorMintedIPFSHash(address,string):(bool)",
      [
        ethereum.Value.fromAddress(creator),
        ethereum.Value.fromString(tokenIPFSPath)
      ]
    );

    return result[0].toBoolean();
  }

  try_getHasCreatorMintedIPFSHash(
    creator: Address,
    tokenIPFSPath: string
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "getHasCreatorMintedIPFSHash",
      "getHasCreatorMintedIPFSHash(address,string):(bool)",
      [
        ethereum.Value.fromAddress(creator),
        ethereum.Value.fromString(tokenIPFSPath)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getNFTMarket(): Address {
    let result = super.call("getNFTMarket", "getNFTMarket():(address)", []);

    return result[0].toAddress();
  }

  try_getNFTMarket(): ethereum.CallResult<Address> {
    let result = super.tryCall("getNFTMarket", "getNFTMarket():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getNextTokenId(): BigInt {
    let result = super.call("getNextTokenId", "getNextTokenId():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getNextTokenId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getNextTokenId",
      "getNextTokenId():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getTokenCreatorPaymentAddress(tokenId: BigInt): Address {
    let result = super.call(
      "getTokenCreatorPaymentAddress",
      "getTokenCreatorPaymentAddress(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );

    return result[0].toAddress();
  }

  try_getTokenCreatorPaymentAddress(
    tokenId: BigInt
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getTokenCreatorPaymentAddress",
      "getTokenCreatorPaymentAddress(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getTokenIPFSPath(tokenId: BigInt): string {
    let result = super.call(
      "getTokenIPFSPath",
      "getTokenIPFSPath(uint256):(string)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );

    return result[0].toString();
  }

  try_getTokenIPFSPath(tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall(
      "getTokenIPFSPath",
      "getTokenIPFSPath(uint256):(string)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  isApprovedForAll(owner: Address, operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    owner: Address,
    operator: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  mint(tokenIPFSPath: string): BigInt {
    let result = super.call("mint", "mint(string):(uint256)", [
      ethereum.Value.fromString(tokenIPFSPath)
    ]);

    return result[0].toBigInt();
  }

  try_mint(tokenIPFSPath: string): ethereum.CallResult<BigInt> {
    let result = super.tryCall("mint", "mint(string):(uint256)", [
      ethereum.Value.fromString(tokenIPFSPath)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  mintWithCreatorPaymentAddress(
    tokenIPFSPath: string,
    tokenCreatorPaymentAddress: Address
  ): BigInt {
    let result = super.call(
      "mintWithCreatorPaymentAddress",
      "mintWithCreatorPaymentAddress(string,address):(uint256)",
      [
        ethereum.Value.fromString(tokenIPFSPath),
        ethereum.Value.fromAddress(tokenCreatorPaymentAddress)
      ]
    );

    return result[0].toBigInt();
  }

  try_mintWithCreatorPaymentAddress(
    tokenIPFSPath: string,
    tokenCreatorPaymentAddress: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "mintWithCreatorPaymentAddress",
      "mintWithCreatorPaymentAddress(string,address):(uint256)",
      [
        ethereum.Value.fromString(tokenIPFSPath),
        ethereum.Value.fromAddress(tokenCreatorPaymentAddress)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  mintWithCreatorPaymentFactory(
    tokenIPFSPath: string,
    paymentAddressFactory: Address,
    paymentAddressCallData: Bytes
  ): BigInt {
    let result = super.call(
      "mintWithCreatorPaymentFactory",
      "mintWithCreatorPaymentFactory(string,address,bytes):(uint256)",
      [
        ethereum.Value.fromString(tokenIPFSPath),
        ethereum.Value.fromAddress(paymentAddressFactory),
        ethereum.Value.fromBytes(paymentAddressCallData)
      ]
    );

    return result[0].toBigInt();
  }

  try_mintWithCreatorPaymentFactory(
    tokenIPFSPath: string,
    paymentAddressFactory: Address,
    paymentAddressCallData: Bytes
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "mintWithCreatorPaymentFactory",
      "mintWithCreatorPaymentFactory(string,address,bytes):(uint256)",
      [
        ethereum.Value.fromString(tokenIPFSPath),
        ethereum.Value.fromAddress(paymentAddressFactory),
        ethereum.Value.fromBytes(paymentAddressCallData)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  ownerOf(tokenId: BigInt): Address {
    let result = super.call("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_ownerOf(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
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

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  tokenByIndex(index: BigInt): BigInt {
    let result = super.call("tokenByIndex", "tokenByIndex(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(index)
    ]);

    return result[0].toBigInt();
  }

  try_tokenByIndex(index: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenByIndex",
      "tokenByIndex(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(index)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenCreator(tokenId: BigInt): Address {
    let result = super.call("tokenCreator", "tokenCreator(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_tokenCreator(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "tokenCreator",
      "tokenCreator(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  tokenOfOwnerByIndex(owner: Address, index: BigInt): BigInt {
    let result = super.call(
      "tokenOfOwnerByIndex",
      "tokenOfOwnerByIndex(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(owner),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );

    return result[0].toBigInt();
  }

  try_tokenOfOwnerByIndex(
    owner: Address,
    index: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenOfOwnerByIndex",
      "tokenOfOwnerByIndex(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(owner),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenURI(tokenId: BigInt): string {
    let result = super.call("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toString();
  }

  try_tokenURI(tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
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
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AdminUpdateConfigCall extends ethereum.Call {
  get inputs(): AdminUpdateConfigCall__Inputs {
    return new AdminUpdateConfigCall__Inputs(this);
  }

  get outputs(): AdminUpdateConfigCall__Outputs {
    return new AdminUpdateConfigCall__Outputs(this);
  }
}

export class AdminUpdateConfigCall__Inputs {
  _call: AdminUpdateConfigCall;

  constructor(call: AdminUpdateConfigCall) {
    this._call = call;
  }

  get _nftMarket(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get baseURI(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class AdminUpdateConfigCall__Outputs {
  _call: AdminUpdateConfigCall;

  constructor(call: AdminUpdateConfigCall) {
    this._call = call;
  }
}

export class AdminUpdateSupplyCall extends ethereum.Call {
  get inputs(): AdminUpdateSupplyCall__Inputs {
    return new AdminUpdateSupplyCall__Inputs(this);
  }

  get outputs(): AdminUpdateSupplyCall__Outputs {
    return new AdminUpdateSupplyCall__Outputs(this);
  }
}

export class AdminUpdateSupplyCall__Inputs {
  _call: AdminUpdateSupplyCall;

  constructor(call: AdminUpdateSupplyCall) {
    this._call = call;
  }

  get _supply(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class AdminUpdateSupplyCall__Outputs {
  _call: AdminUpdateSupplyCall;

  constructor(call: AdminUpdateSupplyCall) {
    this._call = call;
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }
}

export class BurnCall extends ethereum.Call {
  get inputs(): BurnCall__Inputs {
    return new BurnCall__Inputs(this);
  }

  get outputs(): BurnCall__Outputs {
    return new BurnCall__Outputs(this);
  }
}

export class BurnCall__Inputs {
  _call: BurnCall;

  constructor(call: BurnCall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class BurnCall__Outputs {
  _call: BurnCall;

  constructor(call: BurnCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get treasury(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get name(): string {
    return this._call.inputValues[1].value.toString();
  }

  get symbol(): string {
    return this._call.inputValues[2].value.toString();
  }

  get supply(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get collectionCreator(): Address {
    return this._call.inputValues[4].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
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

  get tokenIPFSPath(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class MintCall__Outputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class MintWithCreatorPaymentAddressCall extends ethereum.Call {
  get inputs(): MintWithCreatorPaymentAddressCall__Inputs {
    return new MintWithCreatorPaymentAddressCall__Inputs(this);
  }

  get outputs(): MintWithCreatorPaymentAddressCall__Outputs {
    return new MintWithCreatorPaymentAddressCall__Outputs(this);
  }
}

export class MintWithCreatorPaymentAddressCall__Inputs {
  _call: MintWithCreatorPaymentAddressCall;

  constructor(call: MintWithCreatorPaymentAddressCall) {
    this._call = call;
  }

  get tokenIPFSPath(): string {
    return this._call.inputValues[0].value.toString();
  }

  get tokenCreatorPaymentAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class MintWithCreatorPaymentAddressCall__Outputs {
  _call: MintWithCreatorPaymentAddressCall;

  constructor(call: MintWithCreatorPaymentAddressCall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class MintWithCreatorPaymentFactoryCall extends ethereum.Call {
  get inputs(): MintWithCreatorPaymentFactoryCall__Inputs {
    return new MintWithCreatorPaymentFactoryCall__Inputs(this);
  }

  get outputs(): MintWithCreatorPaymentFactoryCall__Outputs {
    return new MintWithCreatorPaymentFactoryCall__Outputs(this);
  }
}

export class MintWithCreatorPaymentFactoryCall__Inputs {
  _call: MintWithCreatorPaymentFactoryCall;

  constructor(call: MintWithCreatorPaymentFactoryCall) {
    this._call = call;
  }

  get tokenIPFSPath(): string {
    return this._call.inputValues[0].value.toString();
  }

  get paymentAddressFactory(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get paymentAddressCallData(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class MintWithCreatorPaymentFactoryCall__Outputs {
  _call: MintWithCreatorPaymentFactoryCall;

  constructor(call: MintWithCreatorPaymentFactoryCall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class RegisterInterfacesCall extends ethereum.Call {
  get inputs(): RegisterInterfacesCall__Inputs {
    return new RegisterInterfacesCall__Inputs(this);
  }

  get outputs(): RegisterInterfacesCall__Outputs {
    return new RegisterInterfacesCall__Outputs(this);
  }
}

export class RegisterInterfacesCall__Inputs {
  _call: RegisterInterfacesCall;

  constructor(call: RegisterInterfacesCall) {
    this._call = call;
  }
}

export class RegisterInterfacesCall__Outputs {
  _call: RegisterInterfacesCall;

  constructor(call: RegisterInterfacesCall) {
    this._call = call;
  }
}

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFrom1Call extends ethereum.Call {
  get inputs(): SafeTransferFrom1Call__Inputs {
    return new SafeTransferFrom1Call__Inputs(this);
  }

  get outputs(): SafeTransferFrom1Call__Outputs {
    return new SafeTransferFrom1Call__Outputs(this);
  }
}

export class SafeTransferFrom1Call__Inputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class SafeTransferFrom1Call__Outputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }
}

export class UpdateTokenURICall extends ethereum.Call {
  get inputs(): UpdateTokenURICall__Inputs {
    return new UpdateTokenURICall__Inputs(this);
  }

  get outputs(): UpdateTokenURICall__Outputs {
    return new UpdateTokenURICall__Outputs(this);
  }
}

export class UpdateTokenURICall__Inputs {
  _call: UpdateTokenURICall;

  constructor(call: UpdateTokenURICall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get tokenIPFSPath(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class UpdateTokenURICall__Outputs {
  _call: UpdateTokenURICall;

  constructor(call: UpdateTokenURICall) {
    this._call = call;
  }
}
