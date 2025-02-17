import styled from "styled-components";
import { useState } from "react";
import Movie from "./Movie";
const Movie_search = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 100;
    left: 0;
    background: 20254f;
    z-index: 999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Find_movie= styled.input`
    width: 600px;
    height: 50px;
    font-size: 20px;
    border: 0;
    border-radius: 15px;
    padding-left: 10px;
    background-color: rgb(233, 233, 233);
  `

const Home_h1 = styled.h1 `
    position: relative;
    margin: 0;
    font-weight: 700;
    text-decoration: none;
    color: azure;
    `
const Container = styled.div`
    height: 80%;
    width:80%;
    display: flex;
    justify-content: center;
    overflow:auto; 
    &::-webkit-scrollbar {
      width: 8px;
      height: 8px;
      border-radius: 6px;
      background: rgba(255, 255, 255, 0.4);
    }
    &::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.3);
      border-radius: 6px;
    }
  `   
const Movies = styled.div `
  display: grid;
  grid-template-columns: repeat(4, minmax(400px, 1fr));
  grid-gap: 30px;
  padding: 50px;
  width: 80%;
  padding-top: 70px;
  justify-content: center;
`
function Home () {
    const [movieName, setMovieName] = useState("");
    const [movieSearch, setMovieSearch] = useState("");
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZWEyZjBhODgyN2IzNmE0NWJiZDQ1YjI3NDExNzg0YiIsInN1YiI6IjY2MWRkYjNkNmQ5ZmU4MDE2MzVmYzE1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BCGVvOvJf0LcX3u13h_BpX3vdUn67gmsScVeWhXCr38'
        }
      };
      
      fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`, options)
        .then(response => response.json())
        .then(response => setMovieSearch(response.results))
        .catch(err => console.error(err));



    function searchMov(event){
        setMovieName(event.target.value);
    }
    return(
        <Movie_search>
            <Home_h1>환영합니다!!!!</Home_h1>
            <Find_movie placeholder="영화 찾기" onChange={searchMov}></Find_movie><div>🛩✈</div>
            <Container>{movieName ? <Movies>{movieSearch.map((item) => <Movie key={item.id} title={item.title} img={item.poster_path} review={item.overview} rate={item.vote_average}/> )}</Movies> : null }</Container>            
        </Movie_search>

        
)
}

export default Home;