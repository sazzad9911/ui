const initialState={
    loader:{
        text:'Loading...',
        state:false
    },
    alert:false
}

const PageSettings=(state=initialState, action)=> {
    switch(action.type){
        case 'LOADER':
            return state={loader: action.playload, alert: state.alert};
        default:
            return state;
    }
}
export default PageSettings