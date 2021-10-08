import mongoose, { Schema } from 'mongoose';
import IBook from '../interfaces/book.interface';

const BookSchema: Schema<IBook> = new Schema(
  {
    title: { type: String, required: true, unique: true },
    author: { type: String, required: true },
    extraInformation: { type: String }
  },
  {
    timestamps: true
  }
);

export default mongoose.model<IBook>('Book', BookSchema);
