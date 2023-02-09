import { createUseStyles } from "react-jss";
import { ThemeType } from "../../theme";

const useSelectStyles = createUseStyles((theme: ThemeType) => ({
  container: {
    position: "relative",
  },
  input: {
    borderRadius: 5,
    outline: `3px solid ${theme.primaryColor}55`,
    border: `2px solid ${theme.primaryColor}ee`,
    padding: "0.5em",
  },
  optionsBox: {
    position: "absolute",
    background: theme.backgroundColor,
    top: "2.5em",
    border: `1px solid ${theme.textColor}55`,
    borderRadius: 5,
    boxShadow:`0 0 5px 1px ${theme.textColor}22`,
    boxSizing: "border-box",
    padding: "0.2em 0.1em",
    height: "fit-content",
    maxHeight:"10em",
    overflow: "hidden auto",
  },
  option: {
    width: "100%",
    background: theme.backgroundColor,
    border: 0,
    color: theme.textColor,
    textAlign: "left",
    cursor: "pointer",
    borderRadius: 5,
    padding: "0.5em 0.2em",
    transition: "all ease-in-out 50ms",
    "&::before": {
      content: ">"
    },
    "&:hover": {
      background: `${theme.primaryColor}1f`,
      color: theme.primaryColor,
    },

  },
}));

export default useSelectStyles;
