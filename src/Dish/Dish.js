import "./Dish.scss";

const Dish = (props) => {
  const { meal, onBasket, setOnBasket, basketMove, setBasketMove } = props;

  return (
    <div
      className="Dish"
      onClick={() => {
        if (meal.quantity) {
          for (let i = 0; i < onBasket.length; i++) {
            if (onBasket[i].id === meal.id) {
              const newBasket = [...onBasket];
              newBasket[i].quantity++;
              setBasketMove(!basketMove);
              setOnBasket(newBasket);
              console.log(onBasket);
            }
          }
        } else {
          meal.quantity = 1;
          const newBasket = [...onBasket];
          const newMeal = {
            quantity: 1,
            title: meal.title,
            price: Number(meal.price),
            id: meal.id,
          };

          newBasket.push(newMeal);
          setOnBasket(newBasket);
          setBasketMove(!basketMove);
          console.log(onBasket);
        }
      }}
    >
      <div className="Dish__left">
        <h3>{meal.title}</h3>
        <p>{meal.description}</p>
        <div className="Dish__left--price">
          <p>{meal.price} € </p>
          {meal.popular && <p>★ Populaire</p>}
        </div>
      </div>
      {meal.picture && <img src={meal.picture} alt="" />}
    </div>
  );
};

export default Dish;
