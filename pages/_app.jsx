import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <h1 className="text-3xl font-bold underline">Anúncios Organizados</h1>
      <p>Aqui você encontra o que precisa ou vende o que anuncia!</p>
      <hr />
      <Component {...pageProps} />
    </SessionProvider>
  );
}
