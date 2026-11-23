function DepoimentoCard({ texto, nome, cargo }) {
  return (
    <div>
      <p>"{texto}"</p>
      {/* <img src="" alt="avatar" /> */}
      <p>{nome}</p>
      <span>{cargo}</span>
    </div>
  );
}

export default DepoimentoCard;
