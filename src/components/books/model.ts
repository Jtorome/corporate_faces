import mongoose, { Schema } from 'mongoose';

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  location: {
    type: {
      type: String,
      required: true
    },
    coordinates: [
      {
        type: Number,
        requires: true
      }
    ]
  },
  languaje: {
    type: String,
    required: true
  },
  pages: {
    type: String,
    required: true
  },
  isbn: {
    type: String,
    required: true
  },
  author: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
});

const bookSchema = mongoose.model('Book', schema);

export { bookSchema };
