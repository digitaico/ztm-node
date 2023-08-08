import express from 'express';

import path from 'path';
import {fileURLToPath} from 'url';

import {friendsRouter} from './routes/friends.router.js';
import {messagesRouter} from './routes/messages.router.js';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use((req, res, next) => {
  const start = Date.now();
  next();
  // actions go here
  const delta = Date.now() - start;
  console.log(`method: ${req.method} url: ${req.baseUrl}${req.url} time: ${delta}ms`);
});

app.get('/', (req, res) => {
  res.render('index', {
    title: '--------Hoola MUndito',
    mensaje: 'Cambio :::::Si buenas este es un parrafo largo,  es la historia de mi vida...'
  });
});
app.use('/site', express.static(path.join(__dirname, 'public')));
app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);

app.listen(PORT, () => {
  console.log(`[Server]: Started and running on port ${PORT}`);
})
