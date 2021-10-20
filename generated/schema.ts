// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Minted extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Minted entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Minted entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Minted", id.toString(), this);
  }

  static load(id: string): Minted | null {
    return store.get("Minted", id) as Minted | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenID(): BigInt {
    let value = this.get("tokenID");
    return value.toBigInt();
  }

  set tokenID(value: BigInt) {
    this.set("tokenID", Value.fromBigInt(value));
  }

  get ipfsHash(): string {
    let value = this.get("ipfsHash");
    return value.toString();
  }

  set ipfsHash(value: string) {
    this.set("ipfsHash", Value.fromString(value));
  }

  get creator(): Bytes {
    let value = this.get("creator");
    return value.toBytes();
  }

  set creator(value: Bytes) {
    this.set("creator", Value.fromBytes(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get auctionID(): BigInt | null {
    let value = this.get("auctionID");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set auctionID(value: BigInt | null) {
    if (value === null) {
      this.unset("auctionID");
    } else {
      this.set("auctionID", Value.fromBigInt(value as BigInt));
    }
  }

  get auctionDetails(): string | null {
    let value = this.get("auctionDetails");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set auctionDetails(value: string | null) {
    if (value === null) {
      this.unset("auctionDetails");
    } else {
      this.set("auctionDetails", Value.fromString(value as string));
    }
  }

  get tokenURI(): string {
    let value = this.get("tokenURI");
    return value.toString();
  }

  set tokenURI(value: string) {
    this.set("tokenURI", Value.fromString(value));
  }

  get nftInfo(): string {
    let value = this.get("nftInfo");
    return value.toString();
  }

  set nftInfo(value: string) {
    this.set("nftInfo", Value.fromString(value));
  }

  get NFTContractAddress(): Bytes {
    let value = this.get("NFTContractAddress");
    return value.toBytes();
  }

  set NFTContractAddress(value: Bytes) {
    this.set("NFTContractAddress", Value.fromBytes(value));
  }

  get MarketContractAddress(): Bytes {
    let value = this.get("MarketContractAddress");
    return value.toBytes();
  }

  set MarketContractAddress(value: Bytes) {
    this.set("MarketContractAddress", Value.fromBytes(value));
  }

  get TreasuryContractAddress(): Bytes {
    let value = this.get("TreasuryContractAddress");
    return value.toBytes();
  }

  set TreasuryContractAddress(value: Bytes) {
    this.set("TreasuryContractAddress", Value.fromBytes(value));
  }

  get transactionHash(): string {
    let value = this.get("transactionHash");
    return value.toString();
  }

  set transactionHash(value: string) {
    this.set("transactionHash", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get action(): string {
    let value = this.get("action");
    return value.toString();
  }

  set action(value: string) {
    this.set("action", Value.fromString(value));
  }
}

export class Auction extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Auction entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Auction entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Auction", id.toString(), this);
  }

  static load(id: string): Auction | null {
    return store.get("Auction", id) as Auction | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenId(): string {
    let value = this.get("tokenId");
    return value.toString();
  }

  set tokenId(value: string) {
    this.set("tokenId", Value.fromString(value));
  }

  get NFTContractAddress(): string {
    let value = this.get("NFTContractAddress");
    return value.toString();
  }

  set NFTContractAddress(value: string) {
    this.set("NFTContractAddress", Value.fromString(value));
  }

  get seller(): string {
    let value = this.get("seller");
    return value.toString();
  }

  set seller(value: string) {
    this.set("seller", Value.fromString(value));
  }

  get auctionID(): BigInt {
    let value = this.get("auctionID");
    return value.toBigInt();
  }

  set auctionID(value: BigInt) {
    this.set("auctionID", Value.fromBigInt(value));
  }

  get reservePrice(): BigInt {
    let value = this.get("reservePrice");
    return value.toBigInt();
  }

  set reservePrice(value: BigInt) {
    this.set("reservePrice", Value.fromBigInt(value));
  }

  get startTime(): BigInt {
    let value = this.get("startTime");
    return value.toBigInt();
  }

  set startTime(value: BigInt) {
    this.set("startTime", Value.fromBigInt(value));
  }

  get endTime(): BigInt {
    let value = this.get("endTime");
    return value.toBigInt();
  }

  set endTime(value: BigInt) {
    this.set("endTime", Value.fromBigInt(value));
  }

  get bidder(): Bytes {
    let value = this.get("bidder");
    return value.toBytes();
  }

  set bidder(value: Bytes) {
    this.set("bidder", Value.fromBytes(value));
  }

  get transactionHash(): string {
    let value = this.get("transactionHash");
    return value.toString();
  }

  set transactionHash(value: string) {
    this.set("transactionHash", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get bidList(): Array<string | null> {
    let value = this.get("bidList");
    return value.toStringArray();
  }

  set bidList(value: Array<string | null>) {
    this.set("bidList", Value.fromStringArray(value));
  }

  get action(): string {
    let value = this.get("action");
    return value.toString();
  }

  set action(value: string) {
    this.set("action", Value.fromString(value));
  }
}

export class Bid extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Bid entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Bid entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Bid", id.toString(), this);
  }

  static load(id: string): Bid | null {
    return store.get("Bid", id) as Bid | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get auctionID(): string {
    let value = this.get("auctionID");
    return value.toString();
  }

  set auctionID(value: string) {
    this.set("auctionID", Value.fromString(value));
  }

  get number(): BigInt {
    let value = this.get("number");
    return value.toBigInt();
  }

  set number(value: BigInt) {
    this.set("number", Value.fromBigInt(value));
  }

  get bidder(): string {
    let value = this.get("bidder");
    return value.toString();
  }

  set bidder(value: string) {
    this.set("bidder", Value.fromString(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get endTime(): BigInt {
    let value = this.get("endTime");
    return value.toBigInt();
  }

  set endTime(value: BigInt) {
    this.set("endTime", Value.fromBigInt(value));
  }

  get transactionHash(): string {
    let value = this.get("transactionHash");
    return value.toString();
  }

  set transactionHash(value: string) {
    this.set("transactionHash", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get action(): string {
    let value = this.get("action");
    return value.toString();
  }

  set action(value: string) {
    this.set("action", Value.fromString(value));
  }
}
