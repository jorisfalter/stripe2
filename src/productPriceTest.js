


const Testfunction = ({product}) => {
    return {product}
}


const testvariable = async function () {
    const stripe = require('stripe')('sk_test_Qhlg8l7ENnP76PA46huUw6EP00gbE3htI0');

    const product = stripe.products.retrieve(
        'prod_LnkBjRm0picUEO'
    );
    console.log({product})
    return (product)
}
export default Testfunction