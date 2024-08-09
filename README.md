## Data Visualization Using WebSockets

## Overview

Data Visualization Using WebSockets** is a real-time dashboard application that showcases how to visualize dynamic data using React, WebSockets, and Recharts. This project connects a React frontend to a Node.js backend using Socket.IO to display real-time updates in various chart formats, such as line, bar, pie, area, and radial bar charts.

## Features
- Real-Time Data: Uses WebSockets to push real-time data updates to the client.
- Interactive Charts: Visualize data using a variety of chart types with Recharts.
- Responsive Design: Built with Tailwind CSS to ensure the dashboard is mobile-friendly and responsive.
- Customizable Components: Easily extend and customize components to fit different data visualization needs.

## Technologies Used

- Frontend: React, Tailwind CSS, Recharts
- Backend: Node.js, Express, Socket.IO
- Real-Time Communication: Socket.IO

## Project Structure

- Frontend: Contains the React application that connects to the WebSocket server to receive data and renders charts.
- Backend: Consists of a Node.js server that generates random data at intervals and emits them via WebSockets.

## Getting Started

## Prerequisites

- Node.js and npm installed on your system
- Basic understanding of React and Node.js

## Installation

1. Clone the repository

   ```bash
   git clone https://github.com/yourusername/data-visualization-websockets.git
   cd data-visualization-websockets
   ```

2. Install dependencies

   For the backend:
   ```bash
   cd backend
   npm install
   ```

   For the frontend:
   ```bash
   cd ../frontend
   npm install
   ```

3. Run the backend server

   ```bash
   cd backend
   node server.js
   ```

4. Run the frontend application

   ```bash
   cd ../frontend
   npm start
   ```

5. Access the application

   Open your web browser and navigate to `http://localhost:5173`.

## Usage

Once the application is running, the dashboard will display various charts that update in real-time. The data updates every second, demonstrating how to handle dynamic data streams using WebSockets.

## Customization

- Charts: Modify the chart configurations in the React component files to fit your data visualization needs.
- Styles: Customize styles using Tailwind CSS classes or modify the `Websocket.css` file for additional styling.
- Data Source: Update the backend to connect to a real data source for more meaningful visualizations.

## Troubleshooting

- Connection Issues: Ensure the WebSocket server is running and accessible at the specified endpoint.
- Chart Rendering: Check console logs for any errors related to chart data or rendering.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Acknowledgments

- [Socket.IO](https://socket.io) for real-time data transmission.
- [Recharts](https://recharts.org) for charting components.
- [Tailwind CSS](https://tailwindcss.com) for utility-first styling.
