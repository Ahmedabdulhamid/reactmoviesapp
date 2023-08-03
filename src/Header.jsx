import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from 'react-redux'
import { movieSearch, seriesSearch } from './Redux/Search';
import { moviesDetails, Charecter } from './Redux/.DetailsSlise';
import { SeriesDetails1, xseriesDetails } from './SeiesDetails';
import { Video, details } from './Redux/.DetailsSlise'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { seriesVideos } from './SeiesDetails';
import  "./header.css"
const Header = () => {
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')
  const { searchData, searchDataSeries, loading } = useSelector((s) => s.searchSlice)
  const { movie } = useSelector((s) => s.details)
  const navigate = useNavigate()
  const { id } = useParams()
  const [x, setX] = useState(true)
  useEffect(() => {
    dispatch(movieSearch(search))
    dispatch(seriesSearch(search))



  }, [search])
  const handleform = (id) => {
    navigate(`/details/${id}`, { state: { path: window.location.href } })
    dispatch(moviesDetails(id))
    dispatch(Video(id))
    dispatch(Charecter(id))
    setSearch('')
  }
  const handleform2 = (id) => {
    navigate(`/seriesDetails/${id}`, { state: { path: window.location.pathname } })
    dispatch(SeriesDetails1(id))
    dispatch(xseriesDetails(id))
    dispatch(seriesVideos(id))
    setSearch('')
  }
  const changeState = () => {
    if (x === true) {
      setX(false)

    }
    else {
      setX(true)
    }
  }
  return (
    <div>
      <Navbar bg="dark" variant='dark' expand="lg" >
        <Container>
          <Navbar.Brand href="#home">React Movies</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/movies1">Movie</Nav.Link>
              <Nav.Link as={Link} to="/series">Series</Nav.Link>

            </Nav>

            <Nav className="mL-auto ">

              <Form className="d-flex" >
                <Form.Control
                  type="search"
                  placeholder={x === true ? 'Search with movies' : 'Search with series'}
                  className="me-2"
                  aria-label="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}

                />


              </Form>
              {x === false ? (
                <Button variant="outline-info" onClick={changeState}>Search with movies</Button>
              ) : (
                <Button variant="outline-danger" onClick={changeState}>Search with series</Button>
              )}

            </Nav>

          </Navbar.Collapse>
        </Container>

      </Navbar>
      {search === '' ? ('') : (

        <div class='position-relative w-100    ' >
          <div className='container d-flex  justify-content-end '>
            <ul class='position-absolute   overflow-auto gap-2 z  bg-dark ' style={{ maxHeight: "342px" }}>


              {x === true ? searchData.map((e) => (
                <div className='d-flex  my-3' style={{ border: "1px solid red", padding: "10px 0", cursor: "pointer" }} onClick={() => handleform(e.id)}>

                  <li style={{ listStyle: "none" }} >
                    <Stack direction="row" spacing={2} >
                      <Avatar
                        alt="Remy Sharp"
                        src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${e.poster_path}`}
                        sx={{ width: 46, height: 46 }}

                      />
                    </Stack>
                  </li>



                  <li className='text-light  mx-2' style={{ cursor: "pointer", listStyle: "none" }} >{e.title}</li>

                </div>
              ))


                : (
                  searchDataSeries.map((e) => (
                    <div className='d-flex ' style={{ border: "1px solid red", padding: "10px 0", cursor: "pointer" }} onClick={() => handleform2(e.id)}>
                      <li style={{ listStyle: "none" }}>
                        <Stack direction="row" spacing={2}>
                          <Avatar
                            alt="Remy Sharp"
                            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${e.poster_path}`}
                            sx={{ width: 46, height: 46 }}
                          />
                        </Stack>
                      </li>
                      <li className='text-light mx-2' style={{ cursor: "pointer", listStyle: "none" }} >{e.name}</li>

                    </div>
                  ))
                )}




            </ul>
          </div>


        </div>





      )}



    </div>

  )
}

export default Header
