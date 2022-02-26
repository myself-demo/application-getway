// package: order
// file: model.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class User extends jspb.Message { 
    getUserid(): string;
    setUserid(value: string): User;
    getUsernickname(): string;
    setUsernickname(value: string): User;
    getUserloginname(): string;
    setUserloginname(value: string): User;
    getUserloginpass(): string;
    setUserloginpass(value: string): User;
    getCreatetime(): number;
    setCreatetime(value: number): User;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): User.AsObject;
    static toObject(includeInstance: boolean, msg: User): User.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): User;
    static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
    export type AsObject = {
        userid: string,
        usernickname: string,
        userloginname: string,
        userloginpass: string,
        createtime: number,
    }
}
