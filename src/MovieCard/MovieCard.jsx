import React,{useState,useEffect} from 'react';
import classes from './MovieCard.module.css';
import axios from 'axios';
import MovieReel from './../assets/FilmReel.svg';
import ThreeDots from './../assets/three-dots-vertical.svg';
import { BsGrid,BsList } from "react-icons/bs";

const MovieCard = (props) => {
    // console.log(props)

    const [data,setData] = useState([]);

    const [view,setView] = useState(1);
    const [fullData,setFullData] = useState([]);

    useEffect(()=>{
        const dataFetcher = async () => {
            console.log('jlsdkf')
            await axios.get(`https://swapi.dev/api/films/`).then(rs=>{
                console.log(rs.data.results);
                setData(rs.data.results);
                setFullData(rs.data.results);
            })
        }

        dataFetcher();
    },[])

    useEffect(()=>{

        console.log(props.searchInput,' -> card')
        if(props.searchInput && props.searchInput.trim().length>0){
            setData(()=>{
                return fullData.filter(ft=>{
                    return ft.title.toLowerCase().includes(props.searchInput.toLowerCase());
                })
            })
        }else{
            setData(fullData);
        }
    },[props.searchInput]);

    return (
      <>
        <div className={classes["entry-div"]}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <p className={classes["entry-title"]}>{props.title}</p>
            <div
              style={{
                fontSize: "1.8vw",
                cursor: "pointer",
                marginTop: "1vw",
                border: "1px white solid",
                display: "flex",
                width: "5vw",
              }}
            >
              {" "}
              <BsGrid className='grid-toggle'
                style={{ border: "1px white solid", width: "2.5vw" }}
                onClick={() => {
                  setView(1);
                }}
              />{" "}
              <BsList className='list-toggle'
                style={{ border: "1px white solid", width: "2.5vw" }}
                onClick={() => {
                  setView(0);
                }}
              />
            </div>
          </div>

          {view ? (
            <>
              <div className={classes["card-container"]}>
                {data.map((dt) => {
                  return (
                    <div className={classes["card"]}>
                      <img
                        className={classes["card-img"]}
                        src="https://picsum.photos/seed/picsum/536/354"
                        alt=""
                      />

                      <div className={classes["card-desc"]}>
                        <img
                          className={classes["reel-svg"]}
                          src={MovieReel}
                          alt=""
                        />
                        <p className={classes["movie-name"]}>{dt.title}</p>
                        <img
                          className={classes["vertical-dots"]}
                          src={ThreeDots}
                          alt=""
                          onClick={() => {
                            props.setSide(1);
                            props.setMovieDetails([
                              dt.title,
                              dt.opening_crawl,
                              "",
                            ]);
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            <>
              <div className={classes["list-container"]}>
                <div className={classes["list-heading"]}>
                  <p className={classes["list-heading-first"]}>Name</p>
                  <p className={classes["list-heading-second"]}>Director</p>
                  <p className={classes["list-heading-third"]}>Release Date</p>
                  <p className={classes["list-heading-fourth"]}></p>
                </div>
                {data.map((dt, index) => {
                  return (
                    <div
                      style={{
                        borderBottom: `${
                          index == data.length - 1 ? "0px" : "1px solid white"
                        }`,
                      }}
                      className={classes["list-desc"]}
                    >
                      <p className={classes["list-heading-first"]}>
                        {dt.title}
                      </p>
                      <p className={classes["list-heading-second"]}>
                        {dt.director}
                      </p>
                      <p className={classes["list-heading-third"]}>
                        {dt.release_date}
                      </p>
                      <div className={classes["list-heading-fourth"]}>
                        <img
                          onClick={() => {
                            props.setSide(1);
                            props.setMovieDetails([
                              dt.title,
                              dt.opening_crawl,
                              "",
                            ]);
                          }}
                          className={classes["list-movie-svg"]}
                          src={MovieReel}
                          alt=""
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </>
    );
};

export default MovieCard;