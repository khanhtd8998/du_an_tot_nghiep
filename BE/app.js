const express = require('express');
const connectDB = require('./config/db.config');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

connectDB();

app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));

app.get('/', (req, res) => {
  res.send('API is running');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
