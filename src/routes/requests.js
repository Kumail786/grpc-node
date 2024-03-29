const router = require("express").Router();
const client = require("../clientserver/client");

router.get("/all", (req, res) => {
  client.list({}, (error, todos) => {
    if (error) {
      return res.status(400).send({
        msg: error.message
      });
    }
    console.log("successfully fetch List notes");
    console.log(todos);
    return res.status(200).send({
      success: true,
      todos: todos
    });
  });
});

router.post("/add", (req, res) => {
  console.log(req.body);
  const todo = req.body;
  client.insert(todo, (error, todo) => {
    if (!error) {
      console.log("successfully added data");
     return res.status(200).send({
        todo
      });
    } else {
      return res.status(400).send({
        msg: error.message
      });
    }
  });
});

router.delete("/delete/:id", (req, res) => {
  let id = req.params.id;
  console.log(id);
  client.delete({ id }, (error, todo) => {
    if(error){
      return  res.status(400).send({
        msg : error.message
      })
      }
    console.log("data deleted");
  return  res.status(200).send({
      todo: todo
    });
  });
});

router.put("/edit/:id", (req, res) => {
  let _id = req.params.id;
  let { title, description, done } = req.body;
  client.Update({ _id, title, description, done }, (error, todo) => {
    if (!error) {
      console.log("Todo successfully updated!");
      console.log(todo);
      return res.status(200).json({
        success: true,
        todo
      });
    } else {
      return res.status(400).json({
        status: false,
        message: error.message
      });
    }
  });
});

module.exports = router;
