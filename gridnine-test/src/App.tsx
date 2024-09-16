import { Button, Container, Flex, Grid } from "@mantine/core";

import "./App.css";
import Controls from "./components/Controls/Controls";
import FlightCard from "./components/FlightCard/FlightCard";

import data from "../flights.json";
import { useState } from "react";
import { filterFlights, sortFlights } from "./utils";

function App() {
  const [visibleCount, setVisibleCount] = useState(2);
  const [sortBy, setSortBy] = useState("ascending");

  const [filters, setFilters] = useState({
    priceRange: [0, 1000000],
    airlines: [],
  });
  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 2);
  };

  const flights = data.result.flights.map((flight) => {
    const segmentsData = flight.flight.legs.flatMap(
      (leg: { segments: any[] }) =>
        leg.segments.map((segment: any) => ({
          departureCity: segment.departureCity?.caption,
          departureAirport: segment.departureAirport.caption,
          departureAirportUid: segment.departureAirport?.uid,
          arrivalCity: segment.arrivalCity?.caption,
          arrivalAirport: segment.arrivalAirport?.caption,
          arrivalAirportUid: segment.arrivalAirport?.uid,
          arrivalDate: segment.arrivalDate,
          departureDate: segment.departureDate,
          travelDuration: segment.travelDuration,
          airline: segment.airline.caption,
          stops: segment.stops,
        }))
    );

    return {
      carrier: flight.flight.carrier.caption,
      price: flight.flight.price.total.amount,
      segments: segmentsData,
    };
  });

  const filteredFlights = filterFlights(flights, filters);
  const sortedFlights = sortFlights(filteredFlights, sortBy);

  return (
    <Container fluid>
      <Grid>
        <Grid.Col span={3}>
          <Flex
            mih={50}
            p="md"
            gap="md"
            justify="flex-start"
            align="flex-start"
            direction="column"
            wrap="wrap"
          >
            <Controls
              sortBy={sortBy}
              setSortBy={setSortBy}
              filters={filters}
              setFilters={setFilters}
            />
          </Flex>
        </Grid.Col>
        <Grid.Col span={9}>
          <Grid>
            {sortedFlights
              .slice(0, visibleCount)
              .map((flightDetails, index) => (
                <Grid.Col key={index} span={6}>
                  <FlightCard {...flightDetails} />
                </Grid.Col>
              ))}
          </Grid>
          {visibleCount < flights.length && (
            <Button onClick={handleShowMore} mt="md">
              ПОКАЗАТЬ ЕЩЕ
            </Button>
          )}
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default App;
