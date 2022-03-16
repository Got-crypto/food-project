import { useContext, useEffect, useState } from "react"
import UserContext from "../context/user"
import { getUserDetailsByUserId } from "../services/firebase"

export default function useCustomerDetails(){
    const {  user: {uid: userId = ''} } = useContext(UserContext)

    const [customer, setCustomer] = useState(null)

    useEffect(()=>{
        const getUserDetails = async ()=> {
            const response = await getUserDetailsByUserId( userId )

            setCustomer(response)
        }
        if( userId ){
            getUserDetails()
        }
    }, [ userId ])

    return (customer)
}