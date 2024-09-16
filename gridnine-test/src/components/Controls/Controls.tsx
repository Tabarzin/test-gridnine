import { Checkbox, Fieldset, Group, NumberInput, Radio } from "@mantine/core";

import React from "react";

interface ControlsProps {
  sortBy: string;
  setSortBy: (value: string) => void;
  filters: any;
  setFilters: (value: any) => void;
}

const Controls: React.FC<ControlsProps> = ({
  sortBy,
  setSortBy,
  filters,
  setFilters,
}) => {
  const handleSortChange = (value: string) => setSortBy(value);

  const handleFilterChange = (key: string, value: any) => {
    setFilters((prev: any) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <>
      <Radio.Group
        value={sortBy}
        onChange={handleSortChange}
        size="md"
        label="Сортировать"
      >
        <Radio label="по возрастанию цены" value="ascending" />
        <Radio label="по убыванию цены" value="descending" />
        <Radio label="по времени в пути" value="flightDuration" />
      </Radio.Group>

      <Checkbox.Group
        label="Фильтровать"
        value={filters.changes}
        onChange={(value) => handleFilterChange("changes", value)}
      >
        <Group mt="xs">
          <Checkbox value="one-change" label="1 пересадка" />
          <Checkbox value="no-changes" label="без пересадок" />
        </Group>
      </Checkbox.Group>

      <Fieldset legend="Цена" variant="unstyled">
        <NumberInput
          label="От"
          defaultValue={filters.priceRange[0]}
          onChange={(value) =>
            handleFilterChange("priceRange", [value, filters.priceRange[1]])
          }
        />
        <NumberInput
          label="До"
          defaultValue={filters.priceRange[1]}
          mt="md"
          onChange={(value) =>
            handleFilterChange("priceRange", [filters.priceRange[0], value])
          }
        />
      </Fieldset>

      <Checkbox.Group
        label="Авиакомпании"
        value={filters.airlines}
        onChange={(value) => handleFilterChange("airlines", value)}
      >
        <Group mt="xs">
          <Checkbox value="KLM" label="KLM" />
          <Checkbox value="Air France" label="Air France" />
        </Group>
      </Checkbox.Group>
    </>
  );
};

export default Controls;
