import express from 'express';

import {postFriend, getFriend, getFriends} from '../controllers/friends.controller.js';

const friendsRouter = express.Router();

friendsRouter.use((req, res, next) => {
  console.log('ip Address : ', req.ip);
  next();
});

friendsRouter.post('/', postFriend);
friendsRouter.get('/', getFriends);
friendsRouter.get('/:friendId', getFriend);

export {
  friendsRouter
}
