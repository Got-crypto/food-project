import { useEffect } from "react"

export default function Payments(){
    useEffect(()=>{
        document.title = 'Payments - The Pie'
    }, [])
    return (
        <p>I am Payments</p>
    )
}