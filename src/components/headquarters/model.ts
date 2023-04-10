import mongoose, { Schema } from 'mongoose';

const schema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'NAME IS REQUIRED putito'],
      unique: true
    },
    address: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      match: /^[\w.%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
    },
    isActive: {
      type: Boolean,
      default: true
    }
  },
  { versionKey: false, timestamps: true }
);

const headquarterSchema = mongoose.model('Headquarter', schema);

export { headquarterSchema };
