"use client";

import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Box, Typography, CircularProgress, Button } from "@mui/material";
import MUIDataTable from "mui-datatables";
import { useRouter } from "next/navigation";
import tripStore from "@/stores/tripsStore";

const formatDate = (dateString) => {
  const options = {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  return new Date(dateString).toLocaleString("en-US", options).toUpperCase();
};

const TripList = observer(() => {
  const [filter, setFilter] = useState("");
  const [trips, setTrips] = useState([]);

  const router = useRouter();

  const handleNavigation = (tripId) => {
    router.push(`/trip-details/${tripId}`);
  };

  const getTrips = async () => {
    try {
      await tripStore.getTrips(filter);
      setTrips(tripStore.trips);
    } catch (error) {
      console.log("There is an error: ", error);
    }
  };

  useEffect(() => {
    getTrips();
  }, [filter]);

  const filterMapping = {
    All: "",
    Pending: "pending",
    Processing: "processing",
    Accepted: "accepted",
  };

  const columns = [
    { name: "start_point_address", label: "Start Point" },
    { name: "end_point_address", label: "End Point" },
    { name: "status", label: "Status" },
    {
      name: "created",
      label: "Date",
      options: {
        customBodyRender: (value) => formatDate(value),
      },
    },
    {
      name: "id",
      label: "Actions",
      options: {
        customBodyRender: (value) => (
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={() => handleNavigation(value)}
          >
            View Details
          </Button>
        ),
      },
    },
  ];

  const options = {
    filter: true,
    filterType: "dropdown",
    responsive: "standard",
    selectableRows: "none",
    rowsPerPage: 10,
    rowsPerPageOptions: [10, 20, 50],
    download: false,
    print: false,
  };

  return (
    <Box className="md:p-8 min-h-screen">
      {/* Header */}
      <Box textAlign="center" mb={5}>
        <Typography variant="h4" fontWeight="bold" color="primary" mb={2}>
          Trip Activities
        </Typography>
      </Box>

      {/* Filter Buttons */}
      <Box display="flex" justifyContent="center" mb={3} flexWrap="wrap">
        {Object.keys(filterMapping).map((category) => (
          <Button
            key={category}
            onClick={() => setFilter(filterMapping[category])}
            variant={
              filter === filterMapping[category] ? "contained" : "outlined"
            }
            color="primary"
            sx={{
              borderRadius: 20,
              mx: 0.5,
              my: 0.5,
              textTransform: "none",
              fontSize: "0.9rem",
              fontWeight:
                filter === filterMapping[category] ? "bold" : "normal",
              px: 2.5,
            }}
          >
            {category}
          </Button>
        ))}
      </Box>

      {/* Loading Indicator */}
      {tripStore.loading && (
        <Box display="flex" justifyContent="center" alignItems="center" mb={3}>
          <CircularProgress />
          <Typography variant="body2" ml={2}>
            Loading trips...
          </Typography>
        </Box>
      )}

      {/* Error Message */}
      {tripStore.error && (
        <Box display="flex" justifyContent="center" alignItems="center" mb={3}>
          <Typography variant="body2" color="error">
            {tripStore.error}
          </Typography>
        </Box>
      )}

      {/* No Trips Message */}
      {!tripStore.loading && trips.length === 0 && (
        <Box display="flex" justifyContent="center" alignItems="center" mb={3}>
          <Typography variant="body1" color="textSecondary">
            No trips available at the moment.
          </Typography>
        </Box>
      )}

      {/* Data Table */}
      {!tripStore.loading && trips.length > 0 && (
        <MUIDataTable
          title="Trip List"
          data={trips}
          columns={columns}
          options={options}
        />
      )}
    </Box>
  );
});

export default TripList;
