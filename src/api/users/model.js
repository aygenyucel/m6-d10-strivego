import mongoose from "mongoose";

const { Schema, model } = mongoose;

const usersSchema = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: false },
    role: { type: String, enum: ["host", "guest"], default: "guest" },
  },
  { timestamps: true }
);

export default model("User", usersSchema);
