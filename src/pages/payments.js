import { loadStripe } from "@stripe/stripe-js"
import { useEffect } from "react"
import { Elements } from "@stripe/react-stripe-js"
import CheckoutForm from "../hook/use-stripe"

const stripePromise = loadStripe('pk_test_51KfhwLAwisBtMrqQx36Sh7Wki8hJB1ZMLTEDjULoG9pUWGnnMChnCC30vzN6d3QtwrVJrNLg5fe3HJCM6OgZFs3h00mt7h6Tvh')

export default function Payments(){

    console.log('process.env.REACT_NATIVE_STRIPE_PUBLISHABLE_KEY', process.env.REACT_NATIVE_STRIPE_PUBLISHABLE_KEY)
    useEffect(()=>{
        document.title = 'Payments - The Pie'
    }, [])
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    )
}