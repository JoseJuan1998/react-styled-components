import { AnimatedLogo, Button, DarkButton, FancyButton, SubmitButton } from './components/Button'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import logo from './assets/react.svg'

const theme: any = {
  dark: {
    primary: '#000',
    color: '#fff'
  },
  light: {
    primary: '#fff',
    color: '#000'
  }
}

const GlobalStyle = createGlobalStyle`
  button {
    font-family: 'Monospace';
  }
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <div>
        <Button>Styled Button</Button>
        <br />
        <Button variant='outline'>Outline Styled Button</Button>
        <br />
        <FancyButton>Fancy Button</FancyButton>
        <br />
        <SubmitButton>Submit Styled Button</SubmitButton>
        <br />
        <AnimatedLogo src={logo} />
        <br />
        <DarkButton>Dark Theme Styled Button</DarkButton>
      </div>
    </ThemeProvider>
  )
}

export default App
