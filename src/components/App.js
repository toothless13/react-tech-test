import { useState } from 'react';
import '../styles/app.css';
import Search from './Search';
import SearchResults from './SearchResults';

const App = () => {
  const [searchResults, setSearchResults] = useState();
  const mockData = { img: "https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" };

  return (
    <div className='app'>
      <img className='logo' src='https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg' alt='NASA logo' />
      <Search setSearchResults={setSearchResults} />
      <div className='search-results'>
        <SearchResults searchResults={mockData} />
      </div>
    </div>
  );
}

export default App;
