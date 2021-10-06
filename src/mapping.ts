import { BigInt, ipfs, json } from "@graphprotocol/graph-ts";
import {
  NFT as NFTContract,
  Minted as MintedEvent,
  Updated as UpdatedEvent,
} from "../generated/NFT/NFT";

import {
  Market as MarketContract,
  ReserveAuctionCreated as AuctionEvent,
  ReserveAuctionBidPlaced as BidsEvent,
} from "../generated/Market/Market";
import { Minted, Auction, Bid } from "../generated/schema";

export function handleMinted(event: MintedEvent): void {
  let token = Minted.load(event.params.tokenId.toString());
  if (!token) {
    token = new Minted(event.params.tokenId.toString());
    token.creator = event.params.creator;
    token.tokenID = event.params.tokenId;
    //token.IPFSPath = event.params.tokenIPFSPath.toString();
    let tokenContract = NFTContract.bind(event.address);
    token.IPFSPath = tokenContract
      .getTokenIPFSPath(event.params.tokenId)
      .toString();
    token.tokenURI = tokenContract.tokenURI(event.params.tokenId).toString();
    token.owner = tokenContract.ownerOf(event.params.tokenId);
    let temp = ipfs.cat(token.IPFSPath);
    token.NFTInfo = temp.toString();

    token.auctionId = null;
    token.NFTContractAddress = event.address;
    token.MarketContractAddress = tokenContract.getNFTMarket();
    token.TreasuryContractAddress = tokenContract.getFoundationTreasury();

    token.transactionHash = "https://mumbai.polygonscan.com/tx/" + event.transaction.hash.toHexString();
    token.timestamp = event.block.timestamp;
  }
  token.save();
}

export function handleUpdated(event: UpdatedEvent): void {
  let token = Minted.load(event.params.tokenId.toString());
  let tokenContract = NFTContract.bind(event.address);
  token.IPFSPath = tokenContract
    .getTokenIPFSPath(event.params.tokenId)
    .toString();
  token.tokenURI = tokenContract.tokenURI(event.params.tokenId).toString();
  let temp = ipfs.cat(token.IPFSPath);
  token.NFTInfo = temp.toString();
  token.save();
}

export function handleReserveAuctionCreated(event: AuctionEvent): void {
  let auction = Auction.load(event.params.tokenId.toString());
  if (!auction) {
    auction = new Auction(event.params.tokenId.toString());
    auction.seller = event.params.seller.toHexString();
    auction.tokenId = event.params.tokenId;
    auction.NFTContractAddress = event.params.nftContract.toHexString();
    auction.auctionId = event.params.auctionId;
    auction.reservePrice = event.params.reservePrice;

    let Mcontract = MarketContract.bind(event.address);
    let result = Mcontract.getReserveAuction(auction.auctionId);
    auction.startTime = result.startTime;
    auction.endTime = result.endTime;
    auction.bidder = result.bidder;

    let token = Minted.load(event.params.tokenId.toString());
    token.auctionId = event.params.auctionId;
    token.owner = event.address;
    token.save();
  }
  auction.save();
}

export function handleReserveAuctionBidPlaced(event: BidsEvent): void {
  let bids = Bid.load(event.params.auctionId.toString());
  if (!bids) {
    bids = new Bid(event.params.auctionId.toString());
    bids.auctionId = event.params.auctionId;
    bids.bidder = event.params.bidder.toHexString();
    bids.amount = event.params.amount;
    bids.endTime = event.params.endTime;

    let Mcontract = MarketContract.bind(event.address);
    let result = Mcontract.getReserveAuction(event.params.auctionId);

    let auction = Auction.load(result.tokenId.toString());
    auction.bidder = event.params.bidder;
    auction.reservePrice = event.params.amount;
    auction.save();
  }
  bids.save();
}
