import express from 'express';
import {getMessages, postMessage} from './controllers/messages.controller.js';
import {getFriends, getFriendById, postFriend} from './controllers/friends.controller.js';

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  const start = Date.now();
  next();
  // actions go here
  const delta = Date.now() - start;
  console.log(`method: ${req.method} url: ${req.url} time: ${delta}ms`);
});
app.use(express.json());

app.get('/', (req, res) => {
  res.send('.. Hola Perros!');
});

app.get('/messages', getMessages);
app.post('/messages', postMessage);

app.get('/friends', getFriends);
app.get('/friends/:friendId', getFriendById);
app.post('/friends', postFriend);

app.listen(PORT, () => {
  console.log(`[Server]: Started and runing on port ${PORT}`);
})
