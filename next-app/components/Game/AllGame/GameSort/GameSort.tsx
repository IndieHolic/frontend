"use client";

import classes from "./GameSort.module.css";
import { Box, Button, Combobox, Group, Text, useCombobox } from "@mantine/core";
import { IconCheck, IconSortDescending } from "@tabler/icons-react";
import { useState } from "react";

export function GameSort() {
  const sortOptions = ["출시 순", "인기 순", "평점 순"];

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string>("출시 순");

  const options = sortOptions.map((item) => (
    <Combobox.Option className={classes.ComboboxOption} value={item} key={item}>
      <Group gap={6}>
        {item === value ? (
          <IconCheck size={14} color="#138BCF" stroke={4} />
        ) : (
          <Box w={14} h={14} />
        )}
        <Text className={classes.BlackRegular14}>{item}</Text>
      </Group>
    </Combobox.Option>
  ));

  return (
    <Combobox
      classNames={{ dropdown: classes.ComboboxDropDown }}
      store={combobox}
      onOptionSubmit={(val) => {
        setValue(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <Button
          className={classes.Button}
          onClick={() => combobox.toggleDropdown()}
        >
          <Group gap={8}>
            <IconSortDescending size={14} color="black" stroke={1.5} />
            <Text className={classes.BlackRegular14}>{value}</Text>
          </Group>
        </Button>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
