import { useState, useEffect} from 'react';
import { useAppSelector } from './reduxHooks';
import { IUser } from '../typings/interfaces/IUser';

const useLoggedUser = () =>{
    const selector = useAppSelector((appState) => appState.auth);
    const [loggedUser, setLoggedUser] = useState<IUser>();

    useEffect(()=>{
        setLoggedUser(selector.authResponse);
    },[selector])

    return loggedUser;
}

export default useLoggedUser;
//export {};