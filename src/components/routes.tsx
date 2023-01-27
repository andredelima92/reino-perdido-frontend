import Link from "next/link";

export function Routes() {
  return (
    <>
      <Link href={"/registration/new-user"}>Cadastro</Link>
      <Link href={"/registration/send-email"}>Email</Link>
    </>
  );
}
