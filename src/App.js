import { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResult';

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [offset, setOffset] = useState(0);


  async function fetchData(){
    const response = await fetch(`https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch=${searchQuery}&sroffset=${offset}`);
    const data = await response.json();
    setSearchResults(data.query.search);
    
  }
    useEffect(() => {
      searchQuery && fetchData ();
    }, [offset]);
  
  return (

    <div>
      <SearchBar 
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      fetchData={fetchData}
      />
      <SearchResults
      searchResults = {searchResults}
      
      />
    <button onClick={() => setOffset(offset === 0 ? 0 : offset - 10)}>Prev</button>
    <button onClick={() => setOffset(offset + 10)}>Next</button>
    
    </div>
  );
}

export default App;


