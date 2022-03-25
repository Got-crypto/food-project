import { motion } from "framer-motion";
import { useContext } from "react";
import { Link } from "react-router-dom";
import FirebaseContext from "../../context/firebase";

export default function ProfileSettings({profileSettingsOpen, setProfileSettingsOpen}){
    const {firebase} = useContext(FirebaseContext)
    return (
        <motion.ul 
            className={`divide-y divide-white w-36 shadow-md text-black shadow-black bg-btnsecondary z-30 right-2 absolute rounded h-auto p-2`}
            initial={{
                y: -200
            }}
            animate={{
                y: profileSettingsOpen ? 0 : -200
            }}
        >
            <li>
                <Link
                    to={'/profile'}
                    className="text-sm font-bold py-2 flex justify-between items-center px-4"
                >
                    <p>profile</p>
                    <p>
                        <svg 
                            className="w-6 h-6" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" 
                            />
                        </svg>
                    </p>
                </Link>
            </li>
            <li>
                <button
                    className="py-2 px-4 w-full text-sm font-bold flex justify-between items-center"
                >
                    <p>
                        favorites
                    </p>
                    <p>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    </p>
                </button>
            </li>
            <li>
                <button
                    onClick={ async ()=>{
                        await firebase.auth().signOut()
                    }}
                    className="py-2 w-full flex justify-between items-center px-4 text-sm font-bold"
                >
                    <p>
                        Sign out
                    </p>
                    <p>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                    </p>
                </button>
            </li>
        </motion.ul>
    )
}