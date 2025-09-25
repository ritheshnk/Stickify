import './App.css'
import './index.css'
import Main from './componets/main'
import { BrowserRouter} from 'react-router-dom';


function App() {
  return(
    <>

      <div className="text-white">
       <BrowserRouter>
        <Main />
       </BrowserRouter>
          
        
      </div>
    </>
  )
}

export default App
