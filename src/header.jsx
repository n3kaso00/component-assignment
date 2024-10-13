import React from "react";
  

  const Header = ({image, title}) => {
    return (
      <div className = "header">
        <img src='img/profile.img.png' alt = "Header image" width={100} height={100} className='header-image'></img>
        <h1>Welcome to product page!</h1>
      </div>
    )
  }


export default Header;