// package: order
// file: service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as model_pb from "./model_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as common_pb from "./common_pb";

export class QueryByIdResult extends jspb.Message { 

    hasHandleresult(): boolean;
    clearHandleresult(): void;
    getHandleresult(): common_pb.HandleResult | undefined;
    setHandleresult(value?: common_pb.HandleResult): QueryByIdResult;

    hasOrder(): boolean;
    clearOrder(): void;
    getOrder(): model_pb.Order | undefined;
    setOrder(value?: model_pb.Order): QueryByIdResult;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryByIdResult.AsObject;
    static toObject(includeInstance: boolean, msg: QueryByIdResult): QueryByIdResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryByIdResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryByIdResult;
    static deserializeBinaryFromReader(message: QueryByIdResult, reader: jspb.BinaryReader): QueryByIdResult;
}

export namespace QueryByIdResult {
    export type AsObject = {
        handleresult?: common_pb.HandleResult.AsObject,
        order?: model_pb.Order.AsObject,
    }
}

export class ToOrderResult extends jspb.Message { 

    hasHandleresult(): boolean;
    clearHandleresult(): void;
    getHandleresult(): common_pb.HandleResult | undefined;
    setHandleresult(value?: common_pb.HandleResult): ToOrderResult;
    getOrderid(): string;
    setOrderid(value: string): ToOrderResult;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ToOrderResult.AsObject;
    static toObject(includeInstance: boolean, msg: ToOrderResult): ToOrderResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ToOrderResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ToOrderResult;
    static deserializeBinaryFromReader(message: ToOrderResult, reader: jspb.BinaryReader): ToOrderResult;
}

export namespace ToOrderResult {
    export type AsObject = {
        handleresult?: common_pb.HandleResult.AsObject,
        orderid: string,
    }
}
