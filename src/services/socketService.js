import io from "socket.io-client";

// Connect to the backend server (adjust URL for production)
const socket = io("http://localhost:5000");

export const sendBusLocation = (data) => {
  socket.emit("mobile_location_update", data);
};

export const listenToLocationUpdates = (callback) => {
  socket.on("location_update_received", callback);
};

export default socket;
