import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteBurger } from "../../redux/burgerSlice";
import "./Cart.css";

const Row = ({ item }) => {
  const dispatch = useDispatch();
  const { ref, price, qty, img, id } = item;
  const [quantity, setQuantity] = useState(qty);
  const total = price * quantity;
  return (
    <tr>
      <td>
        <img width="70" height="70" src={img} alt={"item.name"} />
      </td>
      <td>{ref}</td>
      <td>€{price}</td>
      <td>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              if (quantity > 1) {
                setQuantity(quantity - 1);
              }
            }}
          >
            -
          </button>
          <span className="btn btn-light">{quantity}</span>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              setQuantity(quantity + 1);
            }}
          >
            +
          </button>
        </div>
      </td>
      <td>{total} €</td>
      <td>
        <button
          type="button"
          className="btn btn-danger remove"
          onClick={() => {
            dispatch(deleteBurger({ id }));
          }}
        >
          X
        </button>
      </td>
    </tr>
  );
};

const Table = (props) => {
  const burgers = useSelector((state) => state.burgerReducer.burgers);
  console.log({
    burgers,
  });
  return (
    <table>
      <tr>
        <th width="200">Titre</th>
        <th width="80">Reférence</th>
        <th width="150">Prix</th>
        <th width="150">Quantité</th>
        <th width="200">Totale</th>
      </tr>
      {burgers.map((burger, index) => {
        return <Row item={burger} key={index} />;
      })}
    </table>
  );
};

export const CartPage = () => {
  const burgers = useSelector((state) => state.burgerReducer.burgers);
  const [subTotal, setSubTotal] = useState(0.0);
  const [total, setTotal] = useState(0.0);
  const shipping = 10.0;

  useEffect(() => {
    let totals = burgers?.map((item) => {
      return item?.qty * item?.price;
    });
    setSubTotal(totals.reduce((item1, item2) => item1 + item2, 0));
    setTotal(subTotal + shipping);
    console.log(`Subtotal:  €${subTotal} `);
    console.log(`You have ${burgers.length} in your cart`);
  }, [burgers, subTotal, total]);

  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-sm cart">
            <Table />
          </div>

          <div className="col-sm-3 order-summary">
            <ul className="list-group">
              <li className="list-group-item">Récapitulatif de la commande</li>

              <li className="list-group-item">
                <ul className="list-group d-flex">
                  <li className="text-left">
                    {" "}
                    <strong>Sous Total</strong>
                  </li>
                  <li className="text-right">€{subTotal.toFixed(2)}</li>
                </ul>
                <ul className="list-group d-flex">
                  <li className="text-left">
                    {" "}
                    <strong>Livraison</strong>
                  </li>
                  <li className="text-right">{shipping}</li>
                </ul>
              </li>

              <li className="list-group-item ">
                <ul className="list-group d-flex">
                  <li className="text-left">
                    <strong>Totale</strong>
                  </li>
                  <li className="text-right">
                    €{subTotal == 0.0 ? "0.00" : total.toFixed(2)}
                  </li>
                </ul>
              </li>
            </ul>
            <Link
              to="/checkout"
              className={`white btn btn-light btn-lg btn-block checkout  bg-crimson`}
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
