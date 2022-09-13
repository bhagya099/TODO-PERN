const express = require("express");
const cors = require("cors");
const pool = require("./database");
const app = express();
const PORT = process.env.PORT || 5008;

//middleware
app.use(cors());
//to get data from server side we can get json data
app.use(express.json()); //req.body

//ROUTES

//createa todo
app.post("/todos", async (req, res) => {
  try {
    // console.log(req.body);
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo(description) VALUES($1);",
      [description]
    );
  } catch (error) {
    console.log(error.message);
  }
});

//get all todos

//get a todo

//update todo

//delete a todo

app.listen(PORT, () => {
  console.log(`you port is http://localhost:${PORT}`);
});
