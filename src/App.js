import { lazy, Suspense } from 'react'
import { BrowserRouter as Switch, Route } from 'react-router-dom'
import * as ROUTES from './constants/routes'
import UserContext from './context/user'
import useAuthListener from './hook/use-auth-listener'

const Login = lazy( () => import('./pages/login') )
const Signup = lazy( () => import('./pages/signup') )
const Dashboard = lazy( () => import('./pages/dashboard') )
const Payments = lazy(()=> import('./pages/payments'))
const ProfileEdit = lazy(()=> import('./pages/profile-edit'))

export default function App(){
  const {user} = useAuthListener()
  return (
    <UserContext.Provider value={{user}}>
      <Suspense fallback={<p>Loading ...</p>}>
        <Switch>
            <Route component={Login} path={ROUTES.Login}/>
            <Route component={Signup} path={ROUTES.Signup}/>
            <Route component={Dashboard} path={ROUTES.Dashboard} exact/>
            <Route component={Payments} path={'/payments'} />
            <Route component={ProfileEdit} path={'/profile'} />
        </Switch>
      </Suspense>
    </UserContext.Provider>
  )
}