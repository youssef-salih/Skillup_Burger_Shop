import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/app.css";

export const Checkout = () => {
  const [isValid, setValid] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const validate = () => {
    let errors = [];
    const inputs = document.querySelectorAll(".form-control");
    inputs.forEach((input) => {
      !input.value ? errors.push(input) : errors.length && errors.pop();
    });
    console.log(errors);
    setValid(!errors.length);
  };

  useEffect(() => {
    validate();
  });

  return (
    <Fragment>
      <div className="col-sm-6 offset-3 my-5">
        <h2>Checkout</h2>
        <br />
        <form>
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                property=""
                name="firstName"
                defaultValue={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
          </div>
          <br />
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Email address"
              property=""
              name="email"
              defaultValue={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <small id="emailHelp" className="form-text text-muted">
            Nous ne partagerons jamais votre e-mail avec quelqu'un d'autre.
            </small>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Address"
              property=""
              name="address"
              defaultValue={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <br />

          <Link
            to="/shipping"
            className={`${
              !isValid && "disabled"
            } white btn btn-light btn-lg btn-block bg-crimson checkout `}
          >
            Confirmer
          </Link>
        </form>
      </div>
    </Fragment>
  );
};
