import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getTopSeries } from './Redux/CounterSlice';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import img1 from "./image/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg"
const TopSeries = () => {
  const { topSeries } = useSelector((s) => s.counter)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(getTopSeries())
  }, [])
  const handleClick = (id) => {

    navigate(`/seriesDetails/${id}`)

  }


  return (
    <div className='container'>
      <h1 className='text-primary'>Top Series</h1>
      <div className="row d-fle justify-content-center">
        {topSeries.map((e) => (
          <div className="col-md-3 col-sm-6 my-3" key={e.id}>
            <Card className='bg-dark' width={'100%'} height={'100%'}>
              <Card.Img variant="top" src={ e.poster_path===null?img1:`https://image.tmdb.org/t/p/w600_and_h900_bestv2${e.poster_path}`} />
              <Card.Body>
                <Card.Title className='text-light'>{e.name}</Card.Title>
                <Card.Text >
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

export default TopSeries
