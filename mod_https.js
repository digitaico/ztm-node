'use strict';

import {send} from './mods/request.js';
import {read} from './mods/response.js';

const requestData = (url, data) => {
  send(url, data);
  return read();
}

const res = requestData('https://google.com', 'si data..aa');

console.log(res);
