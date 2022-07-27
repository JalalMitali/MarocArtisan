import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createContext, useState } from 'react';
export const ArtisanContext  = createContext({} as any);
function MyApp({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState("");
  const [number, setNumber] = useState("");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(0);
  const [data, setData] = useState([]);

  const [uris, setUris] = useState([]);
  const [loginError, setLoginError] = useState(0);
  return (<ArtisanContext.Provider value={{user, setUser, number, uris, setUris, setNumber, loading, setLoading, confirmationResult, setConfirmationResult,loginError, setLoginError, code, setCode, data, setData}}>
    <Component {...pageProps} /></ArtisanContext.Provider>);
}

export default MyApp
