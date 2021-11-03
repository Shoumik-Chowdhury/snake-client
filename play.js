const {connect} = require("./client");

const server = connect();

server.on('connect', () => { // this is how we receive
  console.log(`Connected to server.`);
  server.write("Name: SAC");
});

server.on('data', function(message){ // this is how we receive
  console.log(`Server says: ${message}`);
  });

console.log("Connecting ...");

