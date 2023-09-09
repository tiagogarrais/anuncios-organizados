import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { data: session } = useSession();
  return (
    <>
      <button>
        <Link href="/acesso-com-login/anuncios">Ver anúncios</Link>
      </button>
      <button>
        <Link href="/acesso-com-login/cadastro">Cadastrar anúncio</Link>
      </button>
    </>
  );
}
