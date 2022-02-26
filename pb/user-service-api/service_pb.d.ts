// package: order
// file: service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as model_pb from "./model_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as common_pb from "./common_pb";

export class LoginRequest extends jspb.Message { 
    getLoginname(): string;
    setLoginname(value: string): LoginRequest;
    getLoginpass(): string;
    setLoginpass(value: string): LoginRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoginRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LoginRequest): LoginRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoginRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoginRequest;
    static deserializeBinaryFromReader(message: LoginRequest, reader: jspb.BinaryReader): LoginRequest;
}

export namespace LoginRequest {
    export type AsObject = {
        loginname: string,
        loginpass: string,
    }
}

export class LoginResult extends jspb.Message { 

    hasHandleresult(): boolean;
    clearHandleresult(): void;
    getHandleresult(): common_pb.HandleResult | undefined;
    setHandleresult(value?: common_pb.HandleResult): LoginResult;

    hasUser(): boolean;
    clearUser(): void;
    getUser(): model_pb.User | undefined;
    setUser(value?: model_pb.User): LoginResult;
    getToken(): string;
    setToken(value: string): LoginResult;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoginResult.AsObject;
    static toObject(includeInstance: boolean, msg: LoginResult): LoginResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoginResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoginResult;
    static deserializeBinaryFromReader(message: LoginResult, reader: jspb.BinaryReader): LoginResult;
}

export namespace LoginResult {
    export type AsObject = {
        handleresult?: common_pb.HandleResult.AsObject,
        user?: model_pb.User.AsObject,
        token: string,
    }
}

export class QueryUserInfoResult extends jspb.Message { 

    hasHandleresult(): boolean;
    clearHandleresult(): void;
    getHandleresult(): common_pb.HandleResult | undefined;
    setHandleresult(value?: common_pb.HandleResult): QueryUserInfoResult;

    hasUser(): boolean;
    clearUser(): void;
    getUser(): model_pb.User | undefined;
    setUser(value?: model_pb.User): QueryUserInfoResult;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryUserInfoResult.AsObject;
    static toObject(includeInstance: boolean, msg: QueryUserInfoResult): QueryUserInfoResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryUserInfoResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryUserInfoResult;
    static deserializeBinaryFromReader(message: QueryUserInfoResult, reader: jspb.BinaryReader): QueryUserInfoResult;
}

export namespace QueryUserInfoResult {
    export type AsObject = {
        handleresult?: common_pb.HandleResult.AsObject,
        user?: model_pb.User.AsObject,
    }
}
