
import styles from './modal.module.scss';

import axios from "axios";
import React, {FormEvent, useRef} from "react";

export interface IModal   {
  open: boolean,
  onClose: () => void;
  id: number;
}
export interface Modal {
  id: string,
  largeImage:string,
  comments:[
      {
        id:number,
        author: string,
        text: string,
      }
  ]

}
export function Modal({ id, open, onClose } : IModal) {
  const [ items, setItems ] = React.useState<Modal>()
  const ref = useRef<HTMLDivElement>(null);


  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`http://test-backend.itdelta.agency/api/image/${id}`)
        setItems(data)
      } catch (e) {
      }
    })()
  }, [])

  if(!items){
    return
  }

  function handleSubmit(event: FormEvent){
    event.preventDefault();
  }

  return (
      <div className={open ? styles.modal+ " " + styles.active : styles.modal}>
        <div  ref={ref}  className={styles.modal__content}>
          <div onClick={onClose} className={styles.modal__image}>
            <img src={items.largeImage} alt="картинка"/>
          </div>
          <ul className={styles.modal__list} >
            {
              items.comments.map((item, index:number)=>(
                  <li key={index} className={styles.modal__list__item}>
                    <strong> {item.author}</strong>
                    <span>  </span>
                    <span>{item.text}</span>
                  </li>
              ))
            }
          </ul>
          <form className={styles.modal__form} onSubmit={handleSubmit}>
            <textarea></textarea>
          </form>
        </div>
      </div>
  );
}

