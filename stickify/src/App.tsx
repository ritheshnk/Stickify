import './App.css'
import './index.css'
import Header from './componets/Header'
import Footer from './componets/Footer'
import Intro from './componets/Intro'


function App() {
  return(
    <>
      <div className="text-white">
        <Header />
        <Intro />
        <Footer />
      </div>
    </>
  )
}

export default App
