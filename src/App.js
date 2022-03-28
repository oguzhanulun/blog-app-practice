import React, { useEffect, useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Header from "./components/Header";
import axios from "axios";

function App() {
  const [cardItem, setCardItem] = useState([]);

  useEffect(() => {
    const getCards = async (items) => {
      await axios
        .get("https://blogsato-drf.herokuapp.com/api/list/")
        .then((response) => setCardItem(response.data.results));
    };
    getCards();
  }, []);
  console.log(cardItem);
  return (
    <div className="App">
      <Header />;
      <Cards cardInfos={cardItem} />;
    </div>
  );
}

export default App;
