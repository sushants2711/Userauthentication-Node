require("dotenv").config()
const express = require("express");
const router = require("./router/auth-router")    // router folder
const app = express();
const port = 7030;
const connectDB = require("./utils/db")
const errorMiddlewares = require("./middlewares/error-middlewares")
 

// call our database
connectDB

// Middleware or plugin fpr updated the database 

// Middleware to parse JSON
app.use(express.json());

// Middleware to parse URL-encoded data (for form submissions)
app.use(express.urlencoded({ extended: true }));


app.use("/api/auth", router);

app.use(errorMiddlewares)

app.get("/", (req, res) =>{
    res
    .status(200)
    .send("Welcome to home page")
})

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
});