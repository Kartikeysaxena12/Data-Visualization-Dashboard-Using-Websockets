import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  RadialBarChart,
  RadialBar,
} from "recharts";
import socketIOClient from "socket.io-client";
import "./Websocket.css"; // Ensure you create this CSS file

const ENDPOINT = "http://127.0.0.1:4000";

const WebSocketComponent = () => {
  const [lineData, setLineData] = useState([]);
  const [barData, setBarData] = useState([]);
  const [pieData, setPieData] = useState([]);
  const [areaData, setAreaData] = useState([]);
  const [radialBarData, setRadialBarData] = useState([
    { name: "Item 1", value: 100, fill: "#8884d8" },
    { name: "Item 2", value: 300, fill: "#83a6ed" },
    { name: "Item 3", value: 200, fill: "#8dd1e1" },
    { name: "Item 4", value: 278, fill: "#82ca9d" },
  ]);
  const [tableData, setTableData] = useState([
    { name: "Item 1", value: 100, time: "10:00" },
    { name: "Item 2", value: 200, time: "10:01" },
    { name: "Item 3", value: 300, time: "10:02" },
    { name: "Item 4", value: 400, time: "10:03" },
  ]);

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);

    socket.on("LineData", (data) => setLineData(data));
    socket.on("BarData", (data) => setBarData(data));
    socket.on("PieData", (data) => setPieData(data));
    socket.on("AreaData", (data) => setAreaData(data));
    socket.on("RadialBarData", (data) => setRadialBarData(data));

    return () => socket.disconnect();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Real-Time Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
        <div className="p-4 bg-white shadow-lg rounded-lg">
          <LineChart width={280} height={200} data={lineData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </div>
        <div className="p-4 bg-white shadow-lg rounded-lg">
          <BarChart width={280} height={200} data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </div>
        <div className="p-4 bg-white shadow-lg rounded-lg">
          <PieChart width={280} height={200}>
            <Pie
              data={pieData}
              cx={140}
              cy={100}
              labelLine={false}
              label
              outerRadius={60}
              fill="#8884d8"
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={["#0088FE", "#00C49F", "#FFBB28", "#FF8042"][index % 4]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
        <div className="p-4 bg-white shadow-lg rounded-lg">
          <AreaChart width={280} height={200} data={areaData}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="time" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorValue)"
            />
          </AreaChart>
        </div>
      </div>
      <h2 className="text-3xl font-bold mb-4">Additional Data</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-bold mb-2">Data Table</h3>
          <table className="min-w-full bg-white">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="w-1/4 py-2 px-4 uppercase font-semibold text-sm">
                  #
                </th>
                <th className="w-1/4 py-2 px-4 uppercase font-semibold text-sm">
                  Name
                </th>
                <th className="w-1/4 py-2 px-4 uppercase font-semibold text-sm">
                  Value
                </th>
                <th className="w-1/4 py-2 px-4 uppercase font-semibold text-sm">
                  Time
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {tableData.map((row, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="w-1/4 py-2 px-4">{index + 1}</td>
                  <td className="w-1/4 py-2 px-4">{row.name}</td>
                  <td className="w-1/4 py-2 px-4">{row.value}</td>
                  <td className="w-1/4 py-2 px-4">{row.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Radial Bar Chart</h3>
          <RadialBarChart
            width={280}
            height={280}
            innerRadius="10%"
            outerRadius="80%"
            data={radialBarData}
            startAngle={180}
            endAngle={0}
          >
            <RadialBar
              minAngle={15}
              label={{ position: "insideStart", fill: "#fff" }}
              background
              clockWise={true}
              dataKey="value"
            />
            <Tooltip />
            <Legend />
          </RadialBarChart>
        </div>
      </div>
    </div>
  );
};

export default WebSocketComponent;
