import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { IUserContext, UserContext } from '../contexts/signUpInContext'
import NavbarSection from '../section/NavbarSection'

const SignUpInView: React.FC = () => {
    const {handleRegister, createUser, setCreateUser, handleLogin, user, setUser, error, setError, handleLogout} = React.useContext(UserContext) as IUserContext
    const navigate = useNavigate()

    const handleSignIn = (e: React.FormEvent) => {
      e.preventDefault()


      const regEX = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

      if(!user.email.match(regEX) || user.password.length <= 2) {
        setError(true)
      } else {
        handleLogin(e)
        navigate('/manage')
        setError(false)
      }
    }


  return (
    <>
      <NavbarSection />
      <div className='login-base container mt-5'>
        <div className='login-body'>
          <h4>FOR MANAGING PRODUCTS</h4>
          <div className='login'>
            <form onSubmit={handleSignIn} className='mt-3'>
              {error && user.email.length <= 2 ?<label>An valid e-mail is required</label>:""}
              <input value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} type="email" className='form-control mb-3' placeholder='Ange E-mail' />
              {error && user.password.length <= 2 ?<label>Password is required</label>:""}
              <input value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} type="password" className='form-control mb-3' placeholder='Ange Lösenord' />
              <button type='submit' className='btn-red'>LOGIN</button>
            </form>
          </div>
          <div className='register-button'>
            <NavLink to={'/register'}>
              <button className='btn-white mt-5'>Need account? Click here</button>
            </NavLink>
          </div>
          <div className='logout-button mt-5'>
            <button className='btn-black' onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUpInView