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
        <meta name="description" content="Développeur et designer web indépendant." />
        <meta name="author" content="Adrien Lapasset" />
      </Helmet>
      <App />
    </ThemeProvider>
  )
}

export default IndexPage
