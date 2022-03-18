import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import FirebaseContext from '../context/firebase'
import * as ROUTES from '../constants/routes'
import { slogans, shorts } from "../constants/slogans"
import { useHistory } from "react-router-dom"

export default function Login(){

    const {firebase} = useContext(FirebaseContext)
    const history = useHistory()

    const [emailAddress, setEmailAddress] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [slogan, setSlogan] = useState(null)
    const [short, setShort] = useState(null)

    const isDisabled = emailAddress === '' || password === '' ? true : false

    const getRandomSlogan = ()=>{
        const slogan = Math.floor(Math.random() * 5 )
        return setSlogan(slogans[slogan])
    }

    const getRandomShort = ()=>{
        const short = Math.floor(Math.random() * 3 )
        return setShort(shorts[short])
    }
    
    const handleLogin = async ()=> {
        try{
            await firebase.auth().signInWithEmailAndPassword(emailAddress, password)
            history.push(ROUTES.Dashboard)
        }catch(error){
            switch (error.message) {
                case "Firebase: There is no user record corresponding to this identifier. The user may have been deleted. (auth/user-not-found).":
                    setError("User not found! Check if you entered your password and email address correctly")
                    break;
                case "Firebase: A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred. (auth/network-request-failed).":
                    setError("Network error! check if you have a stable internet connection")
                    break
                case "Firebase: The email address is badly formatted. (auth/invalid-email).":
                    setError("The email address is badly formatted")
                    break
                case "Firebase: The password is invalid or the user does not have a password. (auth/wrong-password).":
                    setError("Email and Password do not match any records.")
                    break
                default:
                    setError(error.message)
                    break;
            }
            setPassword("")
        }
    }


    useEffect(()=>{
        document.title = "Login - The Pie"
        getRandomSlogan()
        getRandomShort()
    }, [])

    return (
        <div className="h-screen w-full flex items-center bg-center bg-login bg-cover bg-no-repeat justify-center">
            <div className="grid grid-cols-3">
                <div 
                    className="text-white shadow-md flex flex-col justify-center items-center font-bold text-sm border h-auto col-span-3 lg:col-span-1 rounded w-96"
                    onKeyDown={event => {
                        if( event.key === 'Enter' && !isDisabled ){
                            return handleLogin()
                        }
                    }}
                >
                    <div className="w-2/3 h-10 my-2 inline-flex justify-center items-center">
                        <img src="/images/pie.png" className="h-full" alt="pie logo" />
                        <p className="ml-1 font-header text-2xl capitalize">the pie - Login</p>
                    </div>
                    <p className="text-sm text-center w-5/6 font-bold text-red-500">
                        {error && error }
                    </p>
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
                        onClick={handleLogin}
                        disabled={isDisabled}
                    >
                        Log In
                    </button>
                    <p className="text-base font-mono h-12 w-5/6 p-1 my-3 flex justify-center items-center text-white">
                        Don't have an account?
                        <Link
                            to={ROUTES.Signup}
                            className="text-btnprimary ml-2 hover:underline"
                        >
                            Sign up
                        </Link>
                    </p>
                    <p className="text-xs flex justify-center items-center font-mono h-6 w-5/6 mt-3 mb-1 text-white">
                        ©Copyright 2022
                    </p>
                </div>
                <div className="text-white hidden lg:block font-bold text-sm h-auto rounded col-span-2 w-96">
                    <p className="h-12 w-5/6 my-3 mx-auto flex justify-center items-center text-xl border-b-2 border-btnprimary font-header">
                        { short && short }
                    </p>
                    <p className="mt-24 w-5/6 h-auto mx-auto font-header text-center text-3xl">
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