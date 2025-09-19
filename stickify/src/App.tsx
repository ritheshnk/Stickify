import './App.css'
import './index.css'
import Header from './componets/Header'
import Footer from './componets/Footer'
import Intro from './componets/Intro'
import ProductList from './componets/ProductLists'


function App() {
  return(
    <>
      <div className="text-white">
        <Header />
        <Intro title="Stickify!"/>
        <ProductList />
        <Footer />
      </div>
    </>
  )
}

export default App
