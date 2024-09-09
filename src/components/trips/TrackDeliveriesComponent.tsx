"use client";
import { useState } from "react";
import { MapContainer, TileLayer, Marker, Polyline, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { tripsData } from "@/api";
import {
    Box,
    Container,
    Grid,
} from "@mui/material";
import TripInfo from "./TripInfoComponent";
import RatingComponent from "./RatingComponent";

const customIcon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

export default function TrackDeliveryComponentWithRating() {
    if (typeof window === "undefined") {
        return null;
    }

    const [riderLocation, setRiderLocation] = useState({
        lat: tripsData.current_location.coordinates[1],
        lng: tripsData.current_location.coordinates[0],
    });

    const shopLocation = {
        lat: tripsData.start_point.coordinates[1],
        lng: tripsData.start_point.coordinates[0],
    };

    const customerLocation = {
        lat: tripsData.end_point.coordinates[1],
        lng: tripsData.end_point.coordinates[0],
    };

    const pathCoordinates = [shopLocation, riderLocation, customerLocation];

    return (
        <Box className="relative bg-gray-50 min-h-screen">
            <Grid container spacing={2} style={{ height: "100vh" }}>
                {/* Map Section */}
                <Grid item xs={12} md={12} style={{ height: "100%" }}>
                    <MapContainer center={riderLocation} zoom={14} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={shopLocation} icon={customIcon}>
                            <Popup>📍 Shop: {tripsData.start_point_address}</Popup>
                        </Marker>
                        <Marker position={riderLocation} icon={customIcon}>
                            <Popup>🏍️ Driver: {tripsData.driver.full_name}</Popup>
                        </Marker>
                        <Marker position={customerLocation} icon={customIcon}>
                            <Popup>🏠 Customer: {tripsData.end_point_address}</Popup>
                        </Marker>
                        <Polyline positions={pathCoordinates} color="red" />


                        <Container className="web-view">
                            {/* Trip Information Section */}
                            <TripInfo />
                            {/* Rating Section */}
                            <RatingComponent />
                        </Container>

                    </MapContainer>
                </Grid>
            </Grid>
        </Box>
    );
}
