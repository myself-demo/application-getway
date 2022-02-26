// source: service.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var model_pb = require('./model_pb.js');
goog.object.extend(proto, model_pb);
var common_pb = require('./common_pb.js');
goog.object.extend(proto, common_pb);
goog.exportSymbol('proto.wallet.QueryWalletRequest', null, global);
goog.exportSymbol('proto.wallet.QueryWalletResult', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.wallet.QueryWalletRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wallet.QueryWalletRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wallet.QueryWalletRequest.displayName = 'proto.wallet.QueryWalletRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.wallet.QueryWalletResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wallet.QueryWalletResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wallet.QueryWalletResult.displayName = 'proto.wallet.QueryWalletResult';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.wallet.QueryWalletRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.wallet.QueryWalletRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wallet.QueryWalletRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wallet.QueryWalletRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    cointypeid: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.wallet.QueryWalletRequest}
 */
proto.wallet.QueryWalletRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wallet.QueryWalletRequest;
  return proto.wallet.QueryWalletRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wallet.QueryWalletRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wallet.QueryWalletRequest}
 */
proto.wallet.QueryWalletRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCointypeid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.wallet.QueryWalletRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wallet.QueryWalletRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wallet.QueryWalletRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wallet.QueryWalletRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCointypeid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string userId = 1;
 * @return {string}
 */
proto.wallet.QueryWalletRequest.prototype.getUserid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.wallet.QueryWalletRequest} returns this
 */
proto.wallet.QueryWalletRequest.prototype.setUserid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string coinTypeId = 2;
 * @return {string}
 */
proto.wallet.QueryWalletRequest.prototype.getCointypeid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.wallet.QueryWalletRequest} returns this
 */
proto.wallet.QueryWalletRequest.prototype.setCointypeid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.wallet.QueryWalletResult.prototype.toObject = function(opt_includeInstance) {
  return proto.wallet.QueryWalletResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wallet.QueryWalletResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wallet.QueryWalletResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    handleresult: (f = msg.getHandleresult()) && common_pb.HandleResult.toObject(includeInstance, f),
    wallet: (f = msg.getWallet()) && model_pb.Wallet.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.wallet.QueryWalletResult}
 */
proto.wallet.QueryWalletResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wallet.QueryWalletResult;
  return proto.wallet.QueryWalletResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wallet.QueryWalletResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wallet.QueryWalletResult}
 */
proto.wallet.QueryWalletResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.HandleResult;
      reader.readMessage(value,common_pb.HandleResult.deserializeBinaryFromReader);
      msg.setHandleresult(value);
      break;
    case 2:
      var value = new model_pb.Wallet;
      reader.readMessage(value,model_pb.Wallet.deserializeBinaryFromReader);
      msg.setWallet(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.wallet.QueryWalletResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wallet.QueryWalletResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wallet.QueryWalletResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wallet.QueryWalletResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHandleresult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.HandleResult.serializeBinaryToWriter
    );
  }
  f = message.getWallet();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      model_pb.Wallet.serializeBinaryToWriter
    );
  }
};


/**
 * optional common.HandleResult handleResult = 1;
 * @return {?proto.common.HandleResult}
 */
proto.wallet.QueryWalletResult.prototype.getHandleresult = function() {
  return /** @type{?proto.common.HandleResult} */ (
    jspb.Message.getWrapperField(this, common_pb.HandleResult, 1));
};


/**
 * @param {?proto.common.HandleResult|undefined} value
 * @return {!proto.wallet.QueryWalletResult} returns this
*/
proto.wallet.QueryWalletResult.prototype.setHandleresult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wallet.QueryWalletResult} returns this
 */
proto.wallet.QueryWalletResult.prototype.clearHandleresult = function() {
  return this.setHandleresult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wallet.QueryWalletResult.prototype.hasHandleresult = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Wallet wallet = 2;
 * @return {?proto.wallet.Wallet}
 */
proto.wallet.QueryWalletResult.prototype.getWallet = function() {
  return /** @type{?proto.wallet.Wallet} */ (
    jspb.Message.getWrapperField(this, model_pb.Wallet, 2));
};


/**
 * @param {?proto.wallet.Wallet|undefined} value
 * @return {!proto.wallet.QueryWalletResult} returns this
*/
proto.wallet.QueryWalletResult.prototype.setWallet = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wallet.QueryWalletResult} returns this
 */
proto.wallet.QueryWalletResult.prototype.clearWallet = function() {
  return this.setWallet(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wallet.QueryWalletResult.prototype.hasWallet = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.wallet);
