// curl -k https://localhost:8000/
const https = require('https');
const fs = require('fs');

const certificate = {
  key: fs.readFileSync('test/fixtures/keys/agent2-key.pem'),
  cert: fs.readFileSync('test/fixtures/keys/agent2-cert.pem')
};

https.createServer(certificate, app);