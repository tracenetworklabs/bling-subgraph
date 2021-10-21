import {
  BigInt,
  ByteArray,
  Bytes,
  ipfs,
  json,
  JSONValue,
  JSONValueKind,
  Value,
} from "@graphprotocol/graph-ts";
import {
  NFT as NFTContract,
  Minted as MintedEvent,
  Updated as UpdatedEvent,
} from "../generated/NFT/NFT";

import {
  Market as MarketContract,
  ReserveAuctionCreated as AuctionEvent,
  ReserveAuctionBidPlaced as BidsEvent,
  ReserveAuctionUpdated as ReserveAuctionUpdatedEvent,
  // ReserveAuctionCanceled as ReserveAuctionCanceledEvent,
  ReserveAuctionFinalized as ReserveAuctionFinalizedEvent,
} from "../generated/Market/Market";
import { Minted, Auction, Bid } from "../generated/schema";

export function handleMinted(event: MintedEvent): void {
  let token = Minted.load(event.params.tokenId.toString());
  if (!token) {
    token = new Minted(event.params.tokenId.toString());
    token.creator = event.params.creator;
    token.tokenID = event.params.tokenId;
    //token.ipfsHash = event.params.tokenIPFSPath.toString();
    let tokenContract = NFTContract.bind(event.address);
    token.ipfsHash = tokenContract
      .getTokenIPFSPath(event.params.tokenId)
      .toString();
    token.tokenURI = tokenContract.tokenURI(event.params.tokenId).toString();
    token.owner = tokenContract.ownerOf(event.params.tokenId);
    let temp = ipfs.cat(token.ipfsHash);
    if(temp == null)
      temp = ipfs.cat(token.ipfsHash);
      
    token.nftInfo = temp.toString();
    token.auctionID = "0";

    token.NFTContractAddress = event.address;
    token.MarketContractAddress = tokenContract.getNFTMarket();
    token.TreasuryContractAddress = tokenContract.getFoundationTreasury();

    token.transactionHash =
      "https://mumbai.polygonscan.com/tx/" +
      event.transaction.hash.toHexString();
    token.timestamp = event.block.timestamp;

    token.action = "Token Minted";
  }
  token.save();
}

export function handleUpdated(event: UpdatedEvent): void {
  let token = Minted.load(event.params.tokenId.toString());
  let tokenContract = NFTContract.bind(event.address);
  token.ipfsHash = tokenContract
    .getTokenIPFSPath(event.params.tokenId)
    .toString();
  token.tokenURI = tokenContract.tokenURI(event.params.tokenId).toString();
  let temp = ipfs.cat(token.ipfsHash);
  token.nftInfo = temp.toString();
  token.save();
}

export function handleReserveAuctionCreated(event: AuctionEvent): void {
  let auction = Auction.load(event.params.auctionId.toString());
  if (!auction) {
    auction = new Auction(event.params.auctionId.toString());
    auction.seller = event.params.seller.toHexString();
    auction.tokenId = event.params.tokenId.toString();
    auction.NFTContractAddress = event.params.nftContract.toHexString();
    auction.auctionID = event.params.auctionId;
    auction.reservePrice = event.params.reservePrice;
    auction.transactionHash =
      "https://mumbai.polygonscan.com/tx/" +
      event.transaction.hash.toHexString();
    auction.timestamp = event.block.timestamp;
    auction.bidList = [];
    auction.action = "Auction Started";

    let Mcontract = MarketContract.bind(event.address);
    let result = Mcontract.getReserveAuction(auction.auctionID);
    auction.startTime = result.startTime;
    auction.endTime = result.endTime;
    auction.bidder = result.bidder;

    let token = Minted.load(event.params.tokenId.toString());
    token.auctionID = event.params.auctionId.toString();
    token.auctionDetails = event.params.auctionId.toString();
    token.owner = event.address;
    token.save();
  }
  auction.save();
}

export function handleReserveAuctionBidPlaced(event: BidsEvent): void {
  let bids = Bid.load(event.params.auctionId.toString());

  let auction = Auction.load(event.params.auctionId.toString());

  if (auction.bidList.length == 0) {
    bids = new Bid(event.transaction.hash.toString());
    bids.auctionID = event.params.auctionId.toString();
    bids.bidder = event.params.bidder.toHexString();
    bids.amount = event.params.amount;
    bids.endTime = event.params.endTime;
    bids.transactionHash =
      "https://mumbai.polygonscan.com/tx/" +
      event.transaction.hash.toHexString();
    bids.timestamp = event.block.timestamp;
    bids.action = "Place a bid";

    auction.bidder = event.params.bidder;
    auction.reservePrice = event.params.amount;
    bids.number = BigInt.fromI32(auction.bidList.length);

    let temp = auction.bidList;
    auction.bidList = temp.concat([bids.id]);
    auction.save();
  } else {
    bids = new Bid(event.transaction.hash.toString());
    bids.auctionID = event.params.auctionId.toString();
    bids.bidder = event.params.bidder.toHexString();
    bids.amount = event.params.amount;
    bids.endTime = event.params.endTime;
    bids.transactionHash =
      "https://mumbai.polygonscan.com/tx/" +
      event.transaction.hash.toHexString();
    bids.timestamp = event.block.timestamp;
    bids.action = "Place a bid";

    auction.bidder = event.params.bidder;
    auction.reservePrice = event.params.amount;
    bids.number = BigInt.fromI32(auction.bidList.length);
    let temp = auction.bidList;
    auction.bidList = temp.concat([bids.id]);
    auction.save();
  }
  bids.save();
}

export function handleReserveAuctionUpdated(
  event: ReserveAuctionUpdatedEvent
): void {
  let auction = Auction.load(event.params.auctionId.toString());
  if (auction) auction.reservePrice = event.params.reservePrice;
  auction.save();
}

// export function handleReserveAuctionCanceled(event: ReserveAuctionCanceledEvent): void {
//   let auction = Auction.load(event.params.auctionID.toString());
//   let Mcontract = MarketContract.bind(event.address);
//   let result = Mcontract.getReserveAuction(event.params.auctionID);
//   auction.reservePrice = result.amount;
//   auction.save();
// }

export function handleReserveAuctionFinalized(
  event: ReserveAuctionFinalizedEvent
): void {
  let auction = Auction.load(event.params.auctionId.toString());
  if (auction) {
    auction.action = "Auction ended";
    auction.bidder = event.params.bidder;

    let token = Minted.load(auction.tokenId.toString());
    token.owner = event.params.bidder;
    token.save();
    auction.save();
  }
}

// auction id : 17
// Token id : 18
