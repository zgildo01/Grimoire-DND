import { Link } from "react-router-dom";

const SpellCard = (props) => {
  return (
    <>
      <Link to={`/spell/${props.spell.index}`}>
        {props.spell.name}
      </Link>
    </>
  );
}

export default SpellCard;