import { ThemeProvider } from "styled-components"
import { lightTheme } from "./components/Themes"
import GlobalStyles from "./styles.g"

function App() {
  return <>
    <GlobalStyles />
    <ThemeProvider theme={lightTheme}>
      App File

    </ThemeProvider>
  </>

}

export default App

