// package: wallet
// file: service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as service_pb from "./service_pb";
import * as model_pb from "./model_pb";
import * as common_pb from "./common_pb";

interface IWalletServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    queryWallet: IWalletServiceService_IqueryWallet;
}

interface IWalletServiceService_IqueryWallet extends grpc.MethodDefinition<service_pb.QueryWalletRequest, service_pb.QueryWalletResult> {
    path: "/wallet.WalletService/queryWallet";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<service_pb.QueryWalletRequest>;
    requestDeserialize: grpc.deserialize<service_pb.QueryWalletRequest>;
    responseSerialize: grpc.serialize<service_pb.QueryWalletResult>;
    responseDeserialize: grpc.deserialize<service_pb.QueryWalletResult>;
}

export const WalletServiceService: IWalletServiceService;

export interface IWalletServiceServer {
    queryWallet: grpc.handleUnaryCall<service_pb.QueryWalletRequest, service_pb.QueryWalletResult>;
}

export interface IWalletServiceClient {
    queryWallet(request: service_pb.QueryWalletRequest, callback: (error: grpc.ServiceError | null, response: service_pb.QueryWalletResult) => void): grpc.ClientUnaryCall;
    queryWallet(request: service_pb.QueryWalletRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_pb.QueryWalletResult) => void): grpc.ClientUnaryCall;
    queryWallet(request: service_pb.QueryWalletRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_pb.QueryWalletResult) => void): grpc.ClientUnaryCall;
}

export class WalletServiceClient extends grpc.Client implements IWalletServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public queryWallet(request: service_pb.QueryWalletRequest, callback: (error: grpc.ServiceError | null, response: service_pb.QueryWalletResult) => void): grpc.ClientUnaryCall;
    public queryWallet(request: service_pb.QueryWalletRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_pb.QueryWalletResult) => void): grpc.ClientUnaryCall;
    public queryWallet(request: service_pb.QueryWalletRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_pb.QueryWalletResult) => void): grpc.ClientUnaryCall;
}
