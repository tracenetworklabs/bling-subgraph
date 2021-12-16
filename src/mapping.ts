import { BigInt, ipfs } from "@graphprotocol/graph-ts";
import {
  BlingMaster as masterContract,
  CollectionCreated as CollectionCreatedEvent,
  CollectionUpdated as CollectionUpdatedEvent,
} from "../generated/BlingMaster/BlingMaster";

import {
  Collection as NFTContract,
  Minted as MintedEvent,
} from "../generated/templates/Collection/Collection";

import {
  Market as MarketContract,
  ReserveAuctionCreated as AuctionEvent,
  ReserveAuctionBidPlaced as BidsEvent,
  ReserveAuctionCanceled as ReserveAuctionCanceledEvent,
  ReserveAuctionFinalized as ReserveAuctionFinalizedEvent,
  ReserveAuctionUpdated as ReserveAuctionUpdatedEvent,
  TokenAdded as TokenAddedEvent
} from "../generated/Market/Market";

import { Collection as collectionContract } from "../generated/templates";

import { Collection, Master, Bid, Auction, History, BidPlaced, TokenDetail } from "../generated/schema";

export function handleCollectionCreated(event: CollectionCreatedEvent): void {
  let token = Master.load(event.params.ColCode.toString());
  if (!token) {
    token = new Master(event.params.ColCode.toString());
    token.creator = event.params.creator;
    token.colCode = event.params.ColCode;
    token.colName = event.params.Colname;
    token.colDescription = event.params.ColDescription;
    token.colProperties = event.params.ColProperties;
    token.timestamp = event.block.timestamp;
    token.collectionAction = "Collection Added";
    token.transactionHash = event.transaction.hash.toHexString();
    token.myContract = event.params.myContract;
    token.colAction = "Collection Created";

    let CContract = NFTContract.bind(event.params.myContract);
    let supply = CContract.totalSupply();
    token.quantity = supply;
    
    let master = CContract.blingMaster();
    let instance = masterContract.bind(master);
    let brandname = instance.brandName(event.params.creator);
    token.brandName = brandname;
    

    collectionContract.create(event.params.myContract);
  }
  token.save();
}

export function handleCollectionUpdated(event: CollectionUpdatedEvent): void {
  let token = Master.load(event.params.ColCode.toString());
  token.myContract = event.params.myContract;
  token.creator = event.params.creator;
  token.colCode = event.params.ColCode;
  token.colName = event.params.Colname;
  token.colDescription = event.params.ColDescription;
  token.colProperties = event.params.ColProperties;
  token.quantity = event.params.quantity;
  token.timestamp = event.block.timestamp;
  token.transactionHash = event.transaction.hash.toHexString();
  token.colAction = "Collection Updated";
  token.save();
}

export function handleMinted(event: MintedEvent): void {
  let hex = event.params.tokenId.toString() + event.address.toString();
  let token = Collection.load(hex);
  let history = History.load(hex);
  if (!token) {
    token = new Collection(hex);
    token.tokenID = event.params.tokenId;
    let CContract = NFTContract.bind(event.address);
    let master = CContract.blingMaster();
    let instance = masterContract.bind(master);
    let code = instance.getCode(event.address);

    let collection = Master.load(code.toString());

    let nextTokenID = CContract.getNextTokenId();

    let count = nextTokenID.minus(BigInt.fromI32(1));

    collection.nftCount = count;

    let name = instance.getCollectionDetails(event.params.creator, code);
    let brandname = instance.brandName(event.params.creator);
    token.colName = name.value0;
    token.colDescription = name.value1;
    token.colProperties = name.value2;
    token.quantity = CContract.totalSupply();
    token.nftCount = count;
    token.colCode = code;
    token.brandName = brandname;

    collection.save();

    token.creator = event.params.creator;
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

    token.nftContractAddress = event.address;
    token.marketContractAddress = tokenContract.getNFTMarket();
    token.treasuryContractAddress = tokenContract.getFoundationTreasury();

    token.nftTransactionHash = event.transaction.hash.toHexString();
    token.nftTimestamp = event.block.timestamp;

    token.nftAction = "Token Minted";
  }
  if (token.history.length == 0) {
    history = new History(hex);
    history.tokenID = event.params.tokenId;
    history.mintAddress = event.params.creator;
    history.mintTimestamp = event.block.timestamp;
    history.mintAction = "Token Minted";
    history.mintAmount = "0";
    history.nftContractAddress=event.address;
    let Htemp = token.history;
    token.history = Htemp.concat([history.id]);
    history.save();
  } else {
    history = new History(hex);
    history.tokenID = event.params.tokenId;
    history.mintAddress = event.params.creator;
    history.mintTimestamp = event.block.timestamp;
    history.mintAction = "Token Minted";
    history.mintAmount = "0";
    history.nftContractAddress=event.address;
    let Htemp = token.history;
    token.history = Htemp.concat([history.id]);
    history.save();
  }
  token.save();
}

export function handleTokenAdded(event: TokenAddedEvent): void {
  let token = TokenDetail.load(event.params.tokenAddress.toString());
  if(!token) {
    token = new TokenDetail(event.params.tokenAddress.toString());
    token.tokenAddress = event.params.tokenAddress;
    token.status = event.params.status.toString();
  }
  else {
    token.status = event.params.status.toString();
  }
}

export function handleReserveAuctionCreated(event: AuctionEvent): void {
  let hex =
    event.params.tokenId.toString() + event.params.nftContract.toString();
  let auction = Collection.load(hex);
  let history = History.load(hex);
  let auctionInstance = Auction.load(event.params.auctionId.toString());
  if (auction) {
    auction = new Collection(hex);
    auction.seller = event.params.seller.toHexString();
    auction.auctionID = event.params.auctionId.toString();
    auction.reservePrice = event.params.reservePrice;
    auction.auctionTransactionHash = event.transaction.hash.toHexString();
    auction.auctionTimestamp = event.block.timestamp;
    auction.auctionAction = "Auction Started";
    auction.tokenAddress = event.params.paymentMode.toHexString();
    auction.tokenName = event.params.name;

    let Mcontract = MarketContract.bind(event.address);
    let result = Mcontract.getReserveAuction(event.params.auctionId);
    auction.startTime = result.startTime;
    auction.endTime = result.endTime;
    auction.bidder = result.bidder;
    auction.bidList = [];
    history = new History(hex);
    history.auctionID = event.params.auctionId.toString();
    history.auctionAddress = event.params.seller;
    history.auctionTimestamp = event.block.timestamp;
    history.auctionAction = "Auction Started";
    history.auctionAmount = event.params.reservePrice.toString();
    history.tokenAddress = event.params.paymentMode.toHexString();
    history.tokenName = event.params.name;
    history.cancelAuction=null;
    let Htemp = auction.history;
    auction.history = Htemp.concat([history.id]);
    history.save();
  }
  if (!auctionInstance) {
    auctionInstance = new Auction(event.params.auctionId.toString());
    auctionInstance.tokenID = event.params.tokenId;
    auctionInstance.nftContract = event.params.nftContract;
    auctionInstance.index = hex.toString();
    auctionInstance.save();
  }
  auction.save();
}

export function handleReserveAuctionBidPlaced(event: BidsEvent): void {
  let auctionInstance = Auction.load(event.params.auctionId.toString());
  let bids = Bid.load(event.params.auctionId.toString());
  let Mcontract = MarketContract.bind(event.address);
  let result = Mcontract.getReserveAuction(event.params.auctionId);
  let hex = result.tokenId.toString() + result.nftContract.toString();
  let auction = Collection.load(hex);
  let bidHistory = History.load(hex);
  if (auction.bidList.length == 0) {
    bids = new Bid(event.transaction.hash.toString());
    bids.auctionID = event.params.auctionId;
    bids.bidder = event.params.bidder.toHexString();
    bids.amount = event.params.amount;
    bids.endTime = event.params.endTime;
    bids.transactionHash = event.transaction.hash.toHexString();
    bids.timestamp = event.block.timestamp;
    bids.action = "Place a bid";
    bids.colDetails = auctionInstance.index;

    auction.bidder = event.params.bidder;
    auction.reservePrice = event.params.amount;

    let temp = auction.bidList;
    auction.bidList = temp.concat([bids.id]);
    let tempVar = bidHistory.bidList;
    bidHistory.bidList = tempVar.concat([bids.id]);
    bidHistory.save();
    auction.save();
  } else {
    bids = new Bid(event.transaction.hash.toString());
    bids.auctionID = event.params.auctionId;
    bids.bidder = event.params.bidder.toHexString();
    bids.amount = event.params.amount;
    bids.endTime = event.params.endTime;
    bids.transactionHash = event.transaction.hash.toHexString();
    bids.timestamp = event.block.timestamp;
    bids.action = "Place a bid";
    bids.colDetails = auctionInstance.index;

    auction.bidder = event.params.bidder;
    auction.reservePrice = event.params.amount;
    let temp = auction.bidList;
    auction.bidList = temp.concat([bids.id]);
    let tempVar = bidHistory.bidList;
    bidHistory.bidList = tempVar.concat([bids.id]);
    bidHistory.save();
    auction.save();
  }

  let bidPlaced = BidPlaced.load(event.params.auctionId.toString());
   if(!bidPlaced) {
    bidPlaced = new BidPlaced(event.params.auctionId.toString());
    bidPlaced.auctionID = event.params.auctionId;
    bidPlaced.bidder = event.params.bidder.toHexString();
    bidPlaced.amount = event.params.amount;
    bidPlaced.endTime = event.params.endTime;
    bidPlaced.transactionHash = event.transaction.hash.toHexString();
    bidPlaced.timestamp = event.block.timestamp;
    bidPlaced.action = "Place a bid";
    bidPlaced.colDetails = auctionInstance.index;
   }
   else {
    bidPlaced.auctionID = event.params.auctionId;
    bidPlaced.bidder = event.params.bidder.toHexString();
    bidPlaced.amount = event.params.amount;
    bidPlaced.endTime = event.params.endTime;
    bidPlaced.transactionHash = event.transaction.hash.toHexString();
    bidPlaced.timestamp = event.block.timestamp;
    bidPlaced.action = "Place a bid";
    bidPlaced.colDetails = auctionInstance.index;
   }
   bidPlaced.save();
  bids.save();
}

export function handleReserveAuctionCanceled(
  event: ReserveAuctionCanceledEvent
): void {
  let auctionInstance = Auction.load(event.params.auctionId.toString());
  let auction = Collection.load(auctionInstance.index);
  let history = History.load(auctionInstance.index);
  history = new History(auctionInstance.index);
  history.cancelTimestamp = event.block.timestamp;
  history.cancelAuction="Auction Cancelled";
  let Htemp = auction.history;
  auction.history = Htemp.concat([history.id]);
  history.save();

  auction.auctionID = "0";
  auction.auctionAction = "Auction Cancelled";
  auction.save();
}
export function handleReserveAuctionFinalized(
  event: ReserveAuctionFinalizedEvent
): void {
  let auctionInstance = Auction.load(event.params.auctionId.toString());
  let auction = Collection.load(auctionInstance.index);
  let history = History.load(auctionInstance.index);
  history = new History(auctionInstance.index);
  history.finalizeAddress = event.params.bidder;
  history.finalizeTimestamp = event.block.timestamp;
  history.finalizeAuction="Auction ended";
  let Htemp = auction.history;
  auction.history = Htemp.concat([history.id]);
  history.save();

  auction.auctionAction = "Auction ended";
  auction.bidder = event.params.bidder;
  auction.owner = event.params.bidder;
  auction.save();
}

export function handleReserveAuctionUpdated(
  event: ReserveAuctionUpdatedEvent
): void {
  let auctionInstance = Auction.load(event.params.auctionId.toString());
  let auction = Collection.load(auctionInstance.index);
  let history = History.load(auctionInstance.index);
  history = new History(auctionInstance.index);
  history.updateTimestamp = event.block.timestamp;
  history.updateAuction="Auction updated";
  history.updateAmount=event.params.reservePrice.toString();
  let Htemp = auction.history;
  auction.history = Htemp.concat([history.id]);
  history.save();
  if (auction) {
    auction.reservePrice = event.params.reservePrice;
    auction.auctionAction = "Auction updated";
  }
  auction.save();
}





