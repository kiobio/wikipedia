



function SearchResults(props){
    return(
        <div>
           {props.searchResults.map((result, index)
           =>   (

            <a href={`https://en.wikipedia.org/wiki/${result.title}`}
            target='_blank' rel="noopener noreferrer">
               <h2> {result.title}</h2></a>
           ))}
        </div>
    )
}

export default SearchResults;