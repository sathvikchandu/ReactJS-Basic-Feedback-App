import Card from "./shared/Card"
import {FaTimes} from 'react-icons/fa'

function Feedbackitem({item,handledelete}) {
    
   
    

    return (
        <Card >
            <div className='num-display'>{item.rating} </div>
            <button onClick={()=>handledelete(item.id)} className='close'>
                <FaTimes color="purple"/>
            </button>
            <div className='text-display'>{item.text}</div>


        </Card>
  )  
}

export default Feedbackitem
