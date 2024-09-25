import connectDB from './config/db.config.js';
import dotenv from 'dotenv';
import app from './app.js';
dotenv.config();

const DB = process.env.DATABASE_LOCAL;
const PORT = process.env.PORT;

connectDB(DB);

app.listen(PORT, () => {
  console.log(`The server is listening at ${PORT}...`);
});
