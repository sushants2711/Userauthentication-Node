const express = require("express");
const router = express.Router();

// const {home, register} = require("../controllers/auth-controller")
const authControllers = require("../controllers/auth-controller")
const validate = require("../middlewares/validate-middleware-auth")
const signUpValidatorSchema  = require("../validators/register-validator")
const loginValidataorSchema = require("../validators/login-validators")


router.route("/").get(authControllers.home);
router.route("/register").post(validate(signUpValidatorSchema), authControllers.register);
router.route("/login").post(validate(loginValidataorSchema), authControllers.login);

module.exports = router;   