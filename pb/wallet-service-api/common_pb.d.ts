// package: common
// file: common.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class HandleResult extends jspb.Message { 
    getCode(): number;
    setCode(value: number): HandleResult;
    getMessage(): string;
    setMessage(value: string): HandleResult;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HandleResult.AsObject;
    static toObject(includeInstance: boolean, msg: HandleResult): HandleResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HandleResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HandleResult;
    static deserializeBinaryFromReader(message: HandleResult, reader: jspb.BinaryReader): HandleResult;
}

export namespace HandleResult {
    export type AsObject = {
        code: number,
        message: string,
    }
}
