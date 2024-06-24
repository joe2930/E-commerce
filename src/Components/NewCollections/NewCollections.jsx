import React from 'react'
import'./NewCollections.css'
import new_collection from '../Assets/new_collections'
import Item from '../Item/Item.jsx'

const NewCollections = () => {
  return (
    <div>
        <div className="collections">
            <h1>NEW COLLECTIONS</h1>
            <hr/>
        </div>
        <div className="collections_in">
            {
                new_collection.map((item,i)=>
                {
                    return <Item name={item.name} old_price={item.old_price} new_price={item.new_price} image={item.image}/>
                })
            }
        </div>
    </div>
  )
}

export default NewCollections
