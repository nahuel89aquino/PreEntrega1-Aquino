import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = (props) => {
  return (
    <div className="card">
        <div className="card-body" id='greeting'>
            {props.greeting}
        </div>
    </div>
  )
}

export default ItemListContainer