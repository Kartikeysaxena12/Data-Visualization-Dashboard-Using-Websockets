const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:5173", // Replace with your frontend URL
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("New client connected");

  const sendRandomData = () => {
    socket.emit("LineData", generateLineData());
    socket.emit("BarData", generateBarData());
    socket.emit("PieData", generatePieData());
    socket.emit("AreaData", generateAreaData());
  };

  const interval = setInterval(sendRandomData, 1000);

  socket.on("disconnect", () => {
    clearInterval(interval);
    console.log("Client disconnected");
  });
});

server.listen(4000, () => console.log("Server listening on port 4000"));

function generateLineData() {
  return [
    { time: "10:00", value: Math.random() * 100 },
    { time: "10:01", value: Math.random() * 100 },
    { time: "10:02", value: Math.random() * 100 },
  ];
}

function generateBarData() {
  return [
    { name: "A", value: Math.random() * 100 },
    { name: "B", value: Math.random() * 100 },
    { name: "C", value: Math.random() * 100 },
  ];
}

function generatePieData() {
  return [
    { name: "Group A", value: Math.random() * 100 },
    { name: "Group B", value: Math.random() * 100 },
    { name: "Group C", value: Math.random() * 100 },
  ];
}

function generateAreaData() {
  return [
    { time: "10:00", value: Math.random() * 100 },
    { time: "10:01", value: Math.random() * 100 },
    { time: "10:02", value: Math.random() * 100 },
  ];
}
