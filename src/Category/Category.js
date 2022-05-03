import "./Category.scss";

import Dish from "../Dish/Dish";

const Category = (props) => {
  const {
    category,
    isLoading,
    onBasket,
    setOnBasket,
    basketMove,
    setBasketMove,
  } = props;

  return (
    <div className="Category container">
      <h2>{isLoading && category.name}</h2>
      <div className="Category__container">
        {isLoading &&
          category.meals.map((item) => {
            return (
              <Dish
                key={item.id}
                meal={item}
                onBasket={onBasket}
                setOnBasket={setOnBasket}
                basketMove={basketMove}
                setBasketMove={setBasketMove}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Category;
