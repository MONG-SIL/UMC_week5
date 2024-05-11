import styled from "styled-components";
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
  

function Login () {
   
    return(
        <Movie_search>
            <Home_h1>로그인 하세요</Home_h1>
            <Find_movie placeholder="이름"></Find_movie>
            <Find_movie placeholder="비밀번호"></Find_movie>
            <button>로그인</button>
        </Movie_search>
)
}

export default Login;