import React from 'react'
import './card-list.style.css'
import {Card} from '../card/card.component'

export const CardList = (props) => {

return (
    <div className='card-list'>
       {props.monsters.map(monster => ( //mapeo el array de monsters y renderea el Card component recibiendo los props
           <Card 
                key={monster.id}
                monster={monster}
                />
               
       ))} 
    </div>
)
}