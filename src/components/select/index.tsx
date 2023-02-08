import useSelectStyles from "./styles";
import { ISelectProps } from "./types";

const Select = (props:ISelectProps) => {
  const classes = useSelectStyles();
  return (
    <div className={classes.container}>
      <input className={classes.input} />
      <div className={classes.optionsBox}>
        <button className={classes.option}>Option 1</button>
        <button className={classes.option}>Option 2</button>
        <button className={classes.option}>Option 3</button>
        <button className={classes.option}>Option 3</button>
        <button className={classes.option}>Option 3</button>
      </div>
    </div>
  );
};
export default Select;
