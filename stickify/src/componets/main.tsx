
import Header from './Header'
import Footer from './Footer'
import Intro from './Intro'
import ProductList from './ProductLists'
import { BrowserRouter} from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import About from "./About";
import Animation from './Animation';

function Main() {
  return(
    <>

      <div className="text-white flex flex-col min-h-screen">
        
             <Header />
             
                <main className='flex-grow'>
                    <Intro title="Stickify!" />

             <Routes>
                <Route 
                    path="/" 
                    element = {<><Animation /></>} />
                
                <Route 
                    path="/about" 
                    element = {<><About /></>} />

                <Route 
                    path="/product" 
                    element = {<><ProductList /></>} />
             </Routes>

                </main>
             
             <Footer />
        
       
        
      </div>
    </>
  )
}

export default Main
