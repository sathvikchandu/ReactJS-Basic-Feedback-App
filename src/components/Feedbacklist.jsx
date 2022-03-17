import {motion,AnimatePresence} from 'framer-motion'
import Feedbackitem from './Feedbackitem'

function Feedbacklist({feedback,handledelete}) {
    if(feedback.length===0 || !feedback){
        return <h3>No feedback yet</h3>
    }
    return (
    <div className='feedback-list'>
        <AnimatePresence>
            {feedback.map((item)=>(
                <motion.div 
                    key={item.id}
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    exit={{opacity:0}}
                    >
                    <Feedbackitem 
                    key={item.id}
                    item={item}
                    handledelete={handledelete}
                    />
                </motion.div>
            ))} 
        </AnimatePresence>
    </div>
    )
}

export default Feedbacklist