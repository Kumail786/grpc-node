const grpc = require("grpc");
const loader = require("@grpc/proto-loader");

const bindPath = "127.0.0.1:50050";

const packageDefinition  =  loader.loadSync("./notes.proto");
const package = grpc.loadPackageDefinition(packageDefinition);
const Client = package.TodoService;
const client = new Client(bindPath, grpc.credentials.createInsecure());

module.exports = client;
