import React from 'react'
import Slider from "react-slick";
import { getAllData } from './Redux/CounterSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';
function MovieHome() {
    const { products } = useSelector((s) => s.counter);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllData());

    }, []);
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
    const navigate=useNavigate()
    const handleClick = (id) => {
        console.log(id);

        navigate(`/details/${id}`)
    
      }
    return (
        <div >
            <h1 className='text-primary'>Movies</h1>
            <div className='container my-3'>
                <div className='container'>

                    <Slider {...settings}>
                        {products.map((e) => (
                            <div className='container ' key={e.id}>
                                <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${e.poster_path}`} onClick={() => handleClick(e.id)} style={{cursor:"pointer"}} width={'100%'} alt="" />
                            </div>
                        ))}
                    </Slider>
                </div>

            </div>
        </div>





    );
}

export default MovieHome
