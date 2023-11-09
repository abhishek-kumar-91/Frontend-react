import {useState, useEffect } from "react"
import { fetchDataFromApi } from "./utils/api"
import {useSelector, useDispatch} from 'react-redux'
import { getApiConfiguration } from "./store/homeSlice";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from  './components/Footer/Footer'
import Home from './pages/Home/Home'
import Details from './pages/Details/Details'
import SearchResult from './pages/SearchResult/SearchResult'
import Explore from './pages/Explore/Explore'
import Error from './pages/404/Error'


function App() {
  const dispatch = useDispatch()
  const {url} = useSelector((state) => state.home)
  useEffect(()=>{
    fetchApiConfig();
  },[]);

  const fetchApiConfig = ()=>{
     fetchDataFromApi('/configuration')
     .then((res) =>{
      console.log(res);
      const url = {
        backdrop: res.images.secure_base_url+"original",
        poster: res.images.secure_base_url+"original",
        profile: res.images.secure_base_url+"original",
      }
      dispatch(getApiConfiguration (url))
     });
  }

  return (
  
    <BrowserRouter>
    {/* <Header /> */}
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/:mediaType/:id" element={<Details />} />
      <Route path="/search/:query" element={<SearchResult/>} />
      <Route path="/explore/:mediaType" element={<Explore />} />
      <Route path="*" element={<Error/>} />
    </Routes>
    {/* <Footer /> */}
    </BrowserRouter>
      
    
  )
}

export default App
