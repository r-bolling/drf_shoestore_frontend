import logo from './logo.svg';
import { useEffect, useState } from 'react';

const App = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/shoe')
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setShoes(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {shoes.map(shoe => (
          <li key={shoe.id}>
            {shoe.size}
            <br />
            {shoe.brand_name}
            <br />
            {shoe.manufacturer}
            <br />
            {shoe.color}
            <br />
            {shoe.material}
            <br />
            {shoe.shoe_type}
            <br />
            {shoe.fasten_type}
            <br />
            <br />
          </li>
          
        ))}
      </ul>
    )
  }
}

export default App;
