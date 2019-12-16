const grpc = require("grpc");
import loader from "@grpc/proto-loader";

const bindPath:string = "127.0.0.1:50050";

const loaded = loader.loadSync("./notes.proto");
const todoproto = grpc.loadPackageDefinition(loaded);
const Client = todoproto.TodoService;
const client = new Client(bindPath, grpc.credentials.createInsecure());

module.exports = client;
