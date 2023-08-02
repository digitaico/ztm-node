import * as http from 'http';

const PORT = 3000;

const server = http.createServer();

server.on('request', (req, res) => {
  if (req.url === '/friends') {
    res.writeHead(200, {
      'Content-Type': 'text/json',
    });
    res.end(JSON.stringify({
      id: 1, name: 'Jorge Eduardo', status: true, role: 'Backend Developer', hobbie: 'runninG'
    }));
  } else if (req.url === '/messages') {
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
