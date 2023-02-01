function IdCard(props) {
  return (
    <div className="id-card">
      <img alt="imagem" src={props.picture}></img>
      <div className="info-div">
        <span>Firts name: {props.firstName}</span>
        <span>Last name: {props.lastName}</span>
        <span>Gender: {props.gender}</span>
        <span> Height: {props.height / 100}m</span>
        <span> Birth: {props.birth.toDateString()} </span>
      </div>
    </div>
  );
}

export default IdCard;
