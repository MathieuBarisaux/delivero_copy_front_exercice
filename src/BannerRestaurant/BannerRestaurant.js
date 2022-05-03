import "./BannerRestaurant.scss";

const BannerRestaurant = (props) => {
  const { isLoading, restaurants } = props;

  return (
    <div className="Background--white">
      <div className="BannerRestaurant container">
        <div className="BannerRestaurant__left">
          <h1>{isLoading && restaurants.restaurant.name}</h1>
          <p>{isLoading && restaurants.restaurant.description}</p>
        </div>
        <img
          src={isLoading ? restaurants.restaurant.picture : ""}
          alt="Restaurant"
        />
      </div>
    </div>
  );
};

export default BannerRestaurant;
