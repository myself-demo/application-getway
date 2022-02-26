// package: order
// file: model.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Order extends jspb.Message { 
    getOrderid(): string;
    setOrderid(value: string): Order;
    getUserid(): string;
    setUserid(value: string): Order;
    getProductname(): string;
    setProductname(value: string): Order;
    getPaymoney(): number;
    setPaymoney(value: number): Order;
    getOrdertime(): number;
    setOrdertime(value: number): Order;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Order.AsObject;
    static toObject(includeInstance: boolean, msg: Order): Order.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Order, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Order;
    static deserializeBinaryFromReader(message: Order, reader: jspb.BinaryReader): Order;
}

export namespace Order {
    export type AsObject = {
        orderid: string,
        userid: string,
        productname: string,
        paymoney: number,
        ordertime: number,
    }
}
