import type { AppProps } from "next/app";
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as Fathom from 'fathom-client';

import "../styles/global.css";
import "../styles/scoped-preflight.css";

import Header from "../components/Header";
import Footer from "../components/Footer";



function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter();

  useEffect(() => {
    Fathom.load(process.env.FATHOM_ID, {
      includedDomains: ['talentverse.com.au', 'talentverse.vercel.app']
    });
  
    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }
  
    router.events.on('routeChangeComplete', onRouteChangeComplete);
  
    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
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
