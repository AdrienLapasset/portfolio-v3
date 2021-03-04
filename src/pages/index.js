import * as React from "react"
import App from './App';
import '../styles/main.scss';
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'

const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  )
}

export default IndexPage
