import mongoose, { Schema } from 'mongoose';

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
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
    latitude: {
      type: Number,
      required: true
    },
    longitude: {
      type: Number,
      required: true
    },
    workAreas: [
      {
        name: {
          type: String,
          required: true
        },
        x: {
          type: Number,
          required: true
        },
        y: {
          type: Number,
          required: true
        },
        height: {
          type: Number,
          required: true
        },
        width: {
          type: Number,
          required: true
        }
      }
    ],
    isActive: {
      type: Boolean,
      default: true
    }
  },
  { versionKey: false, timestamps: true }
);

const headquarterSchema = mongoose.model('Headquarter', schema);

export { headquarterSchema };
