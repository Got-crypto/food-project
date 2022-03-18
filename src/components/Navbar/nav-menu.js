import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import ProfileSettings from "./profile-settings";
import UserContext from '../../context/user'
import { getUserDetailsByUserId } from "../../services/firebase";

export default function NavMenu( {switchToShoppingCart, openShoppingCart, setSidebarOpen, searchedItems, setSearchedItems, cartCount} ){
    const [profileSettingsOpen, setProfileSettingsOpen] = useState(false)
    const {user} = useContext(UserContext)
    const [isAdmin, setIsAdmin] = useState(null)

    const handleToggleProfileSettings = ()=>{
        setProfileSettingsOpen(!profileSettingsOpen)
    }


    useEffect(()=> {
        
        if( user ) {
            const handleAdminSide = async ()=> {
                const response = await getUserDetailsByUserId(user.uid)
                setIsAdmin(response[0].admin)
            }
            handleAdminSide()
        }

    }, [user])

    return (
        <div className="h-full flex justify-center items-center">
            <div className="h-full hidden lg:inline-flex items-center justify-center  w-auto">
                <input
                    className="h-2/3 w-80 bg-white outline-none placeholder:font-sans rounded-l-md px-2 font-bold text-sm"
                    value={searchedItems}
                    onChange={({target})=>setSearchedItems(target.value)}
                    placeholder="Search for your dishes here ..."
                />
                <button
                    className="h-2/3 bg-white outline-none w-14 mr-4 rounded-r-md flex items-center justify-center"
                >
                    <svg 
                        className="w-6 h-6 text-btnprimary" 
                        fill="currentColor" 
                        viewBox="0 0 20 20" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path 
                            fillRule="evenodd" 
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" 
                            clipRule="evenodd" 
                        />
                    </svg>
                </button>  

            </div>
            {
                 user ? (
                     <div className="h-full inline-flex justify-center items-center">
                        <button 
                            className="relative hidden md:block text-btnprimary"
                            onClick={()=> openShoppingCart()}
                        >
                            {
                                cartCount > 0 && (
                                    <span className="absolute flex h-4 w-4 justify-center -right-2 -top-2 p-3 items-center rounded-full bg-red-500 text-white">
                                        {cartCount}                   
                                    </span>
                                )
                            }
                            <svg 
                                className="w-10 h-10" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24" 
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
                                />
                            </svg>
                        </button>
                            { 
                                isAdmin !== null ? (
                                    isAdmin ? (
                                        <p className="h-full text-xs pl-10 w-40 text-white justify-center flex items-center">
                                            Hello, {user.displayName}! Let's get to work comrade!
                                        </p>
                                        ) : (
                                            <p className="h-full text-xs pl-10 w-40 text-white justify-center flex items-center">
                                                Hello, {user.displayName}! What are you ordering today?
                                            </p>
                                        )
                                ) : (
                                    <p className="h-full text-xs pl-10 w-40 text-white justify-center flex items-center">
                                        Content Loading ...
                                    </p>
                                )
                            }
                            <div className="relative">
                                <div
                                    className="justify-center items-center inline-flex"
                                    onClick={handleToggleProfileSettings}
                                >

                                    {
                                        !user.providerData[0].photoURL ? (
                                            <div
                                                className="text-black h-full ml-2"
                                            >
                                                <p className="h-full justify-center items-center">
                                                    <svg 
                                                        className="w-10 h-10 text-btnprimary" 
                                                        fill="none" 
                                                        stroke="currentColor" 
                                                        viewBox="0 0 24 24" 
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path 
                                                            strokeLinecap="round" 
                                                            strokeLinejoin="round" 
                                                            strokeWidth={2} 
                                                            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                                                        />
                                                    </svg>
                                                </p>
                                            </div>
                                        ) : (
                                            <img
                                                className="ml-3 h-10 w-10 rounded-full"
                                                alt={`${user.displayName} profile`}
                                                title={`${user.displayName}`}
                                                src={user.providerData[0].photoURL}
                                            />
                                        )
                                    }
                                    {
                                        profileSettingsOpen ? (
                                            <svg className="w-6 text-btnprimary h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                        ) : (
                                            <svg 
                                                className="w-6 h-6 text-btnprimary" 
                                                fill="currentColor" 
                                                viewBox="0 0 20 20" 
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path 
                                                    fillRule="evenodd" 
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
                                                    clipRule="evenodd" 
                                                />
                                            </svg>
                                        )
                                    }
                                </div>
                                <ProfileSettings profileSettingsOpen={profileSettingsOpen} setProfileSettingsOpen={setProfileSettingsOpen} />
                            </div>
                        
                     </div>
                 ) : (
                     <div className="h-full justify-center items-center inline-flex">
                         <p className="text-xs w-24 flex items-center text-white justify-center text-left">
                             Welcome, please login to get our services
                         </p>
                        <Link
                            to={ROUTES.Login}
                            className="h-2/3 bg-btnprimary rounded px-6 flex justify-center items-center text-sm font-bold text-white"
                        >
                            Log In
                        </Link>
                     </div>
                 )
            }
        </div>
    )
}