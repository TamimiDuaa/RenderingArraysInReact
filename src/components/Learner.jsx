import React from 'react'
import Score from './Score';

function Learner({learner}) {
    // console.log({learnersName});
  return (
    <>   
        <div className='learners'>
            <h2>{learner.name}</h2>
            <p>{learner.bio}</p>
            
            {learner.scores.map((score, index) => (
                // Ensure that the JSX is returned here
                <Score
                key={index}  // Provide a unique key
                score= {score}
                />
            ))}
        </div>
        
    </>
  )
}

export default Learner