import { BigInt, BigDecimal, Address, ipfs } from "@graphprotocol/graph-ts";
import {
  BlingMaster as masterContract,
  CollectionCreated as CollectionCreatedEvent,
  CollectionUpdated as CollectionUpdatedEvent,
} from "../generated/BlingMaster/BlingMaster";

import {
  Collection as NFTContract,
  Minted as MintedEvent,
} from "../generated/templates/Collection/Collection";

<<<<<<< HEAD
import { Collection as collectionContract } from "../generated/templates";
=======
import {
  Market as MarketContract,
  ReserveAuctionCreated as AuctionEvent,
  ReserveAuctionBidPlaced as BidsEvent,
  ReserveAuctionUpdated as ReserveAuctionUpdatedEvent,
  ReserveAuctionCanceled as ReserveAuctionCanceledEvent,
  ReserveAuctionFinalized as ReserveAuctionFinalizedEvent,
} from "../generated/Market/Market";
import { Minted, Auction, Bid } from "../generated/schema";
>>>>>>> 24efe02af8ac40ae70aa04bf733d35e6567ee47e

import { Collection, Master } from "../generated/schema";

export function handleCollectionCreated(event: CollectionCreatedEvent): void {
  let token = Master.load(event.params.ColCode.toString());
  if (!token) {
    //nftTemplate.create(event.params.myContract);
    token = new Master(event.params.ColCode.toString());
    token.creator = event.params.creator;
    token.ColCode = event.params.ColCode;
    token.ColName = event.params.Colname;
    token.ColDescription = event.params.ColDescription;
    token.ColProperties = event.params.ColProperties;
    token.timestamp = event.block.timestamp;
    token.transactionHash =
      "https://mumbai.polygonscan.com/tx/" +
      event.transaction.hash.toHexString();
    token.MyContract = event.params.myContract;
    token.ColAction = "Collection Created";

    let CContract = NFTContract.bind(event.params.myContract);

    let supply = CContract.totalSupply();

    token.quantity = supply;

    collectionContract.create(event.params.myContract);

  }
  token.save();
}

export function handleMinted(event: MintedEvent): void {
  let token = Collection.load(event.transaction.hash.toHex());
  if (!token) {
    token = new Collection(event.transaction.hash.toHex());
    token.tokenID = event.params.tokenId;

    let CContract = NFTContract.bind(event.address);
    let master = CContract.bling_master();
    let instance = masterContract.bind(master);
    let code = instance.getCode(event.address);

    let collection = Master.load(code.toString());

    let nextTokenID = CContract.getNextTokenId();

    let count = nextTokenID.minus(BigInt.fromI32(1));

    collection.nftCount = count;

    collection.save();

    token.creator = event.params.creator;
    //token.ipfsHash = event.params.tokenIPFSPath.toString();
    let tokenContract = NFTContract.bind(event.address);
    token.ipfsHash = tokenContract
      .getTokenIPFSPath(event.params.tokenId)
      .toString();
    token.tokenURI = tokenContract.tokenURI(event.params.tokenId).toString();
    token.owner = tokenContract.ownerOf(event.params.tokenId);
    let temp = ipfs.cat(token.ipfsHash);

    if (temp == null) temp = ipfs.cat(token.ipfsHash);

    if (temp == null && token.ipfsHash != null) temp = ipfs.cat(token.ipfsHash);

    token.auctionID = "0";

    token.NFTContractAddress = event.address;
    token.MarketContractAddress = tokenContract.getNFTMarket();
    token.TreasuryContractAddress = tokenContract.getFoundationTreasury();

    token.NFTtransactionHash =
      "https://mumbai.polygonscan.com/tx/" +
      event.transaction.hash.toHexString();
    token.NFTtimestamp = event.block.timestamp;

<<<<<<< HEAD
    token.NFTaction = "Token Minted";
=======
    if (temp == null) temp = ipfs.cat(token.ipfsHash);

    if (temp == null) temp = ipfs.cat(token.ipfsHash);

    token.nftInfo = temp.toString();
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
    auction.auctionID = event.params.auctionId.toString();
    auction.reservePrice = event.params.reservePrice;
    auction.transactionHash =
      "https://mumbai.polygonscan.com/tx/" +
      event.transaction.hash.toHexString();
    auction.timestamp = event.block.timestamp;
    auction.bidList = [];
    auction.action = "Auction Started";

    let Mcontract = MarketContract.bind(event.address);
    let result = Mcontract.getReserveAuction(event.params.auctionId);
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
>>>>>>> 24efe02af8ac40ae70aa04bf733d35e6567ee47e

    if (temp == null) temp = ipfs.cat(token.ipfsHash);

    if (temp == null) temp = ipfs.cat(token.ipfsHash);

    token.nftInfo = temp.toString();
  }

<<<<<<< HEAD
  token.save();
=======
export function handleReserveAuctionCanceled(event: ReserveAuctionCanceledEvent): void {
  let auction = Auction.load(event.params.auctionId.toString());
  let Mcontract = MarketContract.bind(event.address);
  let result = Mcontract.getReserveAuction(event.params.auctionId);
  let token = Minted.load(result.tokenId.toString());
  token.auctionID = "0";
  auction.action = "Auction Cancelled";
  auction.auctionID = "0";
  auction.save();
}

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
>>>>>>> 24efe02af8ac40ae70aa04bf733d35e6567ee47e
}
