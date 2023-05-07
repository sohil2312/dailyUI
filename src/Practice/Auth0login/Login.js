import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

const Login = () => {
    const {loginWithRedirect,isAuthenticated}=useAuth0();
  return (
    !isAuthenticated && (
        <button className='btn btn-primary' onClick={()=>loginWithRedirect()}>
            Login {isAuthenticated}
        </button>
    
  )
  )
}

export default Login