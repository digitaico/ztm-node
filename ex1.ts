import * as dotenv from 'dotenv';

dotenv.config();

const a = 'uno dos tres'
const b = process.env.WEB_PORT;
const arg = process.argv[2];

console.log(`@@ ${a}\n${b}\n${arg}\n${__dirname}\n${__filename}`);
