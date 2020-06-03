/*  const net = require('net');


  Establishes connection with the game server


 /* in case I am assigning to the variable connect the value of require(...)
            const connect = require('./client');
    in case I am destructuring the object that I receive from the value of require(...)
            const {connect} = require('./client');
            module.exports = {connect}
 

 
const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.148',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  return conn;
}

console.log('Connecting ...');
connect();
 */

 // play.js
 const { connect } = require('./client');
 console.log('Connecting ...');
 connect();