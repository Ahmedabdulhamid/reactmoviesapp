import React from 'react'
//import StarRatings from './react-star-ratings';

//import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { getTopMovies } from './Redux/CounterSlice';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate, useParams } from 'react-router-dom';
import img1 from "./image/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg"
import { moviesDetails } from './Redux/.DetailsSlise';
import StarRatings from 'react-star-ratings';

const TopMovies = () => {

  const { topMovie } = useSelector((s) => s.counter);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopMovies());

  }, []);
  const navigate = useNavigate()

  const handleClick = (id) => {

    dispatch(moviesDetails(id))

    navigate(`/details/${id}`)
  }
console.log(topMovie);

  return (
    <div className='container'>
      <h1 className='text-primary'>Top Movies</h1>

      <div className="row d-flex justify-content-center">
        {topMovie.map((e) => (
          <div className="col-md-3 col-sm-6 my-3" key={e.id}>
            <Card bg='dark' style={{ width: '100%', height: "100%" }}>
              <Card.Img variant="top" src={ e.poster_path===null?img1:`https://image.tmdb.org/t/p/w600_and_h900_bestv2${e.poster_path}`} />
              <Card.Body>
                <Card.Title className='text-light'>{e.title}</Card.Title>
                <Card.Text>
                 <h6 className='text-info'>Rate: <span className='text-light'>{e.vote_average}</span></h6>
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

                <Button variant="outline-info" onClick={() => handleClick(e.id)}>Details</Button>


              </Card.Body>
            </Card>

          </div>
        ))}
      </div>
      <hr style={{ color: "white" }} />

    </div>
  )
}

export default TopMovies
