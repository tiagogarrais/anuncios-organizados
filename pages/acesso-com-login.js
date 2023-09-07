import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
import CoordGps from "../components/CoordGps"


export default function AcessoComLogin() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Bem vindo(a) {session.user.email} <br />
        <button onClick={() => signOut()}>Desconectar</button>
        <CoordGps/>
        <p><Link href='/'>Voltar para a página inicial</Link></p>
      </>
    )
  }
  return (
    <>
      Você não está conectado <br />
      <button onClick={() => signIn()}>Entrar</button><br/>
      <p><Link href='/'>Voltar para a página inicial</Link></p>

    </>
  )
}