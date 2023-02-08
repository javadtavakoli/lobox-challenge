import { ThemeType } from "./theme";
import { createUseStyles } from "react-jss";

const useAppStyles = createUseStyles((theme: ThemeType) => ({
  container: {
    display: "flex",
    margin: "0 auto",
    padding: "5rem",
    color: theme.textColor,
  },
}));
export default useAppStyles;
