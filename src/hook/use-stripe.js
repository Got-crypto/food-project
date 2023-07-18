import {loadStripe} from '@stripe/stripe-js'
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js'

export default function CheckoutForm(){
    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (e)=> {
        e.preventDefault()
        if ( elements === null ) return

        await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        })

    }

    return(
        <form onSubmit={handleSubmit} className=''>
            <CardElement />
            <button
                type='submit'
                disabled={!stripe || !elements}
                className=""
            >
                Pay
            </button>
        </form>
    )
}