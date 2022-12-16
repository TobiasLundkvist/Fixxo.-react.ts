import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IUserContext, UserContext } from '../contexts/signUpInContext'

const RegisterView: React.FC = () => {
    const { handleRegister, createUser, setCreateUser, error, setError  } = React.useContext(UserContext) as IUserContext
    const navigate = useNavigate()

    const handleSignUP = (e: React.FormEvent) => {
        e.preventDefault()
  
        const regEX_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  
        if( createUser.firstName.length <=2  || createUser.lastName.length <=2  || !createUser.email.match(regEX_email) || createUser.password.length <= 2) {
          setError(true)
        } else {
          handleRegister(e)
          setError(false)
          navigate('/signupin')
        }
      }

    return (
    <div className='login-base container mt-5'>
        <div className='login-body'>
            <div className='login'>
                <form onSubmit={handleSignUP}>
                    {error && createUser.firstName.length <= 2 ?<label>First name is required</label>:""}  
                    <input value={createUser.firstName} onChange={(e) => setCreateUser({...createUser, firstName: e.target.value})} type="text" className='form-control mb-3' placeholder='Ange Förnamn'/>
                    {error && createUser.lastName.length <= 2 ?<label>Last name is required</label>:""}
                    <input value={createUser.lastName} onChange={(e) => setCreateUser({...createUser, lastName: e.target.value})} type="text" className='form-control mb-3' placeholder='Ange Efternamn' />
                    {error && createUser.email.length <= 2 ?<label>An valid e-mail is required</label>:""}
                    <input value={createUser.email} onChange={(e) => setCreateUser({...createUser, email: e.target.value})} type="email" className='form-control mb-3' placeholder='Ange E-mail' />
                    {error && createUser.password.length <= 2 ?<label>Password is required</label>:""}
                    <input value={createUser.password} onChange={(e) => setCreateUser({...createUser, password: e.target.value})} type="password" className='form-control mb-3' placeholder='Ange Lösenord' />
                    <button type='submit' className='btn-red'>REGISTERA</button>
                </form>
            </div>
        </div>
    </div>
    )
}

export default RegisterView