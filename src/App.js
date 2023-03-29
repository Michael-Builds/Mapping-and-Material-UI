import './App.css';
import React from 'react'
import { useState } from "react";
import SendIcon from '@mui/icons-material/Send';


const Array = [
{
  name: "Michael",
  Expertise: "FrontEnd Developer",
  Experience :"2 Years"
},
{
  name: "Julius",
  Expertise: "BackEnd Developer",
  Experience :"3 Years"
},
{
  name: "Prince",
  Expertise: "FullStack Developer",
  Experience :"6 Years"
},

];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = () => {

    setCurrentIndex((currentIndex + 1) % Array.length);
  };

  return (
   <>
   <h1>Personal Information</h1>
   {Array.map((person, index) => (
        <div key={index} style={{ display: index === currentIndex ? "block" : "none" }}
        className={`person-info ${index === currentIndex ? "active" : ""}`}>
          <h2>
            Name: {person.name}
            <br />
            Expertise: {person.Expertise}
            <br />
            Experience: {person.Experience}
          </h2>
        </div>
      ))}
       <button onClick={handleClick}> <SendIcon /> </button>
   </>
  );
}

export default App;
