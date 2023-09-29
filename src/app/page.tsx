import Navbar from "./components/navbar"
import NavbarTwo from "./components/navbarTwo"
import Leadcity from "./components/leadcity"
import YoutubeVideo from "./components/youtubeVideo"
import Info from "./components/info"
import About from "./components/about"
import Footer from "./components/footer"


export default function Home() {
  return (
    <main className="font-sans">
      <Navbar/>
      <NavbarTwo />
      <Leadcity />
      <YoutubeVideo />
      <Info />
      <About />
      <Footer />
    </main>
  )
}