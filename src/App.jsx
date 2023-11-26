import './App.css'
import Home from './Home'
import Header from './Header'
import Sidebar from './Sidebar'
import PeopleCard from './PeopleCard/PeopleCard'
import React,{useState,useEffect} from 'react'
import MovieCard from './MovieCard/MovieCard'

function App() {

  const [hDisp,setHDisp] = useState(0);
  const [cardNumber,setCardNumber] = useState(0);
  const [side,setSide] = useState(0);
  const [movieDetails,setMovieDetails] = useState(['','','']);

  const hDispHandler = () => {
    console.log(hDisp,'disp')
    setHDisp(1);
  }

  const cardHandler = (e) => {
    setCardNumber(e);
  }

  const [searchInput,setSearchInput] = useState('');

  const [show,setShow] = useState(1);

  const searchHandler = (e) => {
    setSearchInput(e);
    setShow(prev=>{
      return prev+1;
    })
    // console.log(e);
  }

  return (
    <div className='grid-container'>
      <Header searchHandler={searchHandler}/>
      <Sidebar movieDetails={movieDetails} searchInput={searchInput} side={side} setSide={setSide} hDispHandler = {hDispHandler} cardHandler={cardHandler} />
      {/* <div className="empty"></div> */}
      {/* {searchInput && cardArr[cardNumber]}       */}
      {cardNumber==1 && show>=1 &&  <MovieCard searchInput={searchInput} setMovieDetails={setMovieDetails} setSide={setSide} title='Films'/>}
      {cardNumber==2 && show>=1 &&  <PeopleCard searchInput={searchInput} setMovieDetails={setMovieDetails} setSide={setSide} title='People'/>}
      {cardNumber==0 && <Home />}
      {/* <Card /> */}
      {/* <div className="empty"></div> */}
    </div>
  )
}

export default App
