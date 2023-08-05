'use strict';

import {friends} from '../models/friends.model.js';

export function getFriends(req, res) {
  res.json(friends);
}

export function getFriend(req, res) {
  const friendId = Number(req.params.friendId);
  const friend = friends[friendId];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: `No data found for friend ${friendId}`
    });
  }
}

export function postFriend(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: 'Falta nombre'
    });
  }
  const newFriend = {
    name: req.body.name,
    id: friends.length
  }
  friends.push(newFriend);

  res.json(newFriend);
}

