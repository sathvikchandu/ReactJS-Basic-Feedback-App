import React from 'react'
import {FaQuestion} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Aboutquestion() {
  return (
    

    <div className='about-link'>
        <Link to={{
            pathname:'/about',
            search:'?question=true',
            hash:'#samplehash',
        }}>
        <FaQuestion size={30} />
        </Link>

    </div>

    /*<div className='about-link'>
        <Link to='/about'>
        <FaQuestion size={30} />
        </Link>

    </div>*/



  )
}

export default Aboutquestion
