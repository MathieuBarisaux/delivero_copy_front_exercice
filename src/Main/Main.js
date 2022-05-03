import "./Main.scss";

import { useState } from "react";

import Category from "../Category/Category";
import Basket from "../Basket/Basket";

const Main = (props) => {
  const { isLoading, restaurants } = props;

  const [onBasket, setOnBasket] = useState([]);
  const [basketMove, setBasketMove] = useState(false);

  return (
    <main className="container">
      <div className="allCategories">
        {isLoading &&
          restaurants.categories.map((item, index) => {
            if (index <= 5) {
              return (
                <Category
                  key={index}
                  isLoading={isLoading}
                  category={item}
                  onBasket={onBasket}
                  setOnBasket={setOnBasket}
                  basketMove={basketMove}
                  setBasketMove={setBasketMove}
                />
              );
            }
          })}
      </div>

      <Basket
        onBasket={onBasket}
        setOnBasket={setOnBasket}
        basketMove={basketMove}
      />
    </main>
  );
};

export default Main;
