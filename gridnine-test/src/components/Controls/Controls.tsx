import {
  Checkbox,
  Fieldset,
  Group,
  NumberInput,
  Radio,
  TextInput,
} from "@mantine/core";
import { RADIO_SIZES } from "@mantine/core";
import React, { useState } from "react";

const Controls: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState("ascending");
  return (
    <>
      <Radio.Group
        value={value}
        onChange={setValue}
        size="md"
        label="Сортировать"
      >
        <Radio label="по возрастанию цены" value="ascending" />
        <Radio label="по убыванию цены" value="descending" />
        <Radio label="по времени в пути" value="time" />
      </Radio.Group>

      <Checkbox.Group label="Фильтровать">
        <Group mt="xs">
          <Checkbox value="one-change" label="1 пересадка" />
          <Checkbox value="no-changes" label="без пересадок" />
        </Group>
      </Checkbox.Group>

      <Fieldset legend="Цена" variant="unstyled">
        <NumberInput label="От" defaultValue={0} />
        <NumberInput label="До" defaultValue={10_000} mt="md" />
      </Fieldset>

      <Checkbox.Group label="Авиакомпании">
        <Group mt="xs">
          <Checkbox value="lot" label="LOT Polish Airlines от 21049" />
          <Checkbox
            value="aeroflot"
            label="Аэрофлот - российские авиалинии от 31733"
          />
        </Group>
      </Checkbox.Group>
    </>
  );
};

export default Controls;
