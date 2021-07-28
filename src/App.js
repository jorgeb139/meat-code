import { ThemeProvider } from '@material-ui/styles'

import theme from './assets/styles/theme'
import Hero from "./components/hero/Hero"
import Header from "./components/header/Header"
import Articles from './components/body/Articles'
import Contactanos from './components/body/Contactanos'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <Hero />
      <Articles/>
      <Contactanos/>
    </ThemeProvider>
  )
}

export default App;
