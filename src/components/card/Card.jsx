import React from "react";
import Modal from "../Modal/Modal";

function Card({ item }) {
  const { img, price, title, ref } = item;
  return (
    <div className="col-sm-4 mb-5">
      <div className="card">
        <img
          width="170"
          height="170"
          className="mx-auto"
          src={img}
          alt="burger"
        />
        <div className="card-body">
          <div className="row">
            <div className="col-sm-6">
              <h4>{title}</h4>
            </div>
            <div className="col-sm-6 text-center">
              <p >{price}€</p>
              <button
                className="btn btn-sm btn-danger btn-red "
                data-bs-toggle="modal"
                data-bs-target={`#${ref}`}
              >
                Acheter
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal item={item} />
    </div>
  );
}

export default Card;
