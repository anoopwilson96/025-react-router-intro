import React from "react";
import { Outlet } from "react-router-dom";

 function Root() {
  return(
    <>
<header>
  <div className="container">
    <a id="logo" href="#">
      Cartify
    </a>
    <nav>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
    <div className="actionLinks">
      <a href="#">
        <span className="material-symbols-outlined">
          favorite
        </span>
      </a>
      <a href="#">
        <span className="material-symbols-outlined">
          local_mall
        </span>
      </a>
    </div>
  </div>
</header>
<Outlet/>
    <footer><h1>  </h1></footer>
    </>



  )
  
}



export default Root;