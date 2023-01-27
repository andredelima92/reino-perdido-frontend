import { ButtonShowName } from "@/components/ButtonShowName";
import { Routes } from "@/components/routes";
import { useState } from "react";

export default function Registration() {
  const [name, setName] = useState("");

  return (
    <>
      <h2>Pagina de cadastro</h2>
      <Routes />
      <br />
      <br />
      <br />
      Nome:
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />
      <br />
      <ButtonShowName nomeCompleto={name} setName={setName} />
    </>
  );
}
