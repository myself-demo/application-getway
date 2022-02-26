// package: order
// file: service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as service_pb from "./service_pb";
import * as model_pb from "./model_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as common_pb from "./common_pb";

interface IUserServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    login: IUserServiceService_Ilogin;
    queryUserInfo: IUserServiceService_IqueryUserInfo;
}

interface IUserServiceService_Ilogin extends grpc.MethodDefinition<service_pb.LoginRequest, service_pb.LoginResult> {
    path: "/order.UserService/login";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<service_pb.LoginRequest>;
    requestDeserialize: grpc.deserialize<service_pb.LoginRequest>;
    responseSerialize: grpc.serialize<service_pb.LoginResult>;
    responseDeserialize: grpc.deserialize<service_pb.LoginResult>;
}
interface IUserServiceService_IqueryUserInfo extends grpc.MethodDefinition<google_protobuf_wrappers_pb.StringValue, service_pb.QueryUserInfoResult> {
    path: "/order.UserService/queryUserInfo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_wrappers_pb.StringValue>;
    requestDeserialize: grpc.deserialize<google_protobuf_wrappers_pb.StringValue>;
    responseSerialize: grpc.serialize<service_pb.QueryUserInfoResult>;
    responseDeserialize: grpc.deserialize<service_pb.QueryUserInfoResult>;
}

export const UserServiceService: IUserServiceService;

export interface IUserServiceServer {
    login: grpc.handleUnaryCall<service_pb.LoginRequest, service_pb.LoginResult>;
    queryUserInfo: grpc.handleUnaryCall<google_protobuf_wrappers_pb.StringValue, service_pb.QueryUserInfoResult>;
}

export interface IUserServiceClient {
    login(request: service_pb.LoginRequest, callback: (error: grpc.ServiceError | null, response: service_pb.LoginResult) => void): grpc.ClientUnaryCall;
    login(request: service_pb.LoginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_pb.LoginResult) => void): grpc.ClientUnaryCall;
    login(request: service_pb.LoginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_pb.LoginResult) => void): grpc.ClientUnaryCall;
    queryUserInfo(request: google_protobuf_wrappers_pb.StringValue, callback: (error: grpc.ServiceError | null, response: service_pb.QueryUserInfoResult) => void): grpc.ClientUnaryCall;
    queryUserInfo(request: google_protobuf_wrappers_pb.StringValue, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_pb.QueryUserInfoResult) => void): grpc.ClientUnaryCall;
    queryUserInfo(request: google_protobuf_wrappers_pb.StringValue, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_pb.QueryUserInfoResult) => void): grpc.ClientUnaryCall;
}

export class UserServiceClient extends grpc.Client implements IUserServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public login(request: service_pb.LoginRequest, callback: (error: grpc.ServiceError | null, response: service_pb.LoginResult) => void): grpc.ClientUnaryCall;
    public login(request: service_pb.LoginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_pb.LoginResult) => void): grpc.ClientUnaryCall;
    public login(request: service_pb.LoginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_pb.LoginResult) => void): grpc.ClientUnaryCall;
    public queryUserInfo(request: google_protobuf_wrappers_pb.StringValue, callback: (error: grpc.ServiceError | null, response: service_pb.QueryUserInfoResult) => void): grpc.ClientUnaryCall;
    public queryUserInfo(request: google_protobuf_wrappers_pb.StringValue, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_pb.QueryUserInfoResult) => void): grpc.ClientUnaryCall;
    public queryUserInfo(request: google_protobuf_wrappers_pb.StringValue, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_pb.QueryUserInfoResult) => void): grpc.ClientUnaryCall;
}
