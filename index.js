import * as http from 'http';

const PORT = 3000;

const server = http.createServer();

const friends = [
  {id: 0, name: 'Charles Munger'},
  {id: 1, name: 'Warren Buffet'},
  {id: 2, name: 'Benjamin Graham'},
  {id: 4, name: 'Steven Cohen'}
];

server.on('request', (req, res) => {
  const items = req.url.split('/');

  if (req.method === 'POST' && items[1] === 'friends') {
    req.on('data', (data) => {
      const friend = data.toString();
      //console.log('Request: ', friend);
      friends.push(JSON.parse(friend));
    });
    req.pipe(res);
  } else if (req.method === 'GET' && items[1] === 'friends') {
    res.writeHead(200, {
      'Content-Type': 'text/json',
    });
    if (items.length === 3) {
      const friendIndex = Number(items[2]);
      res.end(JSON.stringify(friends[friendIndex]))
    } else {
      res.end(JSON.stringify(friends));
    }
  } else if (req.method === 'GET' && items[1] === 'messages') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body>');
    res.write('<h1>Messages List</h1>');
    res.write('<div>');
    res.write('<ul>');
    res.write('<li>Consider donating for our cause!</li>');
    res.write('<li>Keep away of unsolicited donation requests!</li>');
    res.write('<li>travelling to caribbean islands is pleasant</li>');
    res.write('<li>Don\'t forget to ask for your degree certificate</li>');
    res.write('</ul>');
    res.write('</div>');
    res.write('</body>');
    res.write('</html>');
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`[SERVER]: Running on localhost:${PORT}`);
});
