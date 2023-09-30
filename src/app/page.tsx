import Navbar from "./components/navbar"
import NavbarTwo from "./components/navbarTwo"
import Leadcity from "./components/leadcity"
import ImagesSection from "./components/imageSection"
import Info from "./components/info"
import About from "./components/about"
import Footer from "./components/footer"


export default function Home() {
  return (
    <main className="font-sans">
      <Navbar/>
      <NavbarTwo />
      <Leadcity />
      <ImagesSection />
      <Info />
      <About />
      <Footer />
    </main>
  )
}