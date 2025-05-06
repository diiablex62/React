import React from 'react'
import styles from "../Card.module.scss";
import Bouton from './Bouton';

export default function Card() {
  return (


   <div className={`${styles.Card}`}>
       <h1>titre</h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium corrupti quisquam officia perferendis necessitatibus, consequatur blanditiis minima, inventore eaque commodi voluptatibus ullam officiis? Modi a iste tempora repellendus fuga, dolorem optio debitis, neque veniam ratione provident. Est similique minima autem! Delectus nemo accusamus rem laudantium perferendis iure dolor sequi laboriosam?</p>

       <Bouton />
       
    </div>



   
  )
}
