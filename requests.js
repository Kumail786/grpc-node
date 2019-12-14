const client = require("./client");
client.list({},(error,todos)=> {
  console.log("successfully fetch List notes");
  console.log(todos)
});
// client.insert(data, (error, note) => {
//   if (!error) {
//     console.log("successfully added data");
//     console.log(note)
//   } else {
//     console.log("error");
//   }
// });
let id = "2";
// client.delete({ id: '1' }, (error, _) => {
//   if (!error) {
//       console.log('Note Has been successfully deleted')
//   } else {
//       console.error(error)
//   }
// })
