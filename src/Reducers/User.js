const initialState = null;
const array=[]
const User=(state=initialState,action)=>{
    switch(action.type){
        case 'SET_USER':
            return state=action.playload;
        case 'ADD_USER':
            return state=array.push(action.playload);    
        default:
            return state;
    }
}
export default User