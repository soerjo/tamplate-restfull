import dotenv from 'dotenv';

dotenv.config();

const MONGOOSE_OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  socketTimeoutMS: 3000,
  keepAlive: true,
  autoIndex: false,
  retryWrites: false
};

const DB_USER = process.env.DB_USER || 'soerjoAdmin';
const DB_PASSWORD = process.env.DB_PASSWORD || 'akucintayesus';
const DB_DATABASE = process.env.DB_DATABASE || 'restfull-api';

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 8000;

const SERVER = {
  host: SERVER_HOSTNAME,
  port: SERVER_PORT
};

const MONGO = {
  options: MONGOOSE_OPTIONS,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  url: `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.olcqn.mongodb.net/${DB_DATABASE}?retryWrites=true&w=majority`
};

const config = {
  server: SERVER,
  db: MONGO
};

export default config;
