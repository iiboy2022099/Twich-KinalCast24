import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login as loginRequest} from '../../services'
import toast from "react-hot-toast";

export const useLogin = () => {
    const [isLoading, setItsLoading ] = useState(false)

    const navigate = useNavigate()

    const login = async (email, password) => {
        setItsLoading(true)

        const response = await loginRequest ({
            email,
            password
        })

        setItsLoading(false)

        if(response.error){
            return toast.error(response.e?.response?.data || 'Ocurrio un error al iniciar sesion, Intenta de nuevo')
        }

        const { userDetails } = response.data

        localStorage.setItem('user', JSON.stringify(userDetails))

        navigate('/')
    }
    return{
        login, 
        isLoading
    }

}