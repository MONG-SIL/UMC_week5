import { useState, useEffect } from 'react'
import Movie from './Movie';
import Spinner from './assets/Spinner.gif'
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
` 
const Movies = styled.div `
  display: grid;
  grid-template-columns: repeat(4, minmax(400px, 1fr));
  grid-gap: 100px;
  padding: 50px;
  width: 80%;
  padding-top: 70px;
  justify-content: center;
`



function Getmovies(url) {
  const [loading, setLoading] = useState(false);
  const [movies , setMovies] = useState([]); //state를 컴포넌트에 넘길 수 있음
  
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZWEyZjBhODgyN2IzNmE0NWJiZDQ1YjI3NDExNzg0YiIsInN1YiI6IjY2MWRkYjNkNmQ5ZmU4MDE2MzVmYzE1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BCGVvOvJf0LcX3u13h_BpX3vdUn67gmsScVeWhXCr38'
    }
  };
  
  async function getmovie() {
    fetch(url.url, options)
    .then(response => response.json())
    .then(response => setMovies(response.results), setLoading(false))
    .catch(err => console.error(err))
    
  }

  useEffect(()=> {
    getmovie()
  }) 

  return (
    
    <Container>
        {loading ? <img src={Spinner} /> : <Movies>{movies.map((item) => <Movie key={item.id} title={item.title} img={item.poster_path} review={item.overview} rate={item.vote_average}/> )}</Movies> }
    </Container>
    
    )
}
export default Getmovies;