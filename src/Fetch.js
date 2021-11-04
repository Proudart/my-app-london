import React, { useState } from "react";
import './App.css';

const API = "https://dog.ceo/api/breeds/image/random";


const Fetch = () => {
 const [dogValue, setDogValue] = useState("");
 const title = "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg";
 
 const buttonHandler = () => {
     try {
   fetch(API)
     .then((response) => response.json())
     .then((data) => {
       setDogValue(data.message);
     })} catch {
        console.log("cat")
     }
 };
 return (
   <div>
     <button onClick={buttonHandler}>Fetch!</button>
     <br />
     <img className = "image" src={dogValue} alt={title} />
   </div>
 );
};
export default Fetch;