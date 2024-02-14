
import styles from './card.module.scss';
import {Modal} from "../../Modal";
import {useState} from "react";

export interface MyCard{
  id: number,
  imageUrl: string,
}
export function Card({id, imageUrl}: MyCard) {
  const [isOpen, setIsOpen] = useState(false);

  return (
  <article  className={styles.card}>
    <button onClick={()=> setIsOpen(true)} className={styles.card__btn}>
      <img className={styles.card__img} src={imageUrl} alt="картинка"/>
    </button>
    <span className={styles.card__id}>id: {id}</span>
    <Modal id={id} open={isOpen} onClose={() => setIsOpen(false)}/>
  </article>

  );
}
