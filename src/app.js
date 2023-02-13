const express = require("express");
const app = express();
const mongoose = require("mongoose");
const uri = "mongodb://localhost:27017/registration";
const User = require("./models/user.model");

const port = 8000;

mongoose.set("strictQuery",true);
mongoose.connect(uri, async () => {
    console.log("MongoDB connected");
    await User.collection.drop();// Since this a dev setup

    const user = await User.create({
        name: "Vishwa Mohan",
        userId: "admin",
        password: "avcbhs",
        email: "kankvish@gmail.com"
        
    });
    console.log("admin created", user);
  });
  

app.get("/", (req, res) => {
    res.send("hello fuckers")
})

app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
})


