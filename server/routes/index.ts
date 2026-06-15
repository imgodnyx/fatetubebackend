import { version } from '~/utils/config';
import { createServer } from 'node:http';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    message: `Backend is working as expected (v${version})`
  }));
});

const port = process.env.PORT || 10000;

server.listen(port, '0.0.0.0', () => {
  console.log(`Listening on port ${port}`);
});
