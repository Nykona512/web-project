function DepoimentoCard({ declaracao, usuario, cargo }) {
  return (
    <>
    <div className="depoimentos__list">
      <div>
        <p>{declaracao}</p>
        {/* <img src="" alt="avatar"/> */}
        <p>{usuario}</p>
        <span>{cargo}</span>
      </div>
    </div>
    </>
  );
}

export default DepoimentoCard;