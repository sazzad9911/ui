const initialState={
    loader:{
        text:'Loading...',
        state:false
    },
    alert:{
        state:true,
        head:'No Head',
        text:'Loading...',
    }
}

const PageSettings=(state=initialState, action)=> {
    switch(action.type){
        case 'LOADER':
            return state={loader: action.playload, alert: state.alert};
        case 'ALERT':
            return state={alert: action.playload, loader: state.loader};    
        default:
            return state;
    }
}
export default PageSettings