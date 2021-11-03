const {connect} = require("./client");

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function () {
  // your code here
  if (key === '\u0003') {
    process.exit();
  }
};

const server = connect();

server.on('connect', () => {
  console.log(`Connected to server.`);
  //setInterval(() => {server.write("Move: up")}, 500); //auto move up
  server.write("Name: SAC");
});

server.on('data', function(message){ // this is how we receive
  console.log(`Server says: ${message}`);
});

console.log("Connecting ...");
setupInput();
