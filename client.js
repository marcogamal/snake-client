const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT, // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Welcome to the snek!");
  });

  conn.write("Name: XYZ");
  // conn.write("Move: up")
  // conn.write("Move: right")
  // conn.write("Move: down")
  // conn.write("Move: left")

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });
  return conn;
};

module.exports = connect;
