import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import Book from '../models/book.model';
// import logging from '../config/logging';

const NAMESPACE = 'BOOK-CONTROLLER';

export const createBook = (req: Request, res: Response, next: NextFunction) => {
  const { title, author } = req.body;

  const book = new Book({
    _id: new mongoose.Types.ObjectId(),
    title,
    author
  });

  return book
    .save()
    .then(results => {
      return res.status(201).send({
        book: results
      });
    })
    .catch(err => {
      return res.status(500).json({
        message: err.message,
        err
      });
    });
};

export const getAllBooks = (req: Request, res: Response, next: NextFunction) => {
  Book.find()
    .exec()
    .then(result => {
      return res.status(200).send({
        books: result,
        count: result.length
      });
    })
    .catch(error => {
      return res.status(500).json({
        message: error.message,
        error
      });
    });
};
