import { useLocation } from "react-router-dom";
import styled from "styled-components";
const Container = styled.div `
    top :50px;
    height: 80%;
    display: flex;
    justify-content: center;
    background-color:white;
    `;
const MovieImg = styled.img`
    position: relative;
    width: 100%;
    box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
    0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);
`
const Movie_detail = styled.div`
    top: 50px;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
`

function Detail () {
    const {state} = useLocation();
    //const x = useParams()  title을 이런 식으로 받아올 수도 있음
    //console.log(x)
    return(
    
        <Container>
            <MovieImg className="movie__img" src={`https://image.tmdb.org/t/p/w500${state.img}`} />
            <Movie_detail>
                <h1>{state.title}</h1>
                <h1>{state.rate ? "⭐".repeat(state.rate):" 이 영화에 대한 평점이 없습니다!"}</h1>
                {state.review ? <h1>{state.review}</h1> : <h1> 해당 영화에 대한 리뷰가 없습니다! </h1> }
            </Movie_detail>
        </Container>
      
        
        
    )
}

export default Detail;