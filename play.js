const {connect} = require("./client");
const {setupInput} = require('./input')

const server = connect();

server.on('connect', () => {
  console.log(`Connected to server.`);
  server.write("Name: SAC");
});

server.on('data', function(message){
  console.log(`Server says: ${message}`);
});

console.log("Connecting ...");

setupInput(server);