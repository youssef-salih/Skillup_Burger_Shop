import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <section className="home">
        <div>
          <h1>Burger Shop</h1>
          <p
            transition={{
              delay: 0.2,
            }}
          >
            Prennez le temps de vous offrir un savoureux burger.
          </p>
        </div>
        <Link to="/menu">Explore Menu</Link>
      </section>
    </>
  );
};
export default Home;
