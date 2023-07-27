'use strict';

const EventEmitter = require('events');
const hamilton = new EventEmitter();

// subscription to Hamilton for observer 1.
hamilton.on('race win', () => {
  console.log(`Congrats!!! awsome driver!!!`);
});

// subscription to Hamilton for observer 2.
hamilton.on('race win', () => {
  console.log(`Ahhh!!! I've should win`);
});

process.on('exit', (code) => {
  console.log(`Proceso finalizado Codigo : ${code}`);
})

hamilton.emit('race win');
hamilton.emit('race lost');
hamilton.emit('race win');
