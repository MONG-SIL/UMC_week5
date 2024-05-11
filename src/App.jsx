import {BrowserRouter as Router , Route, Routes} from "react-router-dom";
import Home from "./Home";
import Getmovies from "./Getmovies";
import Navigation from "./Navigation";
import Detail from "./Detail";
import Notfound from "./Notfound";
import Signup from "./Signup";
import Login from "./Login";


function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/signup" element={<Signup />} ></Route>
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/popular" element={<Getmovies url='https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'/>} ></Route>
        <Route path="/nowplaying" element={<Getmovies url= 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'/>} ></Route>
        <Route path="/toprated" element={<Getmovies url='https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'/>} ></Route>
        <Route path="/upcoming" element={<Getmovies url='https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1'/>} ></Route>
        <Route path="/movie/:title" element={<Detail />} ></Route>
        <Route path="/*" element={<Notfound />} ></Route>
      </Routes>
    </Router>
    )
}

export default App;
