const User = require("../models/user-model")

const bcrypt = require("bcryptjs")

const home = async (req, res) => {

    try {
        res
            .status(200)
            .send("Best practise of Mern !!!")

    } catch (error) {
        res
            .status(400)
            .send({ err: "error is occured form home page of controllers" })
        console.log(error);


    }
}

async function register(req, res) {

    try {
        const body = req.body;
        

        if (!body || !body.username || !body.email || !body.phone || !body.password || !body.password2) {
            return res.status(400).json({ msg: "All fields are required" })
        }

        const existingUser = await User.findOne({ email: body.email });
        if (existingUser) {
            return res.status(403).json({ msg: "Please enter a unique email" });
        }

        const phoneValidation = await User.findOne({ phone: body.phone });
        if (phoneValidation) {
            return res.status(403).json({ msg: "Please enter a unique phone number" });
        }

        if (body.password != body.password2) {
            return res.status(400).json({ msg: "Password is not watch, Watch carefully and try again" })
        }

        // hash the password 

        const saltRound = 6;    // it is basically a value by which password is encrypt 
        const hash_password = await bcrypt.hash(body.password, saltRound);


        const user_auth_data = await User.create({
            username: body.username,
            email: body.email,
            phone: body.phone,
            password: hash_password,                 //hash_password --  store password in hash   // body.password--is use when we can hashing in our model file
            isAdmin: body.is_admin,
        });

        return res.status(201).json({
            msg: "User Created",
            id: user_auth_data._id.toString(),
            password: user_auth_data.password,
            token: await user_auth_data.generateToken(),      // It can generate the token
        })

    }
    catch (error) {
        console.log("Error is occured from registration form ", error);
        // return res.status(500).json({ error: "Internal Server error" })
        const status = 500;
        const message = "Internal Server Error"

        error = {
            status,
            message,
        }
        
        next(error)
    }
}


// login

const login = async (req, res) => {
    try {

        const body = req.body;
        console.log(body);
        
        if (!body || !body.email ||  !body.password ) {
            return res.status(400).json({ msg: "All fields are required" })
        }


        email = body.email;
        password = body.password;

        const userExist = await User.findOne({ email: body.email });
        if (!userExist) {
            return res.status(403).json({ msg: "Please enter your registered email and password" });
        }

        // const useris = await bcrypt.compare(password, userExist.password);    // ot can also be written in our user models 

        const useris = await userExist.comparePassword(password);    // now we can define the function in our user models


        if (useris) {
            return res
                .status(200)
                .json({
                    msg: "Login Successful",
                    userId: userExist._id.toString(),
                    token: await userExist.generateToken(),
                })
        }
        else {
            return res
                .status(401)
                .json({
                    msg: "Invalid credentials, check again"
                })
        }

    } catch (error) {
        console.log("Error occured from login controller form", error);
        res.status(500).json({ error: "Internal Server error" })
    }
}

module.exports = {
    home,
    register,
    login,
}