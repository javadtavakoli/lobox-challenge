import useSelectStyles from "./styles";
import { ISelectProps } from "./types";

const Select = (props: ISelectProps) => {
  const classes = useSelectStyles({ width: "20em" });
  return (
    <div className={classes.container}>
      <div className={classes.inputContainer}>
        <input className={classes.input} />
        <i></i>
      </div>
      <div className={classes.optionsBox}>
        <button className={classes.option}>
          <div className={classes.optionContent}>Option</div>
          <i></i>
        </button>
      </div>
    </div>
  );
};
export default Select;
