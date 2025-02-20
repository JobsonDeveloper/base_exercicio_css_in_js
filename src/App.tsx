import { ThemeProvider } from 'styled-components'
import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import Temas from './Temas/Temas'

import { GlobalStyle } from './Styles'
import { Container } from './components/Container/Container'

function App() {
  return (
    <ThemeProvider theme={Temas}>
      <GlobalStyle />
      <Header />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
