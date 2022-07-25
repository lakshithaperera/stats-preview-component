import {ThemeProvider} from "styled-components";
import { Cardcomponent } from "./CardComponent/Cardcomponent";
import GlobalStyles from "./Globalstyle.styled";


const theme = {
  colors:{
    primaryColor: 'hsl(277, 64%, 61%)',
    primaryDarkColor: 'hsl(244, 38%, 16%)',
    bodyColor: 'hsl(233, 47%, 7%)',
    whiteColor: 'hsl(0, 0%, 100%)',
    mainParagraphColor: 'hsla(0, 0%, 100%, 0.75)',
    darkTextColor: 'hsla(0, 0%, 100%, 0.6)'

  },
  tab:'992px',
  mobile:'772px'

  
}


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
          <Cardcomponent />   
    </ThemeProvider>
   
  );
}

export default App;
