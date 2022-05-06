import './App.css';
import requests from './requests'
import Row from './Row';
import Banner from './Banner';
import Nav from './Nav';

function App() {
   
  return (
    <div className="App">

      <Nav/>
      
        <Banner />

      <div className="rowss" >
        <Row title="Trending Now" fetchUrl={requests.fetchTrending}  isLarge={true}/>
        <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRated}/>
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/> 
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
        <Row title="Documantaries" fetchUrl={requests.fetchDocumantaries}/>

      </div>
      
    </div>
  );
}

export default App;
