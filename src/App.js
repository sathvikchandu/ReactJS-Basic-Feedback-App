import Header from "./components/Header";
//import Feedbackitem from "./components/Feedbackitem";
import {v4 as uuidv4} from "uuid";
import {useState} from "react"
import Feedbackdata from "./data/feedbackdata";
import Feedbacklist from "./components/Feedbacklist";
//import Card from "./components/shared/Card";
import Feedbackstats from "./components/feedbackstats";
import Feedbackform from "./components/Feedbackform";
import Aboutus from "./pages/Aboutus";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Aboutquestion from "./components/Aboutquestion";
import {FeedbackProvider} from "./context/Feedbackcontext";

function App(){

    

    const [feedback,setFeedback]=useState(Feedbackdata)

    const addFeedback= (newFeedback)=>{
        newFeedback.id=uuidv4()
        setFeedback([newFeedback,...feedback])
    }

     const deletefeedback= (id)=>{
         if(window.confirm(' Do you wanna delete?')){
             setFeedback(feedback.filter((item) => item.id !== id))
         }

     }
    
    return (
        <FeedbackProvider>
        <Router>
            <Header />
            <div className="container">
                <Routes>
                    <Route exact path="/" element={
                        <>
                            <Feedbackform handleAdd={addFeedback}/>
                            <Feedbackstats feedback={feedback} />
                            <Feedbacklist feedback={feedback} handledelete={deletefeedback} />
                        </>
                    }> 
                        
                    
                    </Route>
                    <Route path='/about' element={<Aboutus />} />
                </Routes>

                <Aboutquestion />

            </div>

            
            
        </Router>
        </FeedbackProvider>
    )
}


export default App;