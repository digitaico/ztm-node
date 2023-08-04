'use strict';

export function getMessages(req, res) {
  res.send('<ul><li>Uno</li><li>Dos</li></ul>');
}

export function postMessage(req, res) {
  console.log('... Uploading message!');
}
