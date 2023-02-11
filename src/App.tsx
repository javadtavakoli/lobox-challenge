import Select from "./components/select";
import { ThemeProvider } from "react-jss";
import theme from "./theme";
import useAppStyles from "./AppStyles";

function App() {
  const classes = useAppStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.container}>
        <Select
          width={"20em"}
          onOptionAdded={(ev) => {}}
          onSelect={() => {}}
          options={[
            {
              key: "1",
              value: "Option 1",
            },
            {
              key: "2",
              value: "Option 2",
            },
            {
              key: "3",
              value: "Option 3",
            },
            {
              key: "4",
              value: "Option 4",
            },
          ]}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
