import '../styles/search-results.css';

const SearchResults = ({ results }) => {
  if(!results.length) {
    return <p>No results!</p>
  } else {
    return (
      <>
        {results.map((result, index) => {
          return <img className='search-result-image' src={result} alt={`search result: ${index}`} />
        })}
      </>
    );
  }
}

export default SearchResults;