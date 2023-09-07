import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { data: session } = useSession();
  return (
    <>
      <h1>Anúncios Organizados</h1>
      <p>Aqui você encontra o que precisa ou vende o que anuncia!</p>
      <button>
        <Link href="/acesso-com-login">
          Clique aqui para acessar os anúncios
        </Link>
      </button>
    </>
  );
}
