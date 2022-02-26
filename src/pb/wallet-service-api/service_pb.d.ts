// package: wallet
// file: service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as model_pb from "./model_pb";
import * as common_pb from "./common_pb";

export class QueryWalletRequest extends jspb.Message { 
    getUserid(): string;
    setUserid(value: string): QueryWalletRequest;
    getCointypeid(): string;
    setCointypeid(value: string): QueryWalletRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryWalletRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryWalletRequest): QueryWalletRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryWalletRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryWalletRequest;
    static deserializeBinaryFromReader(message: QueryWalletRequest, reader: jspb.BinaryReader): QueryWalletRequest;
}

export namespace QueryWalletRequest {
    export type AsObject = {
        userid: string,
        cointypeid: string,
    }
}

export class QueryWalletResult extends jspb.Message { 

    hasHandleresult(): boolean;
    clearHandleresult(): void;
    getHandleresult(): common_pb.HandleResult | undefined;
    setHandleresult(value?: common_pb.HandleResult): QueryWalletResult;

    hasWallet(): boolean;
    clearWallet(): void;
    getWallet(): model_pb.Wallet | undefined;
    setWallet(value?: model_pb.Wallet): QueryWalletResult;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryWalletResult.AsObject;
    static toObject(includeInstance: boolean, msg: QueryWalletResult): QueryWalletResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryWalletResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryWalletResult;
    static deserializeBinaryFromReader(message: QueryWalletResult, reader: jspb.BinaryReader): QueryWalletResult;
}

export namespace QueryWalletResult {
    export type AsObject = {
        handleresult?: common_pb.HandleResult.AsObject,
        wallet?: model_pb.Wallet.AsObject,
    }
}
