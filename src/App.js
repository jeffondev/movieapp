import React from "react";
import PropTypes from 'prop-types';
;
function Food({name, picture, rating}) {
  return(
    <div>
        <h2>I like {name}</h2>
        <h4>{rating}/5.0</h4>
        <img src={picture} alt={name} width={320} />
    </div>
  ); 
}

const foodlike = [
  {
    id:1,
    name: 'Kimchi',
    image: 'https://www.aeriskitchen.com/wp-content/uploads/2022/02/Korean_Cup_RaMyeon_BokkEum_01-.jpg',
    rating: 5,
  },
  {
    id:2,
    name: 'Samgyeopsal',
    image: 'https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201702/27/117f5b49-1d09-4550-8ab7-87c0d82614de.jpg',
    rating: 4.9,
  },
  {
    id:3,
    name: 'Bibimbap',
    image: 'https://post-phinf.pstatic.net/MjAxNzEwMTdfMjkw/MDAxNTA4MjM4MDAwNzEz.HRweTi63vLZnRsfQTL7Cif42bL69k1-5CjPNOXSJN18g.LpyOadRUGfvarrrGGn9lKdgSR0s1bHsQrAgneHhNDtog.JPEG/1.jpg?type=w1200',
    rating: 4,
  },
];

function App() {
  return (
  <div>
    {foodlike.map(dish => (
      <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
      ))}
  </div>
  );  
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired, 
  rating: PropTypes.number
};

export default App;
