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
export const alert=(state,head,text) => {
    return {
        type: 'ALERT',
        playload:{state:state,text:text,head:head}
    }
}
export const setTheme=(state) => {
    return {
        type: 'THEME',
        playload:state
    }
}