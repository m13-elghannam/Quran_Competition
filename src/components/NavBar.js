import Button from "./ButtonComponent";
import competitionLogo from "../media/competitionLogo.png";

export default function Nav({ level }) {
  let style = {
    border: "3px solid white",
    backgroundColor: "saddlebrown",
    color: "white",
  };

  return (
    <nav className="Nav-bar">
      <Button style={style} Text="تغيير المستوي" />
      <h1>{level}</h1>
      <img src={competitionLogo} alt="competitionLogo" />
    </nav>
  );
}
