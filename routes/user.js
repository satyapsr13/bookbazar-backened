const bcrypt = require("bcryptjs");
require("dotenv").config();
const app = require("express").Router();
const jwt = require("jsonwebtoken");
const verifyToken = require("../middleware/auth");
const User = require("../models/googleuser");
app.post("/register", async (req, res) => {
  console.log("inside register");
  // Our register logic starts here
  try {
    // Get user input
    const { displayName, email, photoUrl, id } = req.body;

    // Validate user input
    // if (!(email && password && first_name && last_name)) {
    //   // res.status(400).send("All input is required");
    //   return res.status(400).json({
    //     message: "all inputs required",
    //   });
    // }

    // check if user already exist
    // Validate if user exist in our database
    const oldUser = await User.findOne({
      email,
    });

    if (oldUser) {
      return res.status(400).end("User Already Exist. Please Login");
    }

    //Encrypt user password
    // encryptedPassword = await bcrypt.hash(password, 10);

    // Create user in our database
    const user = await User.create({
      displayName,
      photoUrl,
      id,
      email: email.toLowerCase(), // sanitize: convert email to lowercase
      //   password: encryptedPassword,
    });

    const token = jwt.sign(
      {
        user_id: user._id,
        email,
      },
      process.env.TOKEN_KEY,
      {
        expiresIn: "30d",
      }
    );
    // save user token
    user.token = token;

    // return new user
    res.status(200).json({
      user_: user,
      token: token,
    });
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
});

// app.post("/login", verifyToken, async (req, res) => {
app.post("/login", async (req, res) => {
  // Our login logic starts here
  try {
    // Get user input
    const { email, password } = req.body;

    // Validate user input
    if (!email) {
      res.status(400).send("All input is required");
    }
    // Validate if user exist in our database
    const user = await User.findOne({
      email,
    });

    if (user) {
      // Create token
      const token = jwt.sign(
        {
          user_id: user._id,
          email,
          //   secretOrPrivateKey:process.env.SECRET_KEY,
        },
        process.env.TOKEN_KEY,
        {
          expiresIn: "30d",
        }
      );

      // save user token
      user.token = token;

      // user
      res.status(200).json({ user: user, token: token });
    }
    res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(err);
  }
  // Our register logic ends here
});
module.exports = app;
