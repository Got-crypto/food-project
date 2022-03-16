import 'firebase/compat/auth'
import { useContext, useEffect, useState } from 'react'
import FirebaseContext from '../context/firebase'

export default function useAuthListener(){
    const {firebase} = useContext(FirebaseContext)
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')))

    useEffect(()=>{
        return firebase.auth().onAuthStateChanged((authUser)=>{
            if( authUser ){
                localStorage.setItem('authUser', JSON.stringify(authUser))
                setUser(authUser)
            }else{
                localStorage.removeItem('authUser')
                setUser(null)
            }
        }, [firebase])
    })
    return ({user})
}