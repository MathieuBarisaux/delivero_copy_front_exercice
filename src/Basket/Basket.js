import "./Basket.scss";

import { useEffect } from "react";

const Basket = (props) => {
  const { onBasket, setOnBasket, basketMove } = props;

  const deliveryPrice = 2.5;
  let totalPrice = 0;

  const calcTotalPrice = () => {
    for (let i = 0; i < onBasket.length; i++) {
      if (onBasket[i].quantity === 0) {
        const newArray = onBasket.splice(i, 1);
      } else {
        const actualPrice = onBasket[i].price;
        const actualQuantity = onBasket[i].quantity;
        const totalPriceArticles = actualPrice * actualQuantity;
        totalPrice += totalPriceArticles;
        totalPrice = Math.round(totalPrice * 100) / 100;
      }
    }
  };

  calcTotalPrice();

  return (
    <div className="Basket">
      <button
        type="submit"
        className={onBasket.length >= 1 ? "btn-validate" : ""}
      >
        Valider mon panier
      </button>

      {onBasket.length < 1 ? (
        <div className="Basket__empty">
          <p>Votre panier est vide</p>
        </div>
      ) : (
        <div className="BasketContainer">
          <div></div>
          {onBasket.map((item) => {
            return (
              item.quantity >= 1 && (
                <div className="BasketContainer__dishs" key={item.id}>
                  <div className="BasketContainer__dishs--tools">
                    <div
                      onClick={() => {
                        const newBasket = [...onBasket];
                        for (let i = 0; i < newBasket.length; i++) {
                          if (newBasket[i].id === item.id) {
                            newBasket[i].quantity--;
                            setOnBasket(newBasket);
                            totalPrice -= newBasket[i].price;
                          }
                        }
                        console.log(onBasket);
                      }}
                    >
                      <p>-</p>
                    </div>

                    <p>{item.quantity}</p>

                    <div>
                      <p>+</p>
                    </div>
                  </div>
                  <p className="lolol">{item.title}</p>
                  <p>{item.quantity * item.price} €</p>
                </div>
              )
            );
          })}

          <div className="BasketContainer__pricing">
            <div>
              <p>Sous-total</p>
              <p>{totalPrice} €</p>
            </div>
            <div>
              <p>Frais de livraison</p>
              <p>{deliveryPrice} €</p>
            </div>
          </div>

          <div>
            <p>Total</p>
            <p>{Math.round((totalPrice + deliveryPrice) * 100) / 100} €</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Basket;
