'use strict';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function getMessages(req, res) {
  //  res.send('<ul><li>Uno</li><li>Dos</li></ul>');
  res.sendFile(path.join(__dirname, '..', 'public', 'images', 'pics', 'photo_1.jpg'));
}

export function postMessage(req, res) {
  console.log('... Uploading message!');
}
