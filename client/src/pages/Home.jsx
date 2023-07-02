import React from "react";

const Home = () => {
  const imageStyle = {
    width: "100%", 
    height: "700px", 
    backgroundImage: "/airplane.jpg", 
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
   
  };
  return (
    <div>
      <img src="/airplane.jpg" alt="Airplane" style ={imageStyle} />
    </div>
  );
};

export default Home;
