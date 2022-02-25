const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '172.23.54.179',// IP address here,
    port: '50541' // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log('Welcome to the snek!')

});

conn.write('Name: XYZ')
// conn.write("Move: up")
// conn.write("Move: right")
// conn.write("Move: down")
// conn.write("Move: left")

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
    return conn;
};

module.exports = connect