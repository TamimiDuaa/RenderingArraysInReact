import React from 'react'

function Score({score}) {
  return (
    <>  

        <div className='score'>
           
            <h4>{score.date}</h4>
            <h4>{score.score}</h4>
        </div>

    </>
  )
}

export default Score