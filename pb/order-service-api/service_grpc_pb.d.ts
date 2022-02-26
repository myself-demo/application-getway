// package: order
// file: service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as service_pb from "./service_pb";
import * as model_pb from "./model_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as common_pb from "./common_pb";

interface IOrderServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    queryById: IOrderServiceService_IqueryById;
    toOrder: IOrderServiceService_ItoOrder;
}

interface IOrderServiceService_IqueryById extends grpc.MethodDefinition<google_protobuf_wrappers_pb.StringValue, service_pb.QueryByIdResult> {
    path: "/order.OrderService/queryById";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_wrappers_pb.StringValue>;
    requestDeserialize: grpc.deserialize<google_protobuf_wrappers_pb.StringValue>;
    responseSerialize: grpc.serialize<service_pb.QueryByIdResult>;
    responseDeserialize: grpc.deserialize<service_pb.QueryByIdResult>;
}
interface IOrderServiceService_ItoOrder extends grpc.MethodDefinition<model_pb.Order, service_pb.ToOrderResult> {
    path: "/order.OrderService/toOrder";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<model_pb.Order>;
    requestDeserialize: grpc.deserialize<model_pb.Order>;
    responseSerialize: grpc.serialize<service_pb.ToOrderResult>;
    responseDeserialize: grpc.deserialize<service_pb.ToOrderResult>;
}

export const OrderServiceService: IOrderServiceService;

export interface IOrderServiceServer {
    queryById: grpc.handleUnaryCall<google_protobuf_wrappers_pb.StringValue, service_pb.QueryByIdResult>;
    toOrder: grpc.handleUnaryCall<model_pb.Order, service_pb.ToOrderResult>;
}

export interface IOrderServiceClient {
    queryById(request: google_protobuf_wrappers_pb.StringValue, callback: (error: grpc.ServiceError | null, response: service_pb.QueryByIdResult) => void): grpc.ClientUnaryCall;
    queryById(request: google_protobuf_wrappers_pb.StringValue, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_pb.QueryByIdResult) => void): grpc.ClientUnaryCall;
    queryById(request: google_protobuf_wrappers_pb.StringValue, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_pb.QueryByIdResult) => void): grpc.ClientUnaryCall;
    toOrder(request: model_pb.Order, callback: (error: grpc.ServiceError | null, response: service_pb.ToOrderResult) => void): grpc.ClientUnaryCall;
    toOrder(request: model_pb.Order, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_pb.ToOrderResult) => void): grpc.ClientUnaryCall;
    toOrder(request: model_pb.Order, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_pb.ToOrderResult) => void): grpc.ClientUnaryCall;
}

export class OrderServiceClient extends grpc.Client implements IOrderServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public queryById(request: google_protobuf_wrappers_pb.StringValue, callback: (error: grpc.ServiceError | null, response: service_pb.QueryByIdResult) => void): grpc.ClientUnaryCall;
    public queryById(request: google_protobuf_wrappers_pb.StringValue, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_pb.QueryByIdResult) => void): grpc.ClientUnaryCall;
    public queryById(request: google_protobuf_wrappers_pb.StringValue, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_pb.QueryByIdResult) => void): grpc.ClientUnaryCall;
    public toOrder(request: model_pb.Order, callback: (error: grpc.ServiceError | null, response: service_pb.ToOrderResult) => void): grpc.ClientUnaryCall;
    public toOrder(request: model_pb.Order, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_pb.ToOrderResult) => void): grpc.ClientUnaryCall;
    public toOrder(request: model_pb.Order, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_pb.ToOrderResult) => void): grpc.ClientUnaryCall;
}
