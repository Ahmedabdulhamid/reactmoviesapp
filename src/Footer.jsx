import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='text-center'>
      <h5 className='text-light'>@2023 <span className='text-primary'>React Movies</span> ,All Rights Reserved</h5>
      <ul className=''>
      <Link className=' mx-3'style={{color:"brown",textDecoration:"none"}}>About US</Link>
      <Link className='mx-3'style={{color:"brown",textDecoration:"none"}}>Terms of Use</Link>
      <Link className='mx-3'style={{color:"brown",textDecoration:"none"}}>Privacy</Link>

      </ul>
     
     
    </div>
  )
}

export default Footer
