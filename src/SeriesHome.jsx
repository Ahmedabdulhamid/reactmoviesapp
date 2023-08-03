import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getAllSeries } from './Redux/CounterSlice';
import { useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';

const SeriesHome = () => {
    const { series } = useSelector((s) => s.counter);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllSeries());
        
    }, []);
    const navigate=useNavigate()
    const handleClick = (id) => {
        console.log(id);

        navigate(`/seriesDetails/${id}`)
    
      }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
  return (
    <div >
    <h1 className='text-primary'>Series</h1>
    <div className='container my-3'>
        <div className='container'>

            <Slider {...settings}>
                {series.map((e) => (
                    <div className='container ' key={e.id}>
                        <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${e.poster_path}`} width={'100%'} alt=""onClick={() => handleClick(e.id)} style={{cursor:"pointer"}} />
                    </div>
                ))}
            </Slider>
        </div>

    </div>
</div>
  )
}

export default SeriesHome
