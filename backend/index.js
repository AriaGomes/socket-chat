const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer();
const io = new Server(httpServer, { cors: {
  origin: "localhost:4000",
  methods: ["GET", "POST"]
 }});

io.on("connection", (socket) => {
  console.log("a user connected");
});

httpServer.listen(4000, () => { console.log("listening on *:4000"); });