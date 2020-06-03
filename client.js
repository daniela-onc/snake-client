const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: ABC');
    for (let x = 0; x < 10; x++) {
      setTimeout(() => {
        conn.write('Move: up');
      }, 100 * x);
    }
  });
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
};

module.exports = { connect };
<<<<<<< HEAD

=======
>>>>>>> 923ee07f2fabae28a7f4c5ceca510606c0331c65

