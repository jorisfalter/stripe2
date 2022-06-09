import React, { useState, useEffect } from "react";
import "./App.css";




function App() {
  
  const PPData = ({product}) => { return <div> {product}</div>}

  async function retrieveData(){

    const stripe = require('stripe')('sk_test_Qhlg8l7ENnP76PA46huUw6EP00gbE3htI0');

    const product = await stripe.products.retrieve(
      'prod_LnkBjRm0picUEO'
    );
    console.log(product)

    return product
  }

  return (
    <div>
    <PPData />
    hello world 
    </div>
  );
}

export default App;
