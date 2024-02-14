
import styles from './gallery.module.scss';
import React from "react";
import axios from "axios";
import {Card} from "./Card";
export interface Card   {
  id: number;
  image: string,

}

export function Gallery() {

  const [ orders, setOrders ] = React.useState([])

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('http://test-backend.itdelta.agency/api/images')
        setOrders(data)
      } catch (e) {

      }
    })()
  }, [])
  console.log(orders)
  return (
      <div className={styles.gallery}>
        {orders.map((item:Card, index:number)=>(
                <Card
                    id={item.id}
                    key={index}
                    imageUrl={item.image}
                />
            ))
        }
      </div>
  );
}
