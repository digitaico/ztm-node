import express from 'express';

const app = express();
const PORT = 3000;

const friends = [
  {id: 0, name: 'Charles Munger'},
  {id: 1, name: 'Warren Buffet'},
  {id: 2, name: 'Benjamin Graham'},
  {id: 4, name: 'Steven Cohen'}
];

app.get('/', (req, res) => {
  res.send('.. Hola Perros!');
});

app.get('/friends', (req, res) => {
  res.json(friends);
});

app.get('/friends/:friendId', (req, res) => {
  const friendId = Number(req.params.friendId);
  const friend = friends[friendId];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: `No data found for friend ${friendId}`
    });
  }
});

app.get('/messages', (req, res) => {
  res.send('<ul><li>Uno</li><li>Dos</li></ul>');
});


app.listen(PORT, () => {
  console.log(`[Server]: Started and runing on port ${PORT}`);
})
