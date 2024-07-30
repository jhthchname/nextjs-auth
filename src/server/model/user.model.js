import mongoose, { Schema } from "mongoose";

const UserSchema = new mongoose.Schema({
  password: {
    type: String,
    required: true,
  },
  salt: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    default: "user",
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  phone: {
    type: String,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
  updatedOn: {
    type: Date,
    default: Date.now,
  },
  verify: {
    status: {
      type: Boolean,
      default: false,
    },
    token: {
      type: String,
    },
  },
  approveBy: {
    type: Schema.ObjectId,
  },
  token: {
    type: String,
  },
});

export default mongoose.models.users || mongoose.model("users", UserSchema);
