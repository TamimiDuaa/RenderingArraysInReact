import { useState } from 'react'
import './App.css'
import learners from './learners.js';
import Learner from './components/Learner'
function App() {
 const [learnerData, setLearnerData] = useState({learners})

  return (
    <>
      <h1>Learners Section</h1>
      {/* {learnerData.learners.map((learner, index)=>{
        console.log(learner.name);
        <Learner key={index} learnersName={learner.name} learnersBio={learner.bio}/>
      })}
       */}
       {learnerData.learners.map((learner, index) => (
        <Learner
          key={index}  
          learner= {learner}
        />
      ))}
    </>
  )
}

export default App
