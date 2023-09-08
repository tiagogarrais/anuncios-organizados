import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { data: session } = useSession();
  return (
    <>
      <button>
        <Link href="/acesso-com-login">
          Clique aqui para acessar os anúncios
        </Link>
      </button>
    </>
  );
}
