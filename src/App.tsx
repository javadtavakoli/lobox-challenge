import Select from "./components/select";
import { ThemeProvider } from "react-jss";
import theme from "./theme";
import useAppStyles from "./AppStyles";

function App() {
  const classes = useAppStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.container}>
        <Select />
      </div>
    </ThemeProvider>
  );
}

export default App;
