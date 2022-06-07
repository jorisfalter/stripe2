import React from 'react'
import Stripe from 'stripe'

const Home = ({ productPriceData }) => {
    console.log({ productPriceData })

    return <div>display stripe data</div>
}

export async function getServerSideProps() {
    const stripe = new Stripe('sk_test_Qhlg8l7ENnP76PA46huUw6EP00gbE3htI0')

    const productPriceData = await stripe.prices.list({
        // expand:['data.product'],
    })
    console.log(JSON.stringify(productPriceData, null, 2))

    return {
        props: {productPriceData},
    }
}

export default Home