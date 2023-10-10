import { useState } from 'react';
import '../styles/app.css';
import Search from './Search';

const App = () => {
  const [searchResults, setSearchResults] = useState();
  
  return (
    <div className='app'>
      <img className='logo' src='https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg' alt='NASA logo' />
      <Search setSearchResults={setSearchResults} />
    </div>
  );
}

export default App;
