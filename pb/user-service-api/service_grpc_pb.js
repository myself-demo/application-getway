// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var service_pb = require('./service_pb.js');
var model_pb = require('./model_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var common_pb = require('./common_pb.js');

function serialize_google_protobuf_StringValue(arg) {
  if (!(arg instanceof google_protobuf_wrappers_pb.StringValue)) {
    throw new Error('Expected argument of type google.protobuf.StringValue');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_StringValue(buffer_arg) {
  return google_protobuf_wrappers_pb.StringValue.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_order_LoginRequest(arg) {
  if (!(arg instanceof service_pb.LoginRequest)) {
    throw new Error('Expected argument of type order.LoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_order_LoginRequest(buffer_arg) {
  return service_pb.LoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_order_LoginResult(arg) {
  if (!(arg instanceof service_pb.LoginResult)) {
    throw new Error('Expected argument of type order.LoginResult');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_order_LoginResult(buffer_arg) {
  return service_pb.LoginResult.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_order_QueryUserInfoResult(arg) {
  if (!(arg instanceof service_pb.QueryUserInfoResult)) {
    throw new Error('Expected argument of type order.QueryUserInfoResult');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_order_QueryUserInfoResult(buffer_arg) {
  return service_pb.QueryUserInfoResult.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserServiceService = exports.UserServiceService = {
  login: {
    path: '/order.UserService/login',
    requestStream: false,
    responseStream: false,
    requestType: service_pb.LoginRequest,
    responseType: service_pb.LoginResult,
    requestSerialize: serialize_order_LoginRequest,
    requestDeserialize: deserialize_order_LoginRequest,
    responseSerialize: serialize_order_LoginResult,
    responseDeserialize: deserialize_order_LoginResult,
  },
  queryUserInfo: {
    path: '/order.UserService/queryUserInfo',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_wrappers_pb.StringValue,
    responseType: service_pb.QueryUserInfoResult,
    requestSerialize: serialize_google_protobuf_StringValue,
    requestDeserialize: deserialize_google_protobuf_StringValue,
    responseSerialize: serialize_order_QueryUserInfoResult,
    responseDeserialize: deserialize_order_QueryUserInfoResult,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
