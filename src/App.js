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
      <Suspense fallback={
          <div className='h-screen w-full flex bg-slate-300 flex-col justify-center items-center'>
              <img
                src='https://acegif.com/wp-content/gifs/pizza-64.gif'
                className='h-96'
                alt='pizza loading gif'
              />
              <p className='font-header font-bold mt-2'>Loading</p>
          </div>
      }>
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