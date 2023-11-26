import { BsFillFolderFill, BsArrowRight } from "react-icons/bs";
import React,{useState} from 'react';
import MovieReel from './assets/FilmReel.svg';
import classes from './Sidebar.module.css';

function Sidebar(props) {

  const [filmDisplay,setFilmDisplay] = useState(0);

  const filmDisplayHandler = (a,b) => {
    if(a==0)b(1);
    else b(0);
  }

  const side = props.side;

  return (
    <>
    <aside id="sidebar" style={{overflow:"hidden",marginRight:0}}>
      <ul className="sidebar-list">
        <li className="sidebar-list-item" onClick={()=>{filmDisplayHandler(filmDisplay,setFilmDisplay);props.cardHandler(0)}}>
          <a>
            <BsFillFolderFill className="icon folder" />
            <span className="sidebar-list-item-text">Films</span>
            <BsArrowRight className="icon arrow" />
          </a>
        </li>
        <li className="sidebar-list-item" style={{display:`${filmDisplay==0?'none':'block'}`,marginLeft:"2vw" }} onClick={()=>{props.cardHandler(1)}}>
          <a>
              <BsFillFolderFill className="icon folder" />
              <span className="sidebar-list-item-text">Movie Name</span>
              <BsArrowRight className="icon arrow" />
            </a>
          </li>
        <li className="sidebar-list-item" onClick={()=>{props.cardHandler(2);}}>
          <a>
            <BsFillFolderFill className="icon folder" />
            <span className="sidebar-list-item-text">People</span>
            <BsArrowRight className="icon arrow" />
          </a>
        </li>
        <li className="sidebar-list-item" onClick={()=>{props.cardHandler(2);}}>
          <a>
            <BsFillFolderFill className="icon folder" />
            <span className="sidebar-list-item-text">Planets</span>
            <BsArrowRight className="icon arrow" />
          </a>
        </li>
        <li className="sidebar-list-item" onClick={()=>{props.cardHandler(2);}}>
          <a>
            <BsFillFolderFill className="icon folder" />
            <span className="sidebar-list-item-text">Species</span>
            <BsArrowRight className="icon arrow" />
          </a>
        </li>
        <li className="sidebar-list-item" onClick={()=>{props.cardHandler(2);}}>
          <a>
            <BsFillFolderFill className="icon folder" />
            <span className="sidebar-list-item-text">Starships</span>
            <BsArrowRight className="icon arrow" />
          </a>
        </li>
        <li className="sidebar-list-item" onClick={()=>{props.cardHandler(2);}}>
          <a>
            <BsFillFolderFill className="icon folder" />
            <span className="sidebar-list-item-text">Planets</span>
            <BsArrowRight className="icon arrow" />
          </a>
        </li>
      </ul>
    </aside>

    <div style={{display:`${side==0?'none':'flex'}`,width:"29.28vw",height:"100vh",position:"absolute",zIndex:"1",borderRight:"1px solid white",boxSizing:"border-box",backgroundColor:"#03123D",flexDirection:"column"}}>
      <div className={classes['entry-heading']}>
        <p className={classes['heading-text']}>Movie Details</p>
        <p onClick={()=>{props.setSide(0)}}  className={classes['cross']}>x</p>
      </div>
      <div className={classes['img-container']}>
        <p>Image</p>
        <img style={{marginTop:"0.5vw",borderRadius:"0.8vw"}} src="https://picsum.photos/seed/picsum/536/354" alt="" />
      </div>

      <div className={classes['detail-container']}>
        <p className={classes['movie-title']}>Title</p>
        <input className={classes['title-text']} readOnly type="text" value={props.movieDetails[0]} />
        <p className={classes['movie-title']}>Opening Crawl</p>
        <p className={classes['title-para']}>{props.movieDetails[1]}</p>
        <p className={classes['movie-title']}>Genre</p>
        <input className={classes['title-text']} readOnly type="text" value={props.movieDetails[2]}/>
      </div>
    </div>
    </>
  );
}
export default Sidebar;
