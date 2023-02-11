import { useState } from "react";
import useSelectStyles from "./styles";
import { ISelectOption, ISelectProps } from "./types";

const Select = (props: ISelectProps) => {
  const classes = useSelectStyles({ width: props.width });
  const [selectedItem, setSelectedItem] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [opened, setOpened] = useState(false);
  const onSelect = (option: ISelectOption) => {
    setSelectedItem(option.key);
    setInputValue(option.value);
    setOpened(false);
    props.onSelect(option.key);
  };
  const addOption = () => {
    const addedOption = props.onOptionAdded(inputValue);
    addedOption && onSelect(addedOption);
  };
  const onInputKeyDown = (key: string) => {
    if (key === "Enter") {
      addOption();
    }
  };
  return (
    <div className={classes.container}>
      <div
        className={`${classes.inputContainer} ${opened && classes.opened}`}
        onClick={() => setOpened((_opened) => !_opened)}
      >
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.currentTarget.value)}
          className={classes.input}
          onKeyDown={(e) => onInputKeyDown(e.code)}
        />
        <i></i>
      </div>
      {opened && (
        <div className={classes.optionsBox}>
          {props.options.map((i) => (
            <button
              onClick={() => onSelect(i)}
              className={`${classes.option} ${
                selectedItem === i.key && classes.selected
              }`}
              key={i.key}
            >
              <div className={classes.optionContent}>{i.value}</div>
              <i></i>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
export default Select;
