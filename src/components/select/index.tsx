import { useState } from "react";
import useSelectStyles from "./styles";
import { ISelectProps } from "./types";

const Select = (props: ISelectProps) => {
  const classes = useSelectStyles({ width: props.width });
  const [selectedItem, setSelectedItem] = useState("");
  const onSelect = (key: string) => {
    setSelectedItem(key);
  };
  return (
    <div className={classes.container}>
      <div className={classes.inputContainer}>
        <input className={classes.input} />
        <i></i>
      </div>
      <div className={classes.optionsBox}>
        {props.options.map((i) => (
          <button
            onClick={() => onSelect(i.key)}
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
    </div>
  );
};
export default Select;
