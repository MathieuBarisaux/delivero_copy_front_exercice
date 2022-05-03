import "./App.scss";

import axios from "axios";

import { useState, useEffect } from "react";

import Header from "./Header/Header";
import BannerRestaurant from "./BannerRestaurant/BannerRestaurant";

import Main from "./Main/Main";

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const callForRestaurant = async () => {
      try {
        const response = await axios.get("http://localhost:3001/");
        setRestaurants(response.data);
        setIsLoading(true);
      } catch (error) {
        console.log(error.response);
      }
    };
    callForRestaurant();
  }, []);

  return (
    <>
      <Header />
      <BannerRestaurant isLoading={isLoading} restaurants={restaurants} />
      <Main isLoading={isLoading} restaurants={restaurants} />
    </>
  );
}

export default App;
