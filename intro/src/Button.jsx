
import style from "./Card.module.css";

export default function Button({text}) {
   
return <button className={`${style.btn}`}>{text} </button>
}
