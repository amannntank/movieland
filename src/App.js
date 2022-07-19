import React, {useEffect, useState} from "react";
import "./App.css/App.css"
import Search from "./Components/Search Component/Search.jsx"
import Movies from "./Components/Movie Component/Movie.jsx"
//API key: fa9787a1


function App() {
  const API_URL = "http://www.omdbapi.com?apikey=fa9787a1"
  const [movies, setMovies] = useState([])
  //Search Movies is going to call our API
  const searchMovies = async (title) => {
    const Response = await fetch(`${API_URL}&s=${title}`)
    const Data = await Response.json()
    setMovies(Data.Search)
  }

  const [search, setSearch] = useState("");
  const [visibleSearch, setVisibleSearch] = useState("");
  
  const onChange = (e) => {
    const {value} = e.target;
    setSearch(value)
  }

  const onClick = () => {
    setVisibleSearch(search)
  }


 
  useEffect(()=>{
    searchMovies(visibleSearch)
  },[visibleSearch])

  


  return (
    <div className="app">
      <h1>Movie Land</h1>
      <Search onClick={onClick} onChange={onChange} value={search}/>


      {
        movies?.length > 0 
        ? (
          <div className="container">
            { movies.map((m)=>{
              return <Movies movie={m}/>
                 })} 
          </div>
          ) : (
            <div className="empty">
              <h2>No movies found</h2>
            </div>
          )
      }
  
    </div>
  );
}

export default App;
  