import Button from "./Button";
import style from "./Card.module.css";

export default function Card({ titre, text, btnText }) {
  return (
    <div>
      <h2 className={`${style.h2Title}`}>{titre}</h2>
      <p className={`${style.paragraph}`}>{text}</p>
      <Button text={btnText} />
    </div>
  );
}
