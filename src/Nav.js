import React, { useEffect, useState } from 'react'
import "./Nav.css"

const Nav = () => {

    const [show,handleShow] = useState(false);

  useEffect(() => {
      window.addEventListener("scroll",()=> {
          if(window.scrollY > 100) {
              handleShow(true);
          } else handleShow(false);
      });
    //   return () => {
    //       window.removeEventListener("scroll");
    //   };
  }, []) ; 

  return (
    <div className={`nav ${show && "navBlack"}`}>
        <img
        className="NavLogo"
         src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
         alt="Neflix logo" />
         <img
         className="NavAvatar"
          src="https://imgs.search.brave.com/5OoASox4IeXX6ukt6K2Oq-3jb6rlqqgYQejMtPOVj4Y/rs:fit:1000:1000:1/g:ce/aHR0cHM6Ly9paDAu/cmVkYnViYmxlLm5l/dC9pbWFnZS42MTg0/MjcyNzcuMzIyMi9m/bGF0LDEwMDB4MTAw/MCwwNzUsZi51Mi5q/cGc" 
          alt="profile" />
    </div>
  )
}

export default Nav