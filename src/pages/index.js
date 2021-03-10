import * as React from "react"
import App from './App';
import '../styles/main.scss';
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import { Helmet } from "react-helmet"

const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Adrien Lapasset</title>
        <meta name="description" content="Je suis un développeur créatif (et occasionnellement designer) qui aime les sites responsive, le design minimaliste et les transitions en douceur." />
        <meta name="author" content="Adrien Lapasset" />
      </Helmet>
      <App />
    </ThemeProvider>
  )
}

export default IndexPage
