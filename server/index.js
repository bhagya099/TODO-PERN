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
    // console.error(req.body);
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo(description) VALUES($1) RETURNING *;",
      [description]
    );

    res.json(newTodo);
  } catch (error) {
    console.error(error.message);
  }
});

//get all todos
app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo;");
    res.json(allTodos.rows);
  } catch (error) {
    console.error(error.message);
  }
});
//get a todo
app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1;", [
      id,
    ]);
    res.json(todo.rows);
  } catch (error) {
    console.error(error.message);
  }
});
//update todo
app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = pool.query(
      "UPDATE todo SET description=$1 WHERE todo_id = $2;",
      [description, id]
    );
    res.json("Todo has updates");
  } catch (error) {
    console.error(error.message);
  }
});

//delete a todo
app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deltodo = await pool.query("DELETE FROM todo WHERE todo_id = $1;", [
      id,
    ]);
  } catch (error) {
    console.error(error.message);
  }
  res.json("Todo was deleted");
});

app.listen(PORT, () => {
  console.log(`you port is http://localhost:${PORT}`);
});
