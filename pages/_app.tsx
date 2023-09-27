import type { AppProps } from "next/app";
import Router from 'next/router';
import React, { useEffect } from 'react';
import * as Fathom from 'fathom-client'

import "../styles/global.css";
import "../styles/scoped-preflight.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

// Record a pageview when route changes
Router.events.on('routeChangeComplete', (as, routeProps) => {
  if (!routeProps.shallow) {
    Fathom.trackPageview();
  }
});



function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    Fathom.load('FATHOM_ID', {
      includedDomains: ['talentverse.com.au', 'www.talentverse.com.au']
    });
  }, []);
  
  return (
    <div className="relative bg-white">
      
      <Header />
      <main>
          <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
