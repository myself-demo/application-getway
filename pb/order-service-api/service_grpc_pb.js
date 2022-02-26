// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
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

function serialize_order_Order(arg) {
  if (!(arg instanceof model_pb.Order)) {
    throw new Error('Expected argument of type order.Order');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_order_Order(buffer_arg) {
  return model_pb.Order.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_order_QueryByIdResult(arg) {
  if (!(arg instanceof service_pb.QueryByIdResult)) {
    throw new Error('Expected argument of type order.QueryByIdResult');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_order_QueryByIdResult(buffer_arg) {
  return service_pb.QueryByIdResult.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_order_ToOrderResult(arg) {
  if (!(arg instanceof service_pb.ToOrderResult)) {
    throw new Error('Expected argument of type order.ToOrderResult');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_order_ToOrderResult(buffer_arg) {
  return service_pb.ToOrderResult.deserializeBinary(new Uint8Array(buffer_arg));
}


var OrderServiceService = exports.OrderServiceService = {
  queryById: {
    path: '/order.OrderService/queryById',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_wrappers_pb.StringValue,
    responseType: service_pb.QueryByIdResult,
    requestSerialize: serialize_google_protobuf_StringValue,
    requestDeserialize: deserialize_google_protobuf_StringValue,
    responseSerialize: serialize_order_QueryByIdResult,
    responseDeserialize: deserialize_order_QueryByIdResult,
  },
  toOrder: {
    path: '/order.OrderService/toOrder',
    requestStream: false,
    responseStream: false,
    requestType: model_pb.Order,
    responseType: service_pb.ToOrderResult,
    requestSerialize: serialize_order_Order,
    requestDeserialize: deserialize_order_Order,
    responseSerialize: serialize_order_ToOrderResult,
    responseDeserialize: deserialize_order_ToOrderResult,
  },
};

exports.OrderServiceClient = grpc.makeGenericClientConstructor(OrderServiceService);
