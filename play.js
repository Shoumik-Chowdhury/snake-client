const {connect} = require("./client");
const {setupInput} = require('./input')

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