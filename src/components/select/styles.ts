import { createUseStyles } from "react-jss";
import { ThemeType } from "../../theme";
import { ISelectElementProps } from "./types";

const useSelectStyles = createUseStyles((theme: ThemeType) => ({
  container: {
    position: "relative",
  },
  opened: {},
  inputContainer: (props: ISelectElementProps) => ({
    borderRadius: 5,
    outline: `3px solid ${theme.primaryColor}55`,
    border: `2px solid ${theme.primaryColor}ee`,
    padding: "0.5em",
    width: props.width,
    cursor: "pointer",
    display: "flex",
    "& i": {
      width: "1em",
      height: "1em",
      background: "url(/assets/icons/arrow-down.svg) no-repeat center center",
      backgroundSize: "contain",
      transition: "transform 100ms"
    },
    "&$opened i": {
      transform: "rotate(180deg)"
    }

  }),
  input: () => ({
    flex: 1,
    border: "none",
    outline: "none",
  }),
  optionsBox: {
    width: "100%",
    position: "absolute",
    background: theme.backgroundColor,
    top: "2.8em",
    border: `1px solid ${theme.textColor}55`,
    borderRadius: 5,
    boxShadow: `0 0 5px 1px ${theme.textColor}22`,
    boxSizing: "border-box",
    padding: "0.2em 0.4em",
    height: "fit-content",
    maxHeight: "10em",
    overflow: "hidden auto",
    "&::-webkit-scrollbar": { backgroundColor: "#fff", width: 16 },
    "&::-webkit-scrollbar-track": { backgroundColor: "#fff" },
    "&::-webkit-scrollbar-thumb": { backgroundColor: "#babac0", borderRadius: 16, border: "4px solid #fff" }
  },
  optionContent: {
    flex: 1
  },
  selected: {},
  option: {
    width: "100%",
    background: theme.backgroundColor,
    border: 0,
    color: theme.textColor,
    display: "flex",
    textAlign: "left",
    cursor: "pointer",
    borderRadius: 5,
    padding: "0.5em 0.4em",
    transition: "all ease-in-out 50ms",

    "&$selected, &:hover": {
      background: `${theme.primaryColor}1f`,
      color: theme.primaryColor,
    },

    "&$selected i": {
      width: "1em",
      height: "1em",
      background: "url(/assets/icons/check.svg) no-repeat center center",
      backgroundSize: "contain",

    }

  },
}));

export default useSelectStyles;
