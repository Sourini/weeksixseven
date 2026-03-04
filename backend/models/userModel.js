const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    gender: {
      type: Number,
      required: true,
    },
    date_of_birth: {
      type: Date,
      required: true,
    },
    accountType: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

// add virtual field id
userSchema.set('toJSON', {
  virtuals: true,
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
    return ret;
  }
});

module.exports = mongoose.model("User", userSchema);
