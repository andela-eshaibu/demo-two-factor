/* eslint-disable no-console*/
import express from 'express';
import path from 'path';

const app = express();
// const router = express.Router();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../client/public')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

app.listen(PORT, () => {
  console.log('App is running on localhost: ', PORT);
});
