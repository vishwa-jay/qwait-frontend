// import { useState, useEffect} from 'react';
// import { useSelector} from 'react-redux';
// import { AppState } from '../store/reducers/rootReducer';
// import { IUser } from '../typings/interfaces/IUser';

// const useLoggedUser = () =>{
//     const selector = useSelector((appState: AppState) => appState.user);
//     const [loggedUser, setLoggedUser] = useState<IUser>();

//     useEffect(()=>{
//         setLoggedUser(selector.response?.data);
//     },[selector])

//     return loggedUser;
// }

// export default useLoggedUser;
export {};