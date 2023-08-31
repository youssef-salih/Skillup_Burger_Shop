import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Shipping({ firstName }) {
  return (
    <Fragment>
      <div class="jumbotron text-center">
        <h1 class="display-3">Merci beacoup pour visiter notre boutique!</h1>
        <hr />

        <p class="lead">
          <strong>Votre commande est en route vers votre domicile</strong>
          <br /> <br />
          <Link class="btn btn-primary btn-sm" to="/">
            Retournez à la page d'accueil
          </Link>
        </p>
        <br />
      </div>
    </Fragment>
  );
}

export default Shipping;
