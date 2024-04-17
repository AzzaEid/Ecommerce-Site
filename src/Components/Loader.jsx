import React from 'react'

function Loader() {
  return (
    <div className=''>
<div className="d-flex justify-content-center">
  <div className="spinner-border" role="status" style={{color:" rgba(105,37,176,1)"}}>
    <span className="visually-hidden">Loading...</span>
  </div>
</div>

    </div>
  )
}

export default Loader