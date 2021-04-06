


function SearchBar(props){

        function Change(e){
            props.setSearchQuery(e.target.value)
        }
    

    return(
    <div>
    <form onSubmit={(e) => {
        e.preventDefault();
         props.fetchData();
        }}>
     <input name = "searchBar"
     value={props.searchQuery} 
     onChange={Change} />   
    <button type="submit">Search</button>
    </form>
    </div>

    
    )
}

export default SearchBar;

