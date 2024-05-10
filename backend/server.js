require('dotenv').config();
const http = require('http');
const index = require('./index');

const server = http.createServer(index);

server.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
