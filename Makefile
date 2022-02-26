# npm install -g grpc-tools

gen-order-service-api:
	mkdir -p ./src/pb/order-service-api/
	grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:./src/pb/order-service-api/ \
    --grpc_out=./src/pb/order-service-api/ \
    --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
    -I ./src/proto/order-service-api \
    ./src/proto/order-service-api/*.proto

	protoc \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --ts_out=./src/pb/order-service-api/ \
    -I ./src/proto/order-service-api \
    ./src/proto/order-service-api/*.proto

gen-user-service-api:
	mkdir -p ./src/pb/user-service-api/
	grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:./src/pb/user-service-api/ \
    --grpc_out=./src/pb/user-service-api/ \
    --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
    -I ./src/proto/user-service-api \
    ./src/proto/user-service-api/*.proto

	protoc \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --ts_out=./src/pb/user-service-api/ \
    -I ./src/proto/user-service-api \
    ./src/proto/user-service-api/*.proto

gen-wallet-service-api:
	mkdir -p ./src/pb/wallet-service-api/
	grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:./src/pb/wallet-service-api/ \
    --grpc_out=./src/pb/wallet-service-api/ \
    --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
    -I ./src/proto/wallet-service-api \
    ./src/proto/wallet-service-api/*.proto

	protoc \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --ts_out=./src/pb/wallet-service-api/ \
    -I ./src/proto/wallet-service-api \
    ./src/proto/wallet-service-api/*.proto


gen: gen-order-service-api gen-user-service-api gen-wallet-service-api
