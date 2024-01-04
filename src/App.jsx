import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Service from './components/service';
import States from './components/States';

import './App.css';
import Calling from './components/Calling';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Layout from './components/Layout';


function App() {


  return (
    <>
 
  <Layout>
  <Hero />
  <Service/>
  <States/>
     <Calling/>
     <Contact/>
     </Layout>
     
    </>
  )
}

export default App
