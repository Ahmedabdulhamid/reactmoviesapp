import React from 'react'
import { moviesx, test } from './Redux/MoviePageSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Pagination from 'react-bootstrap/Pagination';
import { increment, lastCount, decrement, firstCount } from './Redux/Count';
import Spinner from 'react-bootstrap/Spinner';
import { BsWifiOff } from 'react-icons/bs'
import StarRatings from 'react-star-ratings';
import img1 from "./image/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg"
import ShowMoreText from "react-show-more-text";
function MoviePage() {
    const { movies, loading, error } = useSelector((s) => s.movie);
    const navigate = useNavigate()
    const { count } = useSelector((s) => s.moviePageList)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(moviesx(count));
    }, [count]);

    console.log(movies);
    const x = (id) => {



        navigate(`/details/${id}`)

    }


    return (
        error === '' ? (
            <div className='container my-3'>
                <div className="text-light text-center">
                    <h1 >Movies</h1>
                    <h4>
                        PAGE NUMPER <span className="text-info">{count} </span>
                        
                        
                         FROM <span className="text-info"> 500 </span>
                    </h4>
                </div>

                <div className="row d-flex justify-content-center">
                    {movies.map((e) => (

                        <div className="col-md-3 col-sm-6 my-3" key={e.id}>
                            {loading ? (


                                <Card bg='dark' style={{ width: '100%', height: "100%" }}>
                                    <Card.Img variant="top" src={e.poster_path === null ? img1 : `https://image.tmdb.org/t/p/w600_and_h900_bestv2${e.poster_path}`} />
                                    <Card.Body>
                                        <span className='text-light'> <span className='text-info'>Title </span>:{e.title}</span>
                                        <Card.Text >
                                            <h6 className='text-info'>Rate: <span className='text-light'>{e.vote_average}</span></h6>
                                        </Card.Text>

                                        <Card.Text className='text-light'>
                                            <p>
                                                <span className='text-info'>overview:</span>
                                                <ShowMoreText
                                                    /* Default options */
                                                    lines={1}
                                                    more="Show more"
                                                    less="Show less"
                                                    className="content-css"
                                                    anchorClass="show-more-less-clickable text-primary"

                                                    expanded={false}
                                                    width={280}
                                                    truncatedEndingComponent={"... "}

                                                >
                                                    {e.overview}
                                                </ShowMoreText>
                                            </p>



                                        </Card.Text>
                                        <Card.Text className='text-center'>
                                            <StarRatings
                                                rating={e.vote_average / 2
                                                }
                                                starDimension="20px"
                                                starSpacing="1px"
                                                starRatedColor="yellow"
                                                className='bg-warning'
                                            />
                                        </Card.Text>


                                        <Button variant="outline-info" onClick={() => x(e.id)}>Details</Button>


                                    </Card.Body>





                                </Card>) : (
                                <div className='d-flex align-items-center justify-content-center'>
                                    <Spinner animation="border" role="status" className='text-primary container'>
                                        <span className="visually-hidden ">Loading...</span>
                                    </Spinner>
                                </div>


                            )}



                        </div>
                    ))}
                </div>

                <Pagination className='d-flex justify-content-center '>
                    <Pagination.First onClick={() => dispatch(firstCount())} />
                    <Pagination.Prev onClick={() => dispatch(decrement())} />

                    <Pagination.Ellipsis />


                    <Pagination.Item active >{count}</Pagination.Item>

                    <Pagination.Ellipsis />

                    <Pagination.Next onClick={() => dispatch(increment())} />
                    <Pagination.Last onClick={() => dispatch(lastCount())} />
                </Pagination>
            </div>


        ) : (
            <div className=' d-flex justify-content-center my-3'>
                <h3 className='text-light my-3 text-center my-2'>{error}</h3>
                <div>
                    <BsWifiOff className='text-light text-center my-2' style={{ fontSize: "36px" }} />
                </div>

            </div>



        )

    );
}

export default MoviePage
