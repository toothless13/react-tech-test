import '../styles/search-results.css';

const SearchResults = ({ searchResults }) => {
  let image = searchResults.img;

  return (
    <>
      <img className='search-result-image' src={image} alt='first search result' />
    </>
  );
}

export default SearchResults;