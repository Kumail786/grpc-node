const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");
const packageDefinition = protoLoader.loadSync("./notes.proto");
const grpcLibrary = require("@grpc/grpc-js");
const notesProto = grpcLibrary.loadPackageDefinition(packageDefinition);
const server = new grpc.Server();
const mongoose = require("mongoose");
const Mongo_URI = require("./config.json").Mongo_URI;
const Todo = require("./todoSchema");
mongoose.connect(Mongo_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});
mongoose.connection.once("open", () => {
  console.log("connected to mongdb");
});

server.addService(notesProto.TodoService.service, {
  list: (_, callback) => {
    console.log("andar aya");
    Todo.find({}).then(todos => {
      console.log(typeof todos);


      console.log(todos)
      callback(null, {todos : todos});
    });
  }
  //   insert: (call, callback) => {
  //     let note = call.request;
  //     note.id = uuidv1();
  //     notes.push(note);
  //     callback(null, note);
  //   },
  //   delete: (call, callback) => {
  //     let existingNoteIndex = notes.findIndex(n => n.id == call.request.id);
  //     if (existingNoteIndex != -1) {
  //       notes.splice(existingNoteIndex, 1);
  //       callback(null, {});
  //     } else {
  //       callback({
  //         code: grpc.status.NOT_FOUND,
  //         details: "Not found"
  //       });
  //     }
  //   }
});
server.bind("127.0.0.1:50050", grpc.ServerCredentials.createInsecure());
console.log("Server running at http://127.0.0.1:50050");
server.start();
