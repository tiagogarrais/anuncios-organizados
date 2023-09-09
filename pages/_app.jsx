import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import Link from "next/link";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Link href="/">
        <h1 className="text-3xl font-bold underline">Anúncios Organizados</h1>
      </Link>
      <p>Aqui você encontra o que precisa ou vende o que anuncia!</p>
      <hr />
      <Component {...pageProps} />
    </SessionProvider>
  );
}
