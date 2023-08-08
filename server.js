import express from 'express';

import {friendsRouter} from './routes/friends.router.js';
import {messagesRouter} from './routes/messages.router.js';

const app = express();

const PORT = 3000;

app.use((req, res, next) => {
  const start = Date.now();
  next();
  // actions go here
  const delta = Date.now() - start;
  console.log(`method: ${req.method} url: ${req.baseUrl}${req.url} time: ${delta}ms`);
});

app.use(express.json());

app.get('/', (req, res) => {
  res.send('.. Hola Perros!');
});

app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);

app.listen(PORT, () => {
  console.log(`[Server]: Started and runing on port ${PORT}`);
})
