import express from 'express';
import { getAllBooks, createBook } from '../controllers/book.controller';

const bookRoute = express.Router();

bookRoute.get('/books', getAllBooks);
bookRoute.post('/book', createBook);

export default bookRoute;
