import { useContext, useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import FirebaseContext from '../context/firebase'
import * as ROUTES from '../constants/routes'
import { shorts, slogans } from "../constants/slogans"
import UserContext from "../context/user"

export default function Signup(){

    const {firebase} = useContext(FirebaseContext)

    const [emailAddress, setEmailAddress] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [error, setError] = useState("")
    const [slogan, setSlogan] = useState(null)
    const [short, setShort] = useState(null)

    const history = useHistory()

    const isDisabled = emailAddress === '' || password === '' || lastName === '' || firstName === '' ? true : false

    const getRandomSlogan = ()=>{
        const slogan = Math.floor(Math.random() * 5 )
        return setSlogan(slogans[slogan])
    }

    const getRandomShort = ()=>{
        const short = Math.floor(Math.random() * 3 )
        return setShort(shorts[short])
    }
    
    const handleSignup = async ()=> {
        try {
            let newCustomer =  await firebase.auth().createUserWithEmailAndPassword( emailAddress, password )
            
            newCustomer.user.updateProfile({
                displayName: firstName + " " + lastName
            })

            await firebase
                    .firestore()
                    .collection('customers')
                    .add({
                        firstName: firstName,
                        lastName: lastName,
                        emailAddress: emailAddress,
                        profilePhoto: "",
                        admin: false,
                        address: "",
                        customerId: newCustomer.user.uid,
                        cart: []
                    })

            history.push(ROUTES.Dashboard)

        } catch (error) {
            setError(error.message)
            setPassword("")
            setEmailAddress("")
        }
    }


    useEffect(()=>{
        document.title = "Signup - The Pie"
        getRandomSlogan()
        getRandomShort()
    }, [])

    return (
        <div className="h-screen w-full flex items-center bg-center bg-login bg-cover bg-no-repeat justify-center">
            <div className="grid grid-cols-3">
                <div className="text-white flex flex-col justify-center items-center font-bold text-sm border h-auto col-span-3 lg:col-span-1 rounded w-96">
                    <div className="w-2/3 h-10 my-2 inline-flex justify-center items-center">
                        <img src="/images/pie.png" className="h-full" alt="pie logo" />
                        <p className="ml-1 font-header text-2xl capitalize">the pie - Login</p>
                    </div>
                    <p className="text-sm text-center w-5/6 font-bold text-red-500">
                        {error && error }
                    </p>
                    <input
                        className="border text-base bg-transparent rounded h-12 w-5/6 placeholder:text-slate-400 text-white p-1 my-3"
                        value={firstName}
                        onChange={({target})=>setFirstName(target.value)}
                        type="text"
                        placeholder="First name"
                    />
                    <input
                        className="border text-base bg-transparent rounded h-12 w-5/6 placeholder:text-slate-400 text-white p-1 my-3"
                        value={lastName}
                        onChange={({target})=>setLastName(target.value)}
                        type="text"
                        placeholder="Lastname"
                    />
                    <input
                        className="border text-base bg-transparent rounded h-12 w-5/6 placeholder:text-slate-400 text-white p-1 my-3"
                        value={emailAddress}
                        onChange={({target})=>setEmailAddress(target.value)}
                        type="text"
                        placeholder="Email Address"
                    />
                    <input
                        className="border text-base bg-transparent rounded h-12 w-5/6 placeholder:text-slate-400 text-white p-1 my-3"
                        value={password}
                        onChange={({target})=>setPassword(target.value)}
                        type="password"
                        placeholder="Password"
                    />
                    <button
                        className={`rounded text-base h-12 w-5/6 p-1 my-3 flex justify-center items-center ${isDisabled ? 'bg-btnsecondary text-slate-400' : 'bg-btnprimary text-white' }`}
                        onClick={handleSignup}
                        disabled={isDisabled}
                    >
                        Sign Up
                    </button>
                    <p className="text-base font-mono h-12 w-5/6 p-1 my-3 flex justify-center items-center text-white">
                        Have an account?
                        <Link
                            to={ROUTES.Login}
                            className="text-btnprimary ml-2 hover:underline"
                        >
                            Log in
                        </Link>
                    </p>
                    <p className="text-xs flex justify-center items-center font-mono h-6 w-5/6 mt-3 mb-1 text-white">
                        ©Copyright 2022
                    </p>
                </div>
                <div className="text-white font-bold hidden lg:block text-sm h-auto rounded col-span-2 w-96">
                    <p className="h-12 w-5/6 text-xl font-bold my-3 mx-auto border-b-2 border-btnprimary flex justify-center items-center font-header">
                        { short && short }
                    </p>
                    <p className="mt-24 w-5/6 h-auto mx-auto text-center font-header text-3xl">
                        {slogan && slogan }
                    </p>
                    <div className="pt-5 h-auto flex flex-col justify-start">
                        <button className="h-12  my-2 w-full flex justify-center items-center">
                            <div className="h-full text-black bg-white px-2 py-2 w-2/3 flex items-center justify-between">
                                <p>Sign in with Google</p>
                                <img
                                    className="h-full"
                                    src="/images/google.png"
                                    alt="Google"
                                />
                            </div>
                        </button>
                        <button className="h-12 w-full my-2 flex justify-center items-center">
                            <div className="h-full text-white bg-facebook px-2 py-2 w-2/3 flex items-center justify-between">
                                <p>Sign in with Facebook</p>
                                <div className="h-full bg-white rounded">
                                    <img
                                        className="h-full"
                                        src="/images/facebook.png"
                                        alt="Google"
                                    />
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}