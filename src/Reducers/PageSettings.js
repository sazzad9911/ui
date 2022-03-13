const initialState={
    loader:{
        text:'Loading...',
        state:false
    },
    alert:{
        state:false,
        head:'No Head',
        text:'Loading...',
    },
    isDark:true,
}

const PageSettings=(state=initialState, action)=> {
    switch(action.type){
        case 'LOADER':
            return state={loader: action.playload, alert: state.alert,isDark:state.isDark};
        case 'ALERT':
            return state={alert: action.playload, loader: state.loader,isDark:state.isDark};  
        case 'THEME':
            return state={alert: state.alert, loader: state.loader,isDark:action.playload}     
        default:
            return state;
    }
}
export default PageSettings