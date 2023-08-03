import React from 'react'
import Header from './Header'
import { Route,Routes } from 'react-router-dom';
import Home from './Home';

import { store } from './Redux/Store'; 
import "./index.css"
import { Provider } from 'react-redux';
import Footer from './Footer';
import MoviePage from './MoviePage';
import SeriesPage from './SeriesPage';
import DeatailsPage from './DeatailsPage';
import SeriesDetails from './SeriesDetails';
import PageNotFound from './PageNotFound';

const App = () => {
  return (
    <Provider store={store}>
     <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/movies1' element={<MoviePage/>}/>
      <Route path='/series' element={<SeriesPage/>}/>
      <Route path='/details/:id' element={<DeatailsPage/>}/>
      <Route path='/seriesDetails/:id'element={<SeriesDetails/>}/>
      
      <Route path='/*'element={<PageNotFound/>}/>
      
     </Routes>
     <Footer/>
     
    </Provider>
  )
}

export default App
