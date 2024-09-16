import {
  FlightDetails,
  SegmentDetails,
} from "./components/FlightCard/FlightCard";

export const getFlightsData = (data) => {
  const flights = [];

  data.result.flights.forEach((flight) => {
    flight.flight.legs.forEach((leg) => {
      leg.segments[0].forEach((segment) => {
        flights.push({
          carrier: flight.flight.carrier.caption,
          price: parseFloat(
            flight.flight.price.passengerPrices[0].total.amount
          ),
          departureAirport: segment.departureAirport.caption,
          departureCity: segment.departureCity.caption,
          travelDuration: segment.travelDuration,
          arrivalCity: segment.arrivalCity.caption,
          arrivalDate: segment.arrivalDate,
          departureDate: segment.departureDate,
          stops: segment.stops,
          airline: segment.airline.caption,
        });
      });
    });
  });

  return flights;
};

interface Leg {
  segments: SegmentDetails[];
}

export const sortFlights = (flights: FlightDetails[], sortBy: string) => {
  switch (sortBy) {
    case "ascending":
      return flights.sort((a, b) => a.price - b.price);
    case "descending":
      return flights.sort((a, b) => b.price - a.price);
    case "flightDuration":
      return flights.sort(
        (a, b) =>
          a.segments.reduce((acc, seg) => acc + seg.travelDuration, 0) -
          b.segments.reduce((acc, seg) => acc + seg.travelDuration, 0)
      );
    default:
      return flights;
  }
};

export const filterFlights = (flights: FlightDetails[], filters: any) => {
  const { priceRange, airlines } = filters;

  return flights.filter((flight) => {
    const flightPrice = parseFloat(flight.price);

    const isInPriceRange =
      flightPrice >= priceRange[0] && flightPrice <= priceRange[1];

    const isInAirlines =
      airlines.length === 0 || airlines.includes(flight.carrier);

    return isInPriceRange && isInAirlines;
  });
};
