const net = require('net');

  const connect = () => {
    const conn = net.createConnection({ 
      host: '135.23.222.148',
      port: 50541
    });
    
    conn.on('data', (data) => {
      console.log('Server says: ', data);
    });
    
    conn.on('connect', () => {
      conn.write('Hello from client!');
    });
    
    
    conn.setEncoding('utf8'); // interpret data as text
    
    return conn;
    
  }
   module.exports = {connect}
  
  