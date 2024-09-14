import { Radio } from "@mantine/core";
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
    </>
  );
};

export default Controls;
