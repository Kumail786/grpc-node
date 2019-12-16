const grpc = require("grpc");

const loader = require("@grpc/proto-loader")

const bindPath = "127.0.0.1:50050";

const loaded = loader.loadSync("./protos/notes.proto");
const todoproto = grpc.loadPackageDefinition(loaded);
const Client = todoproto.TodoService;
const client = new Client(bindPath, grpc.credentials.createInsecure());

module.exports = client;
