import Select from "./components/select";
import { ThemeProvider } from "react-jss";
import theme from "./theme";
import useAppStyles from "./AppStyles";
import useSelectOptions from "./hooks/selectOptions";

function App() {
  const classes = useAppStyles();
  const { options, onOptionAdded } = useSelectOptions();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.container}>
        <Select
          width={"20em"}
          onOptionAdded={onOptionAdded}
          onSelect={(selectedKey) =>
            console.log(`selected key: ${selectedKey}`)
          }
          options={options}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
