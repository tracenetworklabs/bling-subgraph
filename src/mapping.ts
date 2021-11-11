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

import { Collection as collectionContract } from "../generated/templates";

import { Collection, Master } from "../generated/schema";

export function handleCollectionCreated(event: CollectionCreatedEvent): void {
  let token = Master.load(event.params.ColCode.toString());
  if (!token) {
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

    let name = (instance.getCollectionDetails(event.params.creator, code));

    token.ColName = name.value0;
    token.ColDescription = name.value1;
    token.ColProperties = name.value2;
    token.quantity = CContract.totalSupply();
    token.nftCount = count;
    token.ColCode = code;

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

    token.NFTaction = "Token Minted";

    if (temp == null) temp = ipfs.cat(token.ipfsHash);

    if (temp == null) temp = ipfs.cat(token.ipfsHash);

    token.nftInfo = temp.toString();
  }

  token.save();
}
