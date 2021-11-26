import * as React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import CustomCursor from "../Customcursor";
import Features from "../components/Features";
import About from "../components/About";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import "../styles/home.styles.scss";
import useLocoScroll from "../hooks/useLocomotiveScroll"
const pageStyles = {
   margin: "0px",
   padding: "0px 5vw",
   backGround: "#F5F0EC"
}

// markup
const IndexPage = () => {
  const [preloader, setPreloader] = React.useState(true);
  const [timer, setTimer]  = React.useState(3);
  
  useLocoScroll(!preloader);

  const id = React.useRef(null);
 

  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false)
  }

  React.useEffect(() => {
      id.current = window.setInterval(() => {
         setTimer(timer => timer -1)
      }, 2000)
  })

  React.useEffect(() => {
    if(timer === 0) {
      clear()
    }
  }, [timer])
  return (
  <>
  <CustomCursor />
    <main style={pageStyles}>
      <title>Home Page</title>

  {
    preloader ? (
       <div className="loader-wrapper preloader">
         <h1>welcome to black culture.{" "} </h1>
       </div>
       ) : (
      <div id="main-container" className="main-container" data-scroll-container >
      <Navbar />
      <Header />
      <Features />
      <About />
      <Gallery />
      <Footer />
      </div>
    )
  }
     
    </main>
  </> 
  )
}

export default IndexPage
