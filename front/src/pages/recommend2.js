import "./Recommendations.css";
import App from "./App";
import businessMan from "./Images/Profile/business_man.png";
import fatHamster from "./Images/Profile/animal_hamster3.png";

function Recommendations() {
  return (
    <div className="Recommendations">
      <header className="Rec-header">
        <h1>Your personalized recommendations</h1>
        <h5>These are things we think you might like</h5>
        <figure className="profile">
          <a href="#">
            <img
              id="type2"
              src={businessMan}
              width={60}
              height={80}
              className="businessMan-icon"
              alt="Business Man"
            />
          </a>
          <figcaption>Profile</figcaption>
        </figure>
        <figure className="child">
          <a href="#">
            <img
              id="type2"
              src={fatHamster}
              width={60}
              height={80}
              className="daughter-icon"
              alt="Daughter"
            />
          </a>
          <figcaption>Child #28</figcaption>
        </figure>
      </header>
      <body className="Rec-body">
        <figure id="recommendation #1" className="recommendation">
          <a href="#">
            <p id="rcorners1"></p>
          </a>
          <figcaption>Recommendation #1</figcaption>
        </figure>
        <figure id="recommendation #2" className="recommendation">
          <a href="#">
            <p id="rcorners1"></p>
          </a>
          <figcaption>Recommendation #2</figcaption>
        </figure>
        <figure id="recommendation #4" className="recommendation">
          <a href="#">
            <p id="rcorners1"></p>
          </a>
          <figcaption>Recommendation #3</figcaption>
        </figure>
        <figure id="recommendation #4" className="recommendation">
          <a href="#">
            <p id="rcorners1"></p>
          </a>
          <figcaption>Recommendation #1</figcaption>
        </figure>
        <figure id="recommendation #5" className="recommendation">
          <a href="#">
            <p id="rcorners1"></p>
          </a>
          <figcaption>Recommendation #5</figcaption>
        </figure>
        <figure id="recommendation #6" className="recommendation">
          <a href="#">
            <p id="rcorners1"></p>
          </a>
          <figcaption>Recommendation #6</figcaption>
        </figure>
      </body>
    </div>
  );
}

export default Recommendations;
