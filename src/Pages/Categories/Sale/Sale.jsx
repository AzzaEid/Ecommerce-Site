import React from 'react'
import saleimg from '../../../assets/images/springsale-01.png'
import CountdownTimer from '../../../Components/CountdownTimer'
function Sale() {
  return (
    <div className='half-upper'>
      <div className='container card  p-2 m-auto rounded-4 d-flex flex-row ' style={{backgroundColor:"#6C9EFF"}}>
        <img src={saleimg} className='w-50 rounded-4 m-2' style={{maxHeight:'250px'}}/>
        
            <CountdownTimer />
        

    </div>
    </div>
    
  )
}

export default Sale