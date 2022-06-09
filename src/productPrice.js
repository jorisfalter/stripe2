import React from 'react'
import Stripe from 'stripe'

const Home = ({ productPriceData }) => {

    return <div>display stripe data: {productPriceData}</div>
}

export async function getServerSideProps() {
    const stripe = new Stripe('sk_test_Qhlg8l7ENnP76PA46huUw6EP00gbE3htI0')
    // console.log("ok")
    const productPriceData = await stripe.products.retrieve(
        'prod_LnkBjRm0picUEO'
      );

    // const productPriceData = await stripe.prices.list({
    //     // expand:['data.product'],
    //     limit: 3,
    // })
    // console.log(JSON.stringify(productPriceData, null, 2))

    return {
        props: {productPriceData},
    }
}

export default Home