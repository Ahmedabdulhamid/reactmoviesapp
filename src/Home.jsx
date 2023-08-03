import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import TopSeries from './TopSeries';
import Slick from './Slick';
 import MovieHome from './MovieHome';
 import SeriesHome from './SeriesHome';
 import TopMovies from './TopMovies';


 import{BsWifiOff} from 'react-icons/bs'
const Home = () => {
  const{loading,error}=useSelector((s)=>s.counter)
  const dispatch=useDispatch()
  


  return (
    <div className='text-center'>
     {error===''?(
 <div>
 <Slick/>
 <MovieHome/>
 <SeriesHome/>
 <TopMovies/>
 <TopSeries/>
</div>
     ):(
      <div className=' d-flex justify-content-center my-3'>
      <h3 className='text-light my-3 text-center my-2'>{error}</h3>
      <div>
      <BsWifiOff className='text-light text-center my-2' style={{fontSize:"36px"}}/>
      </div>
     
   </div>
     )}
       
 

    


      
     

  
    
      
    </div>
  )
}

export default Home
