import { Button, Container, Grid } from "@mantine/core";

import "./App.css";
import Controls from "./components/Controls/Controls";
import FlightCard from "./components/FlightCard/FlightCard";

import data from "../flights.json";
import { useState } from "react";

function App() {
  const [visibleCount, setVisibleCount] = useState(4);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  const flights = data.result.flights.map((flight) => {
    return {
      carrier: flight.flight.carrier.caption,
      price: flight.flight.price.passengerPrices[0].total.amount,
      departureAirport:
        flight.flight.legs[0].segments[0].departureAirport.caption,
      departureCity: flight.flight.legs[0].segments[0].departureCity.caption,
      travelDuration: flight.flight.legs[0].segments[0].travelDuration,
      arrivalCity: flight.flight.legs[0].segments[0].arrivalCity.caption,
      arrivalDate: flight.flight.legs[0].segments[0].arrivalDate,
      departureDate: flight.flight.legs[0].segments[0].departureDate,
      stops: flight.flight.legs[0].segments[0].stops,
      airline: flight.flight.legs[0].segments[0].airline.caption,
    };
  });

  return (
    <Container fluid>
      <Grid>
        {flights.slice(0, visibleCount).map((flightDetails, index) => (
          <Grid.Col key={index} span={4}>
            <FlightCard {...flightDetails} />
          </Grid.Col>
        ))}
      </Grid>
      {visibleCount < flights.length && (
        <Button onClick={handleShowMore} mt="md">
          Show more
        </Button>
      )}
    </Container>
  );
}

export default App;
