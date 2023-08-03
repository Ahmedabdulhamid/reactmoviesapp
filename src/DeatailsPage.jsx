import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Video, details } from './Redux/.DetailsSlise'
import { moviesDetails, Charecter } from './Redux/.DetailsSlise'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import './moviedetails.css'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { AiFillPlayCircle } from 'react-icons/ai'
import { MdAddToPhotos } from "react-icons/md"
import { AiOutlineStar } from "react-icons/ai"
import { BsWifiOff } from 'react-icons/bs'
import Card from 'react-bootstrap/Card';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Spinner from 'react-bootstrap/Spinner';
import img1 from "./image/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg"
const DeatailsPage = () => {
  const { movie, generes, dataVideo, dataCharecters, dataProduction, error, loading } = useSelector((s) => s.details)
  const { id } = useParams()
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);
  const navigate = useNavigate()
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [load, setLoad] = useState(true)
  console.log(dataCharecters);
  const handlBack = () => {
    navigate(-1)
  }
  console.log(dataCharecters);
  useEffect(() => {
    dispatch(moviesDetails(id))
    dispatch(Video(id))
    dispatch(Charecter(id))

  }, [id])

  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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
    <div>

      {error === '' ? (
        loading ? (
          <div> 
            
            <div style={{ backgroundImage: ` url(https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.backdrop_path})`,backgroundSize:"cover" }} className='background'>
            
            <div className="container">
              <div className="row ">
              <h1 className='text-info text-center zeindex'>Movie-Details</h1>
                <div className="col-md-3 zindex">
                
                  <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`} alt="" width={'100%'} className=' z-1' />
                </div>
                <div className="col-md-9 zindex">
                  <div style={{ width: '100%' }}>

                    <h1 className='text-light'> {movie.original_title}</h1>
                    <p className='text-light'>{movie.release_date} ( {movie.original_language}) {generes.map((e) => (
                      <span key={e.id}>{movie !== {} ? e.name : ''} ,</span>

                    ))}
                      <span>{movie !== {} ? (
                        <span>
                          {Math.floor(movie.runtime / 60)}h   {Math.floor(((movie.runtime / 60) - (Math.floor(movie.runtime / 60))) * 60)} min
                        </span>

                      ) : ""} </span>
                    </p>

                    <span className='text-primary x'>overview:</span>
                    <span className='text-light'>{movie.overview ? movie.overview : 'NOT FOUND'}</span>
                    <div style={{ display: "flex", justifyContent: "space-evenly" }} className='my-3'>
                      <div>
                        <MdAddToPhotos className='text-success' style={{ fontSize: "25px" }} />
                        <h6 className='text-light'>Add To WatchList</h6>
                      </div>
                      <div>
                        <AiOutlineStar className='text-warning' style={{ fontSize: "25px" }} />
                        <h6 className='text-light'>Rating</h6>
                      </div>
                      <div>
                        <div>
                          <Button variant="danger" onClick={handleShow}>
                            <AiFillPlayCircle />
                          </Button>

                          <Modal show={show} onHide={handleClose} className='zindex' >

                            <Modal.Body className='bg-dark' >
                              {dataVideo.length === 0 ? (
                                <div>
                                  <h6 className='text-light'>{movie.original_title}</h6>

                                  <Link  to={`${movie.homepage}`}><Button variant='outline-info'> {movie.homepage ? "Go To Home Page" : "Trailer not found"}</Button></Link>
                                </div>
                              ) :


                                (
                                  dataVideo.map((e) => (

                                    <div className="embed-responsive embed-responsive-16by9 zindex" key={e.id} >
                                      <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${e.key}`} width={'100%'} height={400} allowfullscreen></iframe>
                                    </div>
                                  )))







                              }
                            </Modal.Body>

                          </Modal>
                        </div>

                        <h6 className='text-light'>Play Trailer</h6>
                      </div>
                    </div>

                    <div className='d-flex justify-content-center my-3'>
                      <Button className='bg-primary' onClick={handlBack}>Back</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            <div>

            </div>
            <div className='container my-3'>
              {dataCharecters.length === 0 ? (
                <p className='text-light'>no cast for {movie.original_title}</p>
              ) : (
                <h1 className='text-info'>movie casting</h1>
              )}
              <div className='d-flex flex-nowrap col-12 overflow-auto gap-2 my-2' >

                {dataCharecters.map((e) => (
                  <div className='col-lg-2 col-md-4 col-sm-4 col-7 ' key={e.id}>
                    <Card bg='dark ' style={{ width: '100%', height: "100%",cursor:"pointer" }}  
>
                      <Card.Img variant="top" className='m' src={e.profile_path === null ? img1 : `https://image.tmdb.org/t/p/w600_and_h900_bestv2${e.profile_path}`}  />
                      <Card.Body>

                        <Card.Text>
                          <p className='text-light'>{e.name}</p>
                          <p className='text-warning'>{e.known_for_department}</p>
                        </Card.Text>

                      </Card.Body>





                    </Card>
                  </div>

                ))}
              </div>
              {dataProduction.length === 0 ? (
                <p className='text-light'>no crew for {movie.original_title}</p>
              ) : (
                <h1 className='text-info'> Movie crew</h1>
              )}


              <div className='d-flex flex-nowrap col-12 overflow-auto gap-2 my-2' >

                {dataProduction.map((e) => (
                  <div className='col-lg-2 col-md-4 col-sm-4 col-7 ' key={e.id}>
                    <Card bg='dark ' style={{ width: '100%', height: "100%" }}>
                      <Card.Img variant="top" className='m' src={e.profile_path === null ? img1 : `https://image.tmdb.org/t/p/w600_and_h900_bestv2${e.profile_path}`} />
                      <Card.Body>

                        <Card.Text>
                          <p className='text-light'>{e.name}</p>
                          <p className='text-warning'>{e.job}</p>
                        </Card.Text>

                      </Card.Body>





                    </Card>
                  </div>

                ))}
              </div>
            </div>
          </div>


        ) : (
          <div className='d-flex align-items-center justify-content-center'>
            <Spinner animation="border" role="status" className='text-primary container'>
              <span className="visually-hidden ">Loading...</span>
            </Spinner>
          </div>
        )





      ) : (
        <div className=' d-flex justify-content-center my-3'>
          <h3 className='text-light my-3 text-center my-2'>{error}</h3>
          <div>
            <BsWifiOff className='text-light text-center my-2' style={{ fontSize: "36px" }} />
          </div>

        </div>
      )}


    </div>

  )
}

export default DeatailsPage
