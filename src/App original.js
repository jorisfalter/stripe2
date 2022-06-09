import React, { useState, useEffect } from "react";
import "./App.css";
import SomeComponent from './productPrice';
import AnotherComponent from './productPriceTest';
import Stripe from 'stripe';


const ProductDisplay = () => (
  <section>
    <div className="product">
      <img
        src="https://i.imgur.com/EHyR2nP.png"
        alt="The cover of Stubborn Attachments"
      />
      <div className="description">
      <h3>Stubborn Attachments</h3>
      <h5>$20.00</h5>
      </div>
    </div>
    <form action="/create-checkout-session" method="POST">
      <button type="submit">
        Checkout
      </button>
    </form>
    {/* <SomeComponent /> */}
    {/* <AnotherComponent /> */}
  </section>
);




const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

const Home = ({ productPriceData }) => {

  return <div>display stripe data: {productPriceData}</div>
}


export default function App() {
  const [message, setMessage] = useState("");

  async function getServerSideProps() {
    const stripe = new Stripe('sk_test_Qhlg8l7ENnP76PA46huUw6EP00gbE3htI0')
    console.log("ok")
    const productData = await stripe.products.retrieve(
        'prod_LnkBjRm0picUEO'
      );

    const productPriceData = await stripe.prices.list({
    //     // expand:['data.product'],
    //     limit: 3,
    })
    console.log(JSON.stringify(productPriceData, null, 2))
    console.log("ok2")


    return {
        props: {productPriceData},
    }
}


  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return message ? (
    <Message message={message} />
  ) : (
    <div>
    {/* <ProductDisplay /> */}
    <Home />
    </div>
  );
}