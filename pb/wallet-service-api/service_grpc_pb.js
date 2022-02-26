// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var service_pb = require('./service_pb.js');
var model_pb = require('./model_pb.js');
var common_pb = require('./common_pb.js');

function serialize_wallet_QueryWalletRequest(arg) {
  if (!(arg instanceof service_pb.QueryWalletRequest)) {
    throw new Error('Expected argument of type wallet.QueryWalletRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wallet_QueryWalletRequest(buffer_arg) {
  return service_pb.QueryWalletRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_wallet_QueryWalletResult(arg) {
  if (!(arg instanceof service_pb.QueryWalletResult)) {
    throw new Error('Expected argument of type wallet.QueryWalletResult');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wallet_QueryWalletResult(buffer_arg) {
  return service_pb.QueryWalletResult.deserializeBinary(new Uint8Array(buffer_arg));
}


var WalletServiceService = exports.WalletServiceService = {
  queryWallet: {
    path: '/wallet.WalletService/queryWallet',
    requestStream: false,
    responseStream: false,
    requestType: service_pb.QueryWalletRequest,
    responseType: service_pb.QueryWalletResult,
    requestSerialize: serialize_wallet_QueryWalletRequest,
    requestDeserialize: deserialize_wallet_QueryWalletRequest,
    responseSerialize: serialize_wallet_QueryWalletResult,
    responseDeserialize: deserialize_wallet_QueryWalletResult,
  },
};

exports.WalletServiceClient = grpc.makeGenericClientConstructor(WalletServiceService);
