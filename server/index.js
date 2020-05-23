const express = require("express");
const cors = require("cors");
const pool = require("./db");
const app = express();

//middleware
app.use(cors());
app.use(express.json());

//ROUTES//

//create user
app.post("/users", async (req, res) => {
  try {
    const username = req.body.userName;
    const email = req.body.userEmail;
    const pass = req.body.userPass;
    const token = req.body.token;
    const newUser = await pool.query("INSERT INTO users (username, email, pass, token) VALUES($1, $2, $3, $4) RETURNING *", [username, email, pass, token]);
    res.json(newUser.rows[0]);
  } catch (err) {
    console.log(err.message)
  }
})

//get all users

app.get("/users", async (req, res) => {
  try {
    const allUsers = await pool.query("SELECT * FROM users");
    res.json(allUsers.rows);
  } catch (error) {
    console.log(error.message)
  }
})


//get a user 

app.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await pool.query("SELECT * FROM users WHERE userid = $1", [id]);
    res.json(user.rows);
  } catch (error) {
    console.log(error)
  }
})

//update user

app.put("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const username = req.body.name;
    const email = req.body.email;
    const pass = req.body.pass;
    const updateUser = await pool.query("UPDATE users SET username = $1, email = $2, pass = $3 WHERE userid = $4", [username, email, pass, id])

    res.json("User was updated!");
  } catch (error) {
    console.log(error)
  }
})

//delete user
app.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM users WHERE userid = $1", [id]);
    res.json("User was deleted by the God!");
  } catch (error) {
    console.log(error);
  }
})


app.listen(5000, () => {
  console.log("server was started by INSPIRING DEN");
})