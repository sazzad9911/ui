export const setUser=(user) => {
    return{
        type: 'SET_USER',
        playload:user
    }
}
export const addUser=(user) => {
    return{
        type: 'ADD_USER',
        playload:user
    }
}
export const loader=(state,text) => {
    return {
        type: 'LOADER',
        playload:{state:state,text:text}
    }
}