export const getTokenFromLocalStorage = (token: string) => {

  try {
    const serializedState = window.localStorage.getItem(token);
    if (serializedState === null) {
      return undefined;
    }
    return serializedState;
  } catch (err) {
    return undefined;
  }
};

export const setTokenToLocalStorage = (token:string, state: string) => {

  try {
    const serializedState = state;
    window.localStorage.setItem(token, serializedState);
  } catch (err) {

  }
};

export const removeToken = (token: string) =>{
  localStorage.removeItem(token);
}
