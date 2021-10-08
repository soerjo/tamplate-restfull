import http from 'http';
import exppress, { NextFunction, Request, Response } from 'express';
import loggin from './config/logging';
import config from './config/config';
import { sampleRouter } from './routes/sample.routes';
import bookRoute from './routes/book.routes';
import mongo from 'mongoose';

const NAMESPACE = 'SERVER';
const app = exppress();
const { port, host } = config.server;
const { url, options } = config.db;

/** connected to DB */
mongo
  .connect(url, options)
  .then(() => {
    loggin.info(NAMESPACE, `connected to mongoDB!`);
  })
  .catch(err => {
    loggin.error(NAMESPACE, err.message, err);
  });

/** Loggin the request */
app.use((req, res, next) => {
  loggin.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}]`);

  res.on('finish', () => {
    loggin.info(
      NAMESPACE,
      `METHOD: [${req.method}], URL: [${req.url}], IP: [${req.socket.remoteAddress}], STATUS - [${res.statusCode}]`
    );
  });

  next();
});

/** Parse the request */
app.use(exppress.urlencoded({ extended: false }));
app.use(exppress.json());

/** Rules of our API */
app.use((req: Request, res: Response, next: NextFunction) => {
  res.header('Acces-Control-Allow-Origin', '*');
  res.header('Acces-Control-Allow-Header', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

  if (req.method == 'OPTIONS') {
    res.header('Acces-Control-Allow-Methods', 'GET PATCH DELETE POST PUT');
  }
  next();
});

/** Routes */
app.use('/api/v1/', sampleRouter);
app.use('/api/v1/', bookRoute);

/** Error Handling */
app.use((req, res, next) => {
  const error = new Error('not found!');

  return res.status(404).json({
    message: error.message
  });
});

/** Create the server */
const httpServer = http.createServer(app);
httpServer.listen(port, () => {
  loggin.info(NAMESPACE, `Server running on http://${host}:${port}`);
});
