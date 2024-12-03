const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true })


// password compare for login and half of some code is written in our controllers 

userSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
}


// JWT Web Token 

userSchema.methods.generateToken = async function () {
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin
        },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: "28d",
            }
        )
    } catch (error) {
        console.error(error)
    }
}


// it is a method of hashing a password 

// userSchema.pre("save", async function (next) {

//     const user = this;
//     if (!user.isModified("password")) {
//         next();
//     }

//     try {
//         const saltRound = await bcrypt.genSalt(10);
//         const hash_password = await bcrypt.hash(user.password, saltRound);
//         user.password = hash_password
//     }
//     catch (error) {
//         console.log("error is coming form user models hash password ", error);
//         next(error);
//     }
// })

const User = mongoose.model("User", userSchema)

module.exports = User;