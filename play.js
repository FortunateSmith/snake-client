
const { connect} = require('./client');


// establishes a connection with game server
//  const connect = function() {
//    const conn = net.createConnection({
//      host: "localhost",
//      port: 50541,
//    });

//     conn.on("data", (data) => {
//       console.log('Server says: ', data);
//     });
 
//     conn.on("connect", () => {     // code that does something when the connection is first established     
//       console.log('Successfully connected to the game server');
//     });

//  conn.setEncoding('utf8');

//  return conn;
// };

console.log('connecting...');

connect();