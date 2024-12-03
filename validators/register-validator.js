
const { z } = require("zod");

const signUpValidatorSchema = z.object({
    username: z
        .string({ required_error: "Name is required" })
        .trim()
        .min(2, { message: "Name at least 2 character" })
        .max(255, { message: "Name is not more than 255 characters" }),

    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: " Email is required " })
        .min(2, { message: "Email at least 2 character" })
        .max(255, { message: "Email is not more than 255 characters" }),

    phone: z
        .string({ required_error: "Phone is required" })
        .trim()
        .length(10, { message: "Phone should only be 10 digits" }),

    password: z
        .string({ required_error: "password is required" })
        .trim()
        .min(7, { message: "minimum length should be 7 characters" })
        .max(42, { message: "password not greater than 42 characters" }),

    password2: z
        .string({ required_error: "password is required" })
        .trim()
        .min(7, { message: "minimum length should be 7 characters" })
        .max(42, { message: "password not greater than 42 characters" })

})

module.exports = signUpValidatorSchema;