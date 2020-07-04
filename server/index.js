const express = require("express");
const cors = require("cors");
const pool = require("./db");
const app = express();
const createToken = require("../frontend/src/utils/createToken.js");

//middleware
app.use(cors());
app.use(express.json());

//ROUTES//

//create user
app.post("/users", async (req, res) => {
  try {
    const userName = req.body.userName;
    const email = req.body.userEmail;
    const pass = req.body.userPass;
    const token = createToken();
    const createdUser = await pool.query(
      "SELECT * FROM users WHERE userName = $1",
      [userName]
    );
    if (createdUser.rows.length === 0) {
      newUser = await pool.query(
        "INSERT INTO users (username, email, pass, token) VALUES($1, $2, $3, $4) RETURNING *",
        [userName, email, pass, token]
      );
      res.json(newUser.rows[0]);
    } else {
      console.log("this username is already reserved");
    }
  } catch (err) {
    console.log(err.message);
  }
});

//get all users

app.get("/users", async (req, res) => {
  try {
    const allUsers = await pool.query("SELECT * FROM users");
    res.json(allUsers.rows);
  } catch (error) {
    console.log(error.message);
  }
});

//get a user's token

app.get("/users/:userName/:userPass", async (req, res) => {
  try {
    const { userName } = req.params;
    const { userPass } = req.params;
    const token = await pool.query(
      "SELECT token FROM users WHERE userName = $1 AND pass = $2",
      [userName, userPass]
    );
    if (token.rows[0].token) {
      res.json(token.rows[0].token);
    } else {
      console.log("this user is not exist");
    }
  } catch (error) {
    console.log(error);
  }
});

//update user

app.put("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const username = req.body.name;
    const email = req.body.email;
    const pass = req.body.pass;
    const updateUser = await pool.query(
      "UPDATE users SET username = $1, email = $2, pass = $3 WHERE userid = $4",
      [username, email, pass, id]
    );

    res.json("User was updated!");
  } catch (error) {
    console.log(error);
  }
});

//delete user
app.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM users WHERE userid = $1", [
      id,
    ]);
    res.json("User was deleted by the God!");
  } catch (error) {
    console.log(error);
  }
});

app.listen(5000, () => {
  console.log("server was started by INSPIRING DEN");
});
