import '../styles/globals.css'
import '../src/components/Banner/Banner.css'
import '../src/components/Container/Container.css'
import '../src/components/About/About.css'
import '../src/components/CardService/CardServices.css'
import '../src/components/Experience/Experience.css';
import '../src/components/CardExperience/CardExperience.css';
import '../src/components/CardPost/CardPost.css';
import '../src/components/Bloghead/Bloghead.css';
import type { AppProps } from 'next/app'
import Container from '../src/components/Container/Container';
import React from 'react';
import {AppState} from '../context/AppState'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppState>


      <Container>
       <Component {...pageProps}  />
      </Container>
      </AppState>
  )
}
export default MyApp
