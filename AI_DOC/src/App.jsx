import './components/App.css'
import './components/Navbar'
import Navbar from './components/Navbar'
import Layout from './components/Layout'
import Contact from './components/Contacts'
import TransparentContainer from './components/TransparentContain'

function App() {

  return (
    <div
    style={{
      backgroundImage: `url(public/herbal2.jpg)`,
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      height: '100vh', 
      width: '100%', 
      zIndex: -1
    }}>
    <div >
    <Navbar />
    <TransparentContainer />
 </div>
 <div> 
  <Layout />
 </div>
 <div>
  <Contact />
 </div>
    </div>
  )
}

export default App
