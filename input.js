// Stores the active TCP connection object.
let connection;

const setupInput = function(conn) {
  const stdin = process.stdin;
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  // your code here
  if (key === 'w') {
    connection.write("Move: up");
  } else if (key === 'a') {
    connection.write("Move: left");
  } else if (key === 'd') {
    connection.write("Move: right");
  } else if (key === 's') {
    connection.write("Move: down");
  }
  if (key === 'm') {
    connection.write("Say: Wazup Lighthouse Labs");
  }
  if (key === '\u0003') {
    process.exit();
  }
};

module.exports = {setupInput};