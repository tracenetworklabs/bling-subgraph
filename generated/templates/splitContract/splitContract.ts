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

export class ERC20Transferred extends ethereum.Event {
  get params(): ERC20Transferred__Params {
    return new ERC20Transferred__Params(this);
  }
}

export class ERC20Transferred__Params {
  _event: ERC20Transferred;

  constructor(event: ERC20Transferred) {
    this._event = event;
  }

  get erc20Contract(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ETHTransferred extends ethereum.Event {
  get params(): ETHTransferred__Params {
    return new ETHTransferred__Params(this);
  }
}

export class ETHTransferred__Params {
  _event: ETHTransferred;

  constructor(event: ETHTransferred) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class PercentSplitCreated extends ethereum.Event {
  get params(): PercentSplitCreated__Params {
    return new PercentSplitCreated__Params(this);
  }
}

export class PercentSplitCreated__Params {
  _event: PercentSplitCreated;

  constructor(event: PercentSplitCreated) {
    this._event = event;
  }

  get contractAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class PercentSplitShare extends ethereum.Event {
  get params(): PercentSplitShare__Params {
    return new PercentSplitShare__Params(this);
  }
}

export class PercentSplitShare__Params {
  _event: PercentSplitShare;

  constructor(event: PercentSplitShare) {
    this._event = event;
  }

  get recipient(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get percentInBasisPoints(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class splitContract__createSplitInputSharesStruct extends ethereum.Tuple {
  get recipient(): Address {
    return this[0].toAddress();
  }

  get percentInBasisPoints(): BigInt {
    return this[1].toBigInt();
  }
}

export class splitContract__getPredictedSplitAddressInputSharesStruct extends ethereum.Tuple {
  get recipient(): Address {
    return this[0].toAddress();
  }

  get percentInBasisPoints(): BigInt {
    return this[1].toBigInt();
  }
}

export class splitContract__getSharesResultValue0Struct extends ethereum.Tuple {
  get recipient(): Address {
    return this[0].toAddress();
  }

  get percentInBasisPoints(): BigInt {
    return this[1].toBigInt();
  }
}

export class splitContract extends ethereum.SmartContract {
  static bind(address: Address): splitContract {
    return new splitContract("splitContract", address);
  }

  createSplit(
    shares: Array<splitContract__createSplitInputSharesStruct>
  ): Address {
    let result = super.call(
      "createSplit",
      "createSplit((address,uint256)[]):(address)",
      [ethereum.Value.fromTupleArray(shares)]
    );

    return result[0].toAddress();
  }

  try_createSplit(
    shares: Array<splitContract__createSplitInputSharesStruct>
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "createSplit",
      "createSplit((address,uint256)[]):(address)",
      [ethereum.Value.fromTupleArray(shares)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getPercentInBasisPointsByIndex(index: BigInt): BigInt {
    let result = super.call(
      "getPercentInBasisPointsByIndex",
      "getPercentInBasisPointsByIndex(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(index)]
    );

    return result[0].toBigInt();
  }

  try_getPercentInBasisPointsByIndex(
    index: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getPercentInBasisPointsByIndex",
      "getPercentInBasisPointsByIndex(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(index)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getPredictedSplitAddress(
    shares: Array<splitContract__getPredictedSplitAddressInputSharesStruct>
  ): Address {
    let result = super.call(
      "getPredictedSplitAddress",
      "getPredictedSplitAddress((address,uint256)[]):(address)",
      [ethereum.Value.fromTupleArray(shares)]
    );

    return result[0].toAddress();
  }

  try_getPredictedSplitAddress(
    shares: Array<splitContract__getPredictedSplitAddressInputSharesStruct>
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getPredictedSplitAddress",
      "getPredictedSplitAddress((address,uint256)[]):(address)",
      [ethereum.Value.fromTupleArray(shares)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getShareLength(): BigInt {
    let result = super.call("getShareLength", "getShareLength():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getShareLength(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getShareLength",
      "getShareLength():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getShareRecipientByIndex(index: BigInt): Address {
    let result = super.call(
      "getShareRecipientByIndex",
      "getShareRecipientByIndex(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(index)]
    );

    return result[0].toAddress();
  }

  try_getShareRecipientByIndex(index: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getShareRecipientByIndex",
      "getShareRecipientByIndex(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(index)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getShares(): Array<splitContract__getSharesResultValue0Struct> {
    let result = super.call(
      "getShares",
      "getShares():((address,uint256)[])",
      []
    );

    return result[0].toTupleArray<splitContract__getSharesResultValue0Struct>();
  }

  try_getShares(): ethereum.CallResult<
    Array<splitContract__getSharesResultValue0Struct>
  > {
    let result = super.tryCall(
      "getShares",
      "getShares():((address,uint256)[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<splitContract__getSharesResultValue0Struct>()
    );
  }
}

export class CreateSplitCall extends ethereum.Call {
  get inputs(): CreateSplitCall__Inputs {
    return new CreateSplitCall__Inputs(this);
  }

  get outputs(): CreateSplitCall__Outputs {
    return new CreateSplitCall__Outputs(this);
  }
}

export class CreateSplitCall__Inputs {
  _call: CreateSplitCall;

  constructor(call: CreateSplitCall) {
    this._call = call;
  }

  get shares(): Array<CreateSplitCallSharesStruct> {
    return this._call.inputValues[0].value.toTupleArray<
      CreateSplitCallSharesStruct
    >();
  }
}

export class CreateSplitCall__Outputs {
  _call: CreateSplitCall;

  constructor(call: CreateSplitCall) {
    this._call = call;
  }

  get splitInstance(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class CreateSplitCallSharesStruct extends ethereum.Tuple {
  get recipient(): Address {
    return this[0].toAddress();
  }

  get percentInBasisPoints(): BigInt {
    return this[1].toBigInt();
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

  get shares(): Array<InitializeCallSharesStruct> {
    return this._call.inputValues[0].value.toTupleArray<
      InitializeCallSharesStruct
    >();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class InitializeCallSharesStruct extends ethereum.Tuple {
  get recipient(): Address {
    return this[0].toAddress();
  }

  get percentInBasisPoints(): BigInt {
    return this[1].toBigInt();
  }
}

export class ProxyCallCall extends ethereum.Call {
  get inputs(): ProxyCallCall__Inputs {
    return new ProxyCallCall__Inputs(this);
  }

  get outputs(): ProxyCallCall__Outputs {
    return new ProxyCallCall__Outputs(this);
  }
}

export class ProxyCallCall__Inputs {
  _call: ProxyCallCall;

  constructor(call: ProxyCallCall) {
    this._call = call;
  }

  get target(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get callData(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class ProxyCallCall__Outputs {
  _call: ProxyCallCall;

  constructor(call: ProxyCallCall) {
    this._call = call;
  }
}

export class SplitERC20TokensCall extends ethereum.Call {
  get inputs(): SplitERC20TokensCall__Inputs {
    return new SplitERC20TokensCall__Inputs(this);
  }

  get outputs(): SplitERC20TokensCall__Outputs {
    return new SplitERC20TokensCall__Outputs(this);
  }
}

export class SplitERC20TokensCall__Inputs {
  _call: SplitERC20TokensCall;

  constructor(call: SplitERC20TokensCall) {
    this._call = call;
  }

  get erc20Contract(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SplitERC20TokensCall__Outputs {
  _call: SplitERC20TokensCall;

  constructor(call: SplitERC20TokensCall) {
    this._call = call;
  }
}

export class SplitETHCall extends ethereum.Call {
  get inputs(): SplitETHCall__Inputs {
    return new SplitETHCall__Inputs(this);
  }

  get outputs(): SplitETHCall__Outputs {
    return new SplitETHCall__Outputs(this);
  }
}

export class SplitETHCall__Inputs {
  _call: SplitETHCall;

  constructor(call: SplitETHCall) {
    this._call = call;
  }
}

export class SplitETHCall__Outputs {
  _call: SplitETHCall;

  constructor(call: SplitETHCall) {
    this._call = call;
  }
}