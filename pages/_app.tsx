import type { AppProps } from "next/app";
import Fathom from "../components/Fathom";

import "../styles/global.css";
import "../styles/scoped-preflight.css";

import Header from "../components/Header";
import Footer from "../components/Footer";



function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <div className="relative bg-white">
      <Fathom />
      <Header />
      <main>
          <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
