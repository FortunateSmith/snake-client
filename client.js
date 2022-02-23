const net = require('net');
const { IP, PORT } = require('./constants')

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.on("data", (data) => {
    console.log('Server says: ', data);
  });

  conn.on("connect", () => {
    conn.write("Name: LSS");
  });

  conn.on("connect", () => {     // code that does something when the connection is first established
    console.log('Successfully connected to the game server');
  });

  
  conn.setEncoding('utf8');

  return conn;
};


module.exports = {connect};