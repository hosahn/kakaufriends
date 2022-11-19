import './App.css';

import businessMan from './Images/Profile/business_man.png'
import businessWoman from './Images/Profile/business_woman.png'

import typeSeries from './Images/Type/tv_girl_tooku.png'
import typeMovies from './Images/Type/kandou_movie_eigakan.png'

import genreRacing from './Images/Genre/car_racing_kart.png'
import genreFantasy from './Images/Genre/fantasy_kouryu_dragon.png'
import genreSuperHero from './Images/Genre/hero_woman.png'
import genreAction from './Images/Genre/mizudeppou_kids.png'
import genreEducational from './Images/Genre/school_class_english.png'
import genreScienceFiction from './Images/Genre/space_uchuhikoushi_man.png'
import genreSports from './Images/Genre/sports_soccer_pass_man.png'
import genreMystery from './Images/Genre/tantei_hannin.png'
import genreAnimals from './Images/Genre/tree_animals_group.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Welcome to Kakau Kids</h1>
          <h5>A place for children to discover new TV series and movies!</h5>
          <figure className="profile">
              <a href="#">
                  <img src={businessMan} width={60} height={80} className="businessMan-icon" alt="Business Man"/>
              </a>
              <figcaption>Profile</figcaption>
          </figure>
      </header>
        <body className="App-body">
        <div className="App-body-type">
            <figure class="type">
                <a href="#">
                    <img id="type1" src={typeSeries} width={300} height={300} className="series-icon" alt="Series" />
                </a>
                <figcaption>TV Series</figcaption>
            </figure>
            <figure class="type">
                <a href="#">
                    <img id="type2" src={typeMovies} width={300} height={300} className="movie_icon" alt="Movies" />
                </a>
                <figcaption>Movies</figcaption>
            </figure>
        </div>
        <div className="App-body-genre">
            <figure className="genre">
                <a href="#">
                    <img src={genreAction} width={300} height={300} className="action-icon" alt="Action"/>
                </a>
                <figcaption>Action</figcaption>
            </figure>
            <figure className="genre">
                <a href="#">
                    <img src={genreRacing} width={300} height={300} className="racing_icon" alt="Racing"/>
                </a>
                <figcaption>Racing</figcaption>
            </figure>
            <figure className="genre">
                <a href="#">
                    <img src={genreAnimals} width={300} height={300} className="animals_icon" alt="Animals"/>
                </a>
                <figcaption>Animals</figcaption>
            </figure>
            <figure className="genre">
                <a href="#">
                    <img src={genreFantasy} width={300} height={300} className="fantasy-icon" alt="Fantasy"/>
                </a>
                <figcaption>Fantasy</figcaption>
            </figure>
            <figure className="genre">
                <a href="#">
                    <img src={genreSports} width={300} height={300} className="sports_icon" alt="Sports"/>
                </a>
                <figcaption>Sports</figcaption>
            </figure>
            <figure className="genre">
                <a href="#">
                    <img src={genreEducational} width={300} height={300} className="educational_icon" alt="Educational"/>
                </a>
                <figcaption>Educational</figcaption>
            </figure>
            <figure className="genre">
                <a href="#">
                    <img src={genreMystery} width={300} height={300} className="mystery-icon" alt="Mystery"/>
                </a>
                <figcaption>Mystery</figcaption>
            </figure>
            <figure className="genre">
                <a href="#">
                    <img src={genreScienceFiction} width={300} height={300} className="scienceFiction_icon" alt="Science Fiction"/>
                </a>
                <figcaption>Science Fiction</figcaption>
            </figure>
            <figure className="genre">
                <a href="#">
                    <img src={genreSuperHero} width={300} height={300} className="SuperHero_icon" alt="Super Hero"/>
                </a>
                <figcaption>Super Hero</figcaption>
            </figure>
        </div>
        </body>
    </div>
  );
}

export default App;
