import React from 'react';
import './Home.css';

const Home = () => {
  const handleClick = async () => {
    try {
      const data = await fetch(import.meta.env.VITE_API_BACKEND_URL + '/test', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      alert(await data.text());
    } catch {
      alert('Błąd po stronie serwera');
    }
  }

  return (
    <div className='home__container'>
      <h1 className='home__title'>LexAdiutor</h1>
      <p className='home__description'>Trwają prace nad stroną</p>
      <button onClick={handleClick}>Zaciągnij dane z serwera</button>
    </div>
  )
}

export default Home