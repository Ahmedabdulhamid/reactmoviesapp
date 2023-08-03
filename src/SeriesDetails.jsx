import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { SeriesDetails1, xseriesDetails } from './SeiesDetails';
import Modal from 'react-bootstrap/Modal';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { AiFillPlayCircle } from 'react-icons/ai'
import { MdAddToPhotos } from "react-icons/md"
import { AiOutlineStar } from "react-icons/ai"
import { seriesVideos } from './SeiesDetails';
import { BsWifiOff } from 'react-icons/bs'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "./image/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg"
import Card from 'react-bootstrap/Card';
const SeriesDetails = () => {
  const { id } = useParams()
  const { series, generes, casting, crew, videos, error, loading } = useSelector((s) => s.detailsSeries)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(SeriesDetails1(id))
    dispatch(xseriesDetails(id))
    dispatch(seriesVideos(id))

  }, [id])
  console.log(casting);

  console.log(crew);
  const handleBack = () => {

    navigate(-1)

  }
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
    error === '' ? (


      loading ? (
        <div>
<div style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w600_and_h900_bestv2${series.backdrop_path})`, backgroundSize: "cover", height: "50%", backgroundPosition: "center" }} className='background ' >


<div className="container">
  <div className="row">
  <h1 className='text-center text-info zeindex'>Series details</h1>
    <div className="col-md-3 zindex ">
      <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${series.poster_path}`} alt="" width={'100%'} />
    </div>

    <div className="col-md-9 zindex">
      <div style={{ width: "100%" }}>
        <h1 className='text-light'>{series.original_name}</h1>
        <p className='text-light'>{series.last_air_date} ( {series.original_language}) {generes.map((e) => (
          <span key={e.id}>{e.name} ,</span>

        ))}
          <span> Number of episodies: {series.number_of_episodes}</span>

        </p>
        <span className='text-primary x'>overview:</span>
        <span className='text-light'>{series.overview?series.overview:'NOT FOUND'}</span>
       

      </div>









      <div style={{ display: "flex", justifyContent: "space-evenly " }}>
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

              <Modal.Body className='bg-dark'>
                {videos.length === 0 ? (
                  <div>
                    <h6 className='text-light'>{series.original_name}</h6>
                    <Link to={`${series.homepage}`}><Button variant="outline-info">{series.homepage ? "Go To Home Page" : "Trailer not found"}</Button></Link>
                  </div>

                ) : (
                  videos.map((e) => (

                    <div className="embed-responsive embed-responsive-16by9" key={e.id} >
                      <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${e.key}`} width={'100%'} height={400}></iframe>
                    </div>
                  )
                  ))}




              </Modal.Body>

            </Modal>
          </div>

          <h6 className='text-light'>Play Trailer</h6>
        </div>
      </div>


      <div className='d-flex justify-content-center my-3'>
        <Button className='bg-primary' onClick={handleBack}>Back</Button>
      </div>

    </div>
  </div>
</div>
</div >
<div className='container'>
  {casting.length>0?( <h1 className='text-info'>Series casting</h1>):(
 <p className='text-light'>no cast for  {series.original_name}</p>
  )}
         


          <div className='d-flex flex-nowrap col-12 overflow-auto gap-2' >
            {casting.map((e) => (
              <div className='col-lg-3 col-md-3 col-sm-4 col-7 ' key={e.id}>
                <Card bg='dark ' style={{ width: '100%', height: "100%" }}>
                  <Card.Img variant="top" className='m' src={e.profile_path === null ? img1 : `https://image.tmdb.org/t/p/w600_and_h900_bestv2${e.profile_path}`} />
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
        </div>


        <div className='container'>
        {crew.length>0?( <h1 className='text-info'>Series crew</h1>):(
 <p className='text-light'>no crew for {series.original_name}</p>
  )}
          <div className='d-flex flex-nowrap col-12 overflow-auto gap-2' >
            {crew.map((e) => (
              <div className='col-lg-3 col-md-3 col-sm-4 col-7 ' key={e.id}>
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
      
      )
        : (
          <div className='d-flex align-items-center justify-content-center '>
            <Spinner animation="border" role="status" className='text-primary container'>
              <span className="visually-hidden ">Loading...</span>
            </Spinner>
          </div>
        )





    ) : (
      <div>
        <h3 className='text-light my-3 text-center my-5'>{error}</h3>
        <BsWifiOff className='text-light' style={{ fontSize: "36px" }} />
      </div>

    )



  )
}

export default SeriesDetails
