const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

//@route    POST api/users
//@desc     register user
//@access   Public
router.post(
  "/",
  [
    check("name", "Name is required")
      .not()
      .isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with at least 6+ characters"
    ).isLength({ min: 6 })
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    //See if user exists

    // Get user's gravatar

    //Encrypt password with bcrypt

    //Return jsonwebtoken - so user can login immediately, and you can't log in without jsonwebtoken

    res.send("User route");
  }
);

module.exports = router;
