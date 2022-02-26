// package: wallet
// file: model.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class CoinType extends jspb.Message { 
    getCointypeid(): string;
    setCointypeid(value: string): CoinType;
    getCointypename(): string;
    setCointypename(value: string): CoinType;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CoinType.AsObject;
    static toObject(includeInstance: boolean, msg: CoinType): CoinType.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CoinType, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CoinType;
    static deserializeBinaryFromReader(message: CoinType, reader: jspb.BinaryReader): CoinType;
}

export namespace CoinType {
    export type AsObject = {
        cointypeid: string,
        cointypename: string,
    }
}

export class Wallet extends jspb.Message { 
    getUserid(): string;
    setUserid(value: string): Wallet;
    getWalletid(): string;
    setWalletid(value: string): Wallet;
    getCointypeid(): string;
    setCointypeid(value: string): Wallet;
    getAvailablebalance(): number;
    setAvailablebalance(value: number): Wallet;
    getFreezebalance(): number;
    setFreezebalance(value: number): Wallet;
    getIslocking(): boolean;
    setIslocking(value: boolean): Wallet;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Wallet.AsObject;
    static toObject(includeInstance: boolean, msg: Wallet): Wallet.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Wallet, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Wallet;
    static deserializeBinaryFromReader(message: Wallet, reader: jspb.BinaryReader): Wallet;
}

export namespace Wallet {
    export type AsObject = {
        userid: string,
        walletid: string,
        cointypeid: string,
        availablebalance: number,
        freezebalance: number,
        islocking: boolean,
    }
}
