const { z } = require("zod");

const loginValidataorSchema = z.object({

    email: z
        .string({required_error: "Email is required" })
        .trim()
        .email({ message: "Email is required" })
        .min(2, { message: "Email at least 2 character" })
        .max(255, { message: "Email is not more than 255 characters" }),

    password: z
        .string({ required_error: "password is required" })
        .trim()
        .min(7, { message: "minimum length should be 7 characters" })
        .max(42, { message: "password not greater than 42 characters" }),

})

module.exports = loginValidataorSchema;