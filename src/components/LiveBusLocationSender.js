import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from "react-native";
import DropDownPicker from "react-native-dropdown-picker"; // For Dropdown Picker
import io from "socket.io-client";
import axios from "axios";

// Socket connection to backend
const socket = io("https://meetrix-backend.vercel.app");

// Example of route stops (can be dynamic or fetched from a server)
const stops = [
  { id: 1, name: "Miyapur", lat: 17.4981608, lng: 78.3567628 },
  { id: 2, name: "Mayuri Nagar", lat: 17.5128, lng: 78.3686 },
  { id: 3, name: "Nizampet", lat: 17.5164805, lng: 78.3766275 },
  { id: 4, name: "JNTUH", lat: 17.495924, lng: 78.392632 },
];

// Mock bus data (to be used when no buses are available)
const mockBuses = [{ id: 0, name: "Mock Bus 1" }];

// Example of bus and route data (ensure this data is correctly passed or fetched)
const buses = [
  { id: 1, name: "Bus 1" },
  { id: 2, name: "Bus 2" },
  { id: 3, name: "Bus 3" },
];

const routes = [
  { id: "route-1", name: "Route 1" },
  { id: "route-2", name: "Route 2" },
  { id: "route-3", name: "Route 3" },
];

// Function to fetch the route between two stops using OSRM API
const fetchRoute = async (start, end) => {
  const url = `https://router.project-osrm.org/route/v1/driving/${start.lng},${start.lat};${end.lng},${end.lat}?overview=full&geometries=geojson`;
  try {
    const response = await axios.get(url);
    const data = response.data;
    if (data.routes && data.routes.length > 0) {
      return data.routes[0].geometry.coordinates.map((coord) => ({
        lat: coord[1],
        lng: coord[0],
      }));
    } else {
      console.error("No route found from OSRM.");
      return [];
    }
  } catch (error) {
    console.error("Error fetching OSRM route:", error);
    return [];
  }
};

// Function to simulate bus movement along the route and send location updates
const simulateBusMovement = async (
  fromStop,
  toStop,
  bus_id,
  route_id,
  intervalMs = 1000
) => {
  const routeCoords = await fetchRoute(fromStop, toStop); // Fetch the route from OSRM
  if (routeCoords.length === 0) return;

  // Simulate the movement along the route
  for (let index = 0; index < routeCoords.length; index++) {
    const point = routeCoords[index]; // Get current coordinate from the route

    const coords = {
      bus_id,
      route_id,
      current_stop: fromStop.name,
      next_stop: toStop.name,
      lat: point.lat,
      lng: point.lng,
    };

    // Send the updated bus location to the server
    console.log("📡 Sending location:", coords);
    socket.emit("mobile_location_update", coords);

    // Wait before sending the next coordinate
    await new Promise((resolve) => setTimeout(resolve, intervalMs));
  }

  console.log(`✅ Reached ${toStop.name}`);
};

const LiveBusLocationSender = () => {
  const [isTracking, setIsTracking] = useState(false);
  const [currentStopIndex, setCurrentStopIndex] = useState(0);
  const [selectedBusId, setSelectedBusId] = useState(null);
  const [selectedRouteId, setSelectedRouteId] = useState(null);

  // Dropdown state for controlling open/close state of the dropdown
  const [openBus, setOpenBus] = useState(false);
  const [openRoute, setOpenRoute] = useState(false);

  // Handle the case where no buses are available
  const availableBuses = buses.length > 0 ? buses : mockBuses;

  // Start the tracking simulation through the entire route
  const startTracking = () => {
    if (isTracking || !selectedBusId || !selectedRouteId) return;

    setIsTracking(true);
    setCurrentStopIndex(0);

    console.log("🚌 Starting route tracking...");

    let index = 0;
    const moveToNextStop = () => {
      if (index < stops.length - 1) {
        simulateBusMovement(
          stops[index],
          stops[index + 1],
          selectedBusId,
          selectedRouteId
        );
        setTimeout(moveToNextStop, 31000); // Interval between stops (31 sec)
        index++;
      } else {
        console.log("🏁 Route completed!");
        setIsTracking(false);
      }
    };

    moveToNextStop();
  };

  // Stop the tracking simulation
  const stopTracking = () => {
    setIsTracking(false);
    console.log("❌ Stopped route tracking.");
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Image
          source={require("../../public/meetrix_logo.png")} // Assuming logo is in the public directory
          style={styles.logo}
        />
        <Text style={styles.header}>Meetrix Bus Tracker</Text>
      </View>

      {/* Select Bus Dropdown */}
      <Text style={styles.dropdownLabel}>Select Bus</Text>
      <DropDownPicker
        open={openBus}
        value={selectedBusId}
        items={availableBuses.map((bus) => ({
          label: bus.name,
          value: bus.id,
        }))}
        setOpen={setOpenBus}
        setValue={setSelectedBusId}
        placeholder="Select Bus"
        containerStyle={styles.dropdownContainer}
        style={styles.dropdown}
        labelStyle={styles.dropdownLabelText}
        dropDownStyle={styles.dropDownStyle}
      />

      {/* Select Route Dropdown */}
      <Text style={styles.dropdownLabel}>Select Route</Text>
      <DropDownPicker
        open={openRoute}
        value={selectedRouteId}
        items={routes.map((route) => ({
          label: route.name,
          value: route.id,
        }))}
        setOpen={setOpenRoute}
        setValue={setSelectedRouteId}
        placeholder="Select Route"
        containerStyle={styles.dropdownContainer}
        style={styles.dropdown}
        labelStyle={styles.dropdownLabelText}
        dropDownStyle={styles.dropDownStyle}
      />

      {/* Start Tracking Button */}
      <TouchableOpacity
        onPress={startTracking}
        disabled={isTracking || !selectedBusId || !selectedRouteId}
        style={[styles.button, isTracking ? styles.buttonDisabled : styles.buttonActive]}
      >
        <Text style={styles.buttonText}>
          {isTracking ? "Sharing in Progress..." : "Start Location sharing"}
        </Text>
      </TouchableOpacity>

      {/* Stop Tracking Button */}
      {isTracking && (
        <TouchableOpacity
          onPress={stopTracking}
          style={[styles.button, styles.buttonStop]}
        >
          <Text style={styles.buttonText}>Stop Sharing</Text>
        </TouchableOpacity>
      )}

      {/* Status Text */}
      {isTracking && (
        <Text style={styles.statusText}>
          Moving from {stops[currentStopIndex]?.name} →{" "}
          {stops[currentStopIndex + 1]?.name || "End"}
        </Text>
      )}

      {/* Horizontal Line */}
      {isTracking && <View style={styles.line} />}

      {/* Estimated timings and stops */}
      {isTracking && (
        <View style={styles.estimationContainer}>
          <Text style={styles.estimationText}>Estimated Timings:</Text>
          {stops.map((stop, index) => (
            <Text style={styles.stopText} key={stop.id}>
              {stop.name} — Estimated Arrival: {index * 5 + " mins"} {/* Adjust based on your logic */}
            </Text>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

// Styles for React Native
const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: "#F4F4F4",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20, // This ensures it stays at the top
    marginBottom: 20,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#002133",
  },
  dropdownLabel: {
    fontSize: 18,
    color: "#002133",
    marginBottom: 8,
    textAlign: "left",
    width: "100%",
  },
  dropdownContainer: {
    height: 50,
    width: "100%",
    marginBottom: 16,
  },
  dropdown: {
    backgroundColor: "#fafafa",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  dropdownLabelText: {
    color: "#002133",
  },
  dropDownStyle: {
    backgroundColor: "#fff",
    zIndex: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  buttonActive: {
    backgroundColor: "#4CAF50",
  },
  buttonDisabled: {
    backgroundColor: "#BDBDBD",
  },
  buttonStop: {
    backgroundColor: "#F44336",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  statusText: {
    fontSize: 16,
    color: "#002133",
    marginTop: 20,
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 20,
  },
  estimationContainer: {
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    width: "100%",
  },
  estimationText: {
    fontSize: 18,
    color: "#002133",
    fontWeight: "bold",
    marginBottom: 10,
  },
  stopText: {
    fontSize: 16,
    color: "#555",
    marginBottom: 5,
  },
});

export default LiveBusLocationSender;
