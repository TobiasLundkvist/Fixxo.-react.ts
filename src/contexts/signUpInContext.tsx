import React, {useState, useContext, createContext} from 'react'
import { ICreateUser, IUser } from '../models/UsersModel'
import { registerUserProvider } from '../models/UserProviderModel'

export interface IUserContext {
    handleRegister: (e: React.FormEvent) => void
    handleLogin: (e: React.FormEvent) => void
    handleLogout: (e: React.FormEvent) => void
    createUser: ICreateUser
    setCreateUser: React.Dispatch<React.SetStateAction<ICreateUser>>
    user: IUser
    setUser: React.Dispatch<React.SetStateAction<IUser>>
    error: any
    setError: any
}

export const UserContext = createContext<IUserContext | null>(null)
export const useUserContext = () => { return useContext(UserContext) }

const RegisterProvider = ({children}: registerUserProvider) => {
    const baseUrl = 'http://localhost:5000/api/authentication'
    const user_default: IUser = { email:'', password:'' }
    const createUser_default: ICreateUser = { firstName: '', lastName:'', email:'', password:''}

    const [user, setUser] = useState<IUser>(user_default)
    const [createUser, setCreateUser] = useState<ICreateUser>(createUser_default)
    const [error, setError] = useState(false)


    const handleRegister = async (e: React.FormEvent) =>{
        e.preventDefault()

        const user = {
            firstName: createUser.firstName,
            lastName: createUser.lastName,
            email: createUser.email,
            password: createUser.password
        }

        const result = await fetch(`${baseUrl}/register`, {
            method: 'post',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        
        const data = await result.json()
        setCreateUser(createUser_default)

    }


    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()

        const account = {
            email: user.email,
            password: user.password
        }

        const result = await fetch(`${baseUrl}/login`, {
            method: 'post',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(account)
        })

        const data = await result.json()
        setUser(user_default)
        localStorage.setItem('accessToken', data.accessToken)

    }

    const handleLogout = () => {
        localStorage.clear()
    }




    return(
        <UserContext.Provider value={{handleRegister, handleLogin, handleLogout, createUser, setCreateUser, user, setUser, error, setError}}>
            {children}
        </UserContext.Provider>
    )
}

export default RegisterProvider