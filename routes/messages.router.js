'use strict';

import express from 'express';

import {postMessage, getMessages} from '../controllers/messages.controller.js';

const messagesRouter = express.Router();

messagesRouter.use((req, res, next) => {
  console.log('ip Address : ', req.ip);
  next();
});

messagesRouter.post('/', postMessage);
messagesRouter.get('/', getMessages);

export {
  messagesRouter
}
