import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import StarRating from './StarRating';

function Test () {
  const [movieRating, setMovieRating] = useState(0);
  return(
    <div>
      <StarRating maxRating={10} color='tomato' onSetRating={setMovieRating}/>
      <p>This movie is rated {movieRating} stars</p> 
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating maxRating={5} defaultRating={2}/>
    <Test />
  </React.StrictMode>
);


