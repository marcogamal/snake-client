const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '172.23.54.179',// IP address here,
    port: '50541' // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log('Welcome to the snek!')});
  
    return conn;
};

module.exports = connect