import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import location from "./images/compass.svg";
import email from "./images/envelope-at-fill.svg";
import person from "./images/person.svg";
import phone from "./images/telephone.svg";

function App() {
  const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetchData();
    fetchData("https://randomuser.me/api");
  }, []);

  let fetchData = async (url) => {
    let response = await fetch(url);
    let fetched = await response.json();
    // console.log(fetched.results);
    setData(fetched.results);
  };

  return (
    <div className="App">
      <div className="con">
        <h2>Random Person App</h2>


        {data.map((each) => {
          return (
            <div key={each.login.uuid} className= 'person' >
              <img className="person-img" src={each.picture.large} alt="" />

              <div className="details">
              <p>
                {" "}
                <img src={person} alt="" />
                {each.name.first}
              </p>

              <p>
                {" "}
                <img src={person} alt="" />
                {each.name.last}
              </p>
              <p>
                <img src={location} alt="" />
                 {each.location.country}
              </p>
              {/* <p>{each.dob.age} years</p> */}
              <p><img src={phone} alt="" /> {each.phone}</p>
              </div>
            </div>
          );
        })}
        <button
          onClick={() => {
            fetchData();
            fetchData("https://randomuser.me/api");
          }}
        >
          Generate Person
        </button>
      </div>
    </div>
  );
}

export default App;
