# npm install -g grpc-tools

gen-order-service-api:
	mkdir -p ./pb/order-service-api/
	grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:./pb/order-service-api/ \
    --grpc_out=./pb/order-service-api/ \
    --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
    -I ./proto/order-service-api \
    ./proto/order-service-api/*.proto

gen-user-service-api:
	mkdir -p ./pb/user-service-api/
	grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:./pb/user-service-api/ \
    --grpc_out=./pb/user-service-api/ \
    --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
    -I ./proto/user-service-api \
    ./proto/user-service-api/*.proto

gen-wallet-service-api:
	mkdir -p ./pb/wallet-service-api/
	grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:./pb/wallet-service-api/ \
    --grpc_out=./pb/wallet-service-api/ \
    --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
    -I ./proto/wallet-service-api \
    ./proto/wallet-service-api/*.proto


gen: gen-order-service-api gen-user-service-api gen-wallet-service-api
