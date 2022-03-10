import User from './Reducers/User'
import PageSettings from './Reducers/PageSettings'
import {combineReducers} from 'redux'
import {createStore} from 'redux'

const allReducers = combineReducers({
    User: User,
    PageSettings: PageSettings
})

const store = createStore(allReducers)
export default store