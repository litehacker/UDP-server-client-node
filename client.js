import dgram from "node:dgram";

const client = dgram.createSocket("udp4");
client.send(Buffer.from([1, 5, 7]), 8080, "localhost");
client.on("message", function (msg, rinfo) {
  console.log(msg.toString());
});
