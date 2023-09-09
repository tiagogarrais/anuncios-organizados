import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import CadAnuncioForm from "../components/CadAnuncioForm";

export default function AcessoComLogin() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <CadAnuncioForm />
      </>
    );
  }
  return (
    <>
      Você não está conectado <br />
      <button onClick={() => signIn()}>Entrar</button>
      <br />
    </>
  );
}
