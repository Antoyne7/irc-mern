import axios from 'axios';
import { useEffect, useState } from 'react';
import authHeader from './auth-header';
import param from './param';

function useUser() {
    const [userState, setUserState] = useState({
        user: null,
        isError: false,
        isLoading: true,
    })

    useEffect(() => {
        async function fetchData() {
            const { data, status } = await axios.get(
                param.auth.checkToken,
                { headers: authHeader() },
            )
            setUserState(() => {
                return {
                    user: data,
                    error: status > 299,
                    loading: false
                }
            })
        }
        fetchData()
    }, [])


    return userState;
}

export default useUser;
