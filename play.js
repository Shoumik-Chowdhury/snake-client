const {connect} = require("./client");

const server = connect();
server.on('data', function(message){ // this is how we receive
  console.log(`Server says: ${message}`);
  });

console.log("Connecting ...");

