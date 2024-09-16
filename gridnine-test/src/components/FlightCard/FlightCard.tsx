import { Button, Card, Group, Stack, Text } from "@mantine/core";

import { format } from "date-fns";
import { ru } from "date-fns/locale";

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return format(date, "HH:mm dd MMM. EEE", { locale: ru });
};

const formatTravelDuration = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours > 0 ? `${hours} ч. ` : ""}${remainingMinutes > 0 ? `${remainingMinutes} мин.` : ""}`.trim();
};

export interface FlightDetails {
  carrier: string;
  price: string;
  segments: SegmentDetails[];
}

export interface SegmentDetails {
  departureAirport: string;
  departureAirportUid: string;
  departureCity: string;
  arrivalCity: string;
  arrivalAirport: string;
  arrivalAirportUid: string;
  arrivalDate: string;
  departureDate: string;
  travelDuration: number;
  airline: string;
  stops: number;
}

const FlightCard: React.FC<FlightDetails> = ({
  carrier,
  price,

  segments,
}) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Group
        justify="space-between"
        mt="md"
        mb="xs"
        bg="var(--mantine-primary-color-6)"
        p="md"
      >
        <Text size="lg" fw={500} color="var(--mantine-color-white)">
          {carrier}
        </Text>
        <Stack align="flex-end">
          <Text fw={500} color="var(--mantine-color-white)">
            {price} &#8381;
          </Text>
          <Text size="sm" color="var(--mantine-color-white)">
            Стоимость для одного взрослого пассажира
          </Text>
        </Stack>
      </Group>

      {segments.map((segment, index) => (
        <div key={index}>
          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>
              {segment.departureCity} {", "} {segment.departureAirport} (
              {segment.departureAirportUid}) -- {segment.arrivalCity}
              {", "}
              {segment.arrivalAirport} ({segment.arrivalAirportUid})
            </Text>
            <Text fw={500}>
              {formatDate(segment.departureDate)} --{" "}
              <Text component="span" size="xl">
                {" "}
                {formatTravelDuration(segment.travelDuration)}
              </Text>{" "}
              -- {formatDate(segment.arrivalDate)}
            </Text>
            <Text fw={500} color="var(--mantine-color-orange-5)">
              пересадок: {segment.stops}
            </Text>
          </Group>
          <Text size="sm" c="dimmed">
            Рейс выполняет: {segment.airline}
          </Text>
        </div>
      ))}

      <Button
        bg="var(--mantine-color-orange-5)"
        color="white"
        fullWidth
        mt="md"
        radius="md"
      >
        ВЫБРАТЬ
      </Button>
    </Card>
  );
};

export default FlightCard;
