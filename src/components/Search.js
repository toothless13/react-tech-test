import { useState } from 'react';
import '../styles/search.css';
import getImages from '../requests/getImages';

const Search = ({ setSearchResults }) => {
  const [value, setValue] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchResults(getImages(value));
  }

  return (
    <>
      <form className='search-form' onSubmit={handleSubmit}>
        <input className='search-input' type="text" onChange={(e) => setValue(e.target.value)} />
        <button className='search-button' type='submit' >Search</button>
      </form>
    </>
  );
}

export default Search;