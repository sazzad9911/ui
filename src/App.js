import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Screens/Home'
import Career from './Screens/Career'
import About from './Screens/About'
import Members from './Screens/Members'
import Services from './Screens/Services'
import Loader from './Contents/Loader'

function App() {
  
  return (
    <div>
      <Routes>
        <Route path='/Career' element={<Career/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Members' element={<Members/>} />
        <Route path='/Services' element={<Services/>} />

        {
          //for using single link add link here
        }
        <Route path='/' element={<Home />} />
      </Routes>
      {
        //authentication page will situate here
      }
      <SingleLinkRoute/>
      <Loader/>
    </div>
  );
}

export default App;
//array path should contain a json array object which 
//include 'name' of the path and 'element' which is a JSX element.
const SingleLinkRoute = ({arrayPath}) => {
  if(arrayPath && arrayPath.length >0){
    arrayPath.forEach(path => {
      let join = '/links/' + path.name
      return (
        <Route name={join} element={path.element} />
      )
    })
  }else{
    return <div></div>
  }

}
