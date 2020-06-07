const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function () {
  const conn = net.createConnection({
    host: '135.23.222.148',
    port: 50541
    });
  

  conn.on('data', function(data) {
    console.log(data.toString());
    conn.end();
  });

  conn.on('connect', function() {
    console.log('Successfully connected to game server');
  });


  conn.on('connect', function () {
    conn.write("Name: DAN");

  });

  
  //interpret incoming data as text
  conn.setEncoding('utf8'); 

  return conn;
}
module.exports = { connect }

