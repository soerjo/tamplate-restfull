import express from 'express';
import { sampleHealtCheck, samplePostCheck } from '../controllers/sample';

const sampleRouter = express.Router();

sampleRouter.get('/sample', sampleHealtCheck);
sampleRouter.post('/sample', samplePostCheck);

export { sampleRouter };
