"use client";

import classes from "./ReviewSort.module.css";
import { Box, Button, Combobox, Group, Text, useCombobox } from "@mantine/core";
import { IconCheck, IconSortDescending } from "@tabler/icons-react";
import { useState } from "react";

export function ReviewSort() {
  const sortOptions = ["최신 순", "인기 순"];

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string>("최신 순");

  const options = sortOptions.map((item) => (
    <Combobox.Option className={classes.ComboboxOption} value={item} key={item}>
      {item === value ? (
        <Group gap={6}>
          <IconCheck size={14} color="#138BCF" stroke={4} />
          <Text className={classes.BlackMedium14}>{item}</Text>
        </Group>
      ) : (
        <Group gap={6}>
          <Box w={14} h={14} />
          <Text className={classes.BlackRegular14}>{item}</Text>
        </Group>
      )}
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
