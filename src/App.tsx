import Select from "./components/select";
import { ThemeProvider } from "react-jss";
import theme from "./theme";
import useAppStyles from "./AppStyles";

function App() {
  const classes = useAppStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.container}>
        <Select width={"10em"} onOptionAdded={(ev)=>{}} onSelect={()=>{}} options={[{
          key:"1",
          value:"2"
        }]}/>
      </div>
    </ThemeProvider>
  );
}

export default App;
