import React, { useEffect, useState } from 'react'
import "../HeroBanner/style.scss"
import {useNavigate, useSearchParams} from 'react-router-dom'
import useFetch from '../../../Hooks/useFetch'
import {  useSelector } from 'react-redux'
import Img from '../../../components/lazyLoadingImage/img'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'


function HeroBanner() {
  const [background, setBackground] = useState("")
  const [query, setQuery] = useState("")
  const navigate = useNavigate()
  const {url} = useSelector((state) => state.home)
  const {data, loading} = useFetch("/movie/upcoming")


  useEffect(()=>{
    const bg = url.backdrop + data?.results[Math.floor(Math.random() * 20 +1)]?.backdrop_path
    setBackground(bg);
  },[data])
  const searchQueryHandler = (event) =>{
    if(event.key === "Enter" && query.length > 0){
      navigate(`/search/${query}`)
    }
  }
  return (
    <div className='heroBanner'>

      {!loading && <div className='backdrop-img'>
        <img src={background} />
      </div>}
      <div className='opacityLayer'></div>

      <ContentWrapper >
      <div className='heroBannerContent'>
          <span className='title'>Welcom</span>
          <span className='subTitle'>Millions of movies, TV shows and people to discover
            explore now.
          </span>
          <div className='searchInput'>
            <input
              type='text'
              placeholder='Search for a movie or tv show...'
              onKeyUp={searchQueryHandler}
              onChange={(e) => setQuery(e.target.value)}
              />
              <button>Search</button>
          </div>
        </div>
      </ContentWrapper>
      
        
      </div>
    
  )
}

export default HeroBanner