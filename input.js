// setup interface to handle user input from stdin
let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function (key) {
    if (key === '\u0003') {
      process.exit();
    }
    if (key === '\u0077') {
      conn.write('Move: up');
    }
    if (key === '\u0064') {
      conn.write('Move: right');
    }
    if (key === '\u0061') {
      conn.write('Move: left');
    }
    if (key === '\u0073') {
      conn.write('Move: down');
    }
    if (key === '\u006D') {
      conn.write("Say: fnrr")
    } 
  };

  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = {setupInput}