import mongoose, { Schema } from 'mongoose';

const schema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      unique: true,
      required: true
    },
    telephone: {
      type: String,
      required: true
    },
    position: {
      type: String,
      required: true
    },
    photo: {
      type: String,
      required: true
    },
    workArea: {
      type: String,
      required: true
    },
    headquarter: {
      type: mongoose.Types.ObjectId,
      ref: 'Headquarter',
      required: true
    },
    skills: [
      {
        type: String
      }
    ],
    isActive: {
      type: Boolean,
      default: true
    }
  },
  { versionKey: false, timestamps: true }
);

const employeeSchema = mongoose.model('Employee', schema);

export { employeeSchema };
