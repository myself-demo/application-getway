import * as grpc from 'grpc'

import {OrderServiceClient} from './pb/order-service-api/service_grpc_pb'
import {StringValue} from "google-protobuf/google/protobuf/wrappers_pb";


let orderServiceClient= new OrderServiceClient("localhost:9000",grpc.credentials.createInsecure())
console.info('123')