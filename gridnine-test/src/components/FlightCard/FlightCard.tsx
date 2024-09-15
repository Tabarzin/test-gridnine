import { Button, Card, Group, Text } from "@mantine/core";

interface FlightDetails {
  carrier: string;
  price: string;
  departureAirport: string;
  departureCity: string;
  travelDuration: number;
  arrivalCity: string;
  arrivalDate: string;
  departureDate: string;
  stops: number;
  airline: string;
}

const FlightCard: React.FC<FlightDetails> = ({
  carrier,
  price,
  departureAirport,
  departureCity,
  travelDuration,
  arrivalCity,
  arrivalDate,
  departureDate,
  stops,
  airline,
}) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{airline}</Text>
        <Text fw={500}>{price}</Text>
        <Text size="sm" c="dimmed">
          Стоимость для одного взрослого пассажира
        </Text>
      </Group>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>
          {departureCity} ({departureAirport}) -- {arrivalCity}
        </Text>
        <Text fw={500}>
          {departureDate} - {travelDuration} ч. {arrivalDate}
        </Text>
        <Text fw={500}>{stops} пересадка</Text>
      </Group>

      <Text size="sm" c="dimmed">
        Рейс выполняет: {carrier}
      </Text>

      <Button color="blue" fullWidth mt="md" radius="md">
        Выбрать
      </Button>
    </Card>
  );
};

export default FlightCard;
