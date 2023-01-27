type ButtonShowNameProps = {
  nomeCompleto: string;
  setName: (param: string) => void;
};

export function ButtonShowName({ nomeCompleto, setName }: ButtonShowNameProps) {
  function showNameInAlert() {
    alert(nomeCompleto);
    setName(nomeCompleto + "050505");
  }

  return (
    <>
      nome digitado: {nomeCompleto}
      <button onClick={showNameInAlert}>Mostrar nome</button>
    </>
  );
}
