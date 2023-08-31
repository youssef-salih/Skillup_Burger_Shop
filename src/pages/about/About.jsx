import React from "react";

const About = () => {
  return (
    <section className="container my-5">
      <main className="text-center">
        <div>
          <h1>A propos</h1>
          <article>
            <h4>Burger Shop</h4>
            <p>
              Nous sommes Burger Shop. L’endroit où l’on trouve les burgers les
              plus savoureux du monde.
            </p>
            <p>
              Découvrez les différents plats et burgers. Cliquez ci-dessous pour
              consulter notre carte
            </p>
          </article>
        </div>
        <div className="container bg-black text-white">
          <h2>Fondateur</h2>
          <article className="row">
            <div className="col-md-3" style={{ marginLeft: "100px" }}>
              <img
                src={"assets/skj.jpg"}
                alt="Fondateur"
                style={{ borderRadius: "50%" }}
              />
              <h3>Nelson</h3>
            </div>
            <p
              className="col-md-6"
              style={{ marginTop: "100px", fontSize: "25px" }}
            >
              Je suis Nelson, le fondateur de Burger Shop, <br /> Affilié à God
              Taste...
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};
export default About;
