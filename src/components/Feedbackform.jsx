import Card from "./shared/Card"
import Button from "./shared/Button"
import {useState} from 'react'
import RatingSelect from "./RatingSelect"

function Feedbackform({handleAdd}) {
    const [text,setText]=useState('')
    const [btnDisabled,setBtnDisabled]=useState(true)
    const [message,setMessage]=useState('')
    const [rating,setRating]=useState(5)
    const handletext=(e)=>{
        if (text===''){
            setBtnDisabled(true)
            setMessage(null)
        }
        else if(text!=='' && text.trim().length<=10){
            setMessage('Please enter at least 10 characters')
            setBtnDisabled(true)
        }
        else{
            setMessage(null)
            setBtnDisabled(false)
        }


        setText(e.target.value)
    }


    const handleSubmit=(e)=>{
        e.preventDefault()
        if(text.trim().length>10){
            const newFeedback={
                text,
                rating,
            }

            handleAdd(newFeedback)
            setText('')
        }

    }
  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>Please rate your serive with us</h2>
            <RatingSelect select={(rating) => setRating(rating)} />
            <div className="input-group">
                <input onChange={handletext} value={text} type="text" placeholder="Write review" />
                <Button type="submit" isDisabled={btnDisabled}>submit</Button>
            </div>
            {message && <div className="message">{message}</div>}
        </form>
    </Card>
  )
}

export default Feedbackform