import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>
          <main>
              {children}
          </main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout