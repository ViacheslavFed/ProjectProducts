import React from 'react'
import { AiFillStar } from 'react-icons/ai'

function Rating({rate}) {
    let stars = [1, 2, 3, 4, 5]
    return (
      <div>
        {stars.map(star => star < rate ? < AiFillStar color='orange' key={star} /> : <AiFillStar key={star} />)}
      </div>
    )
}

export default Rating