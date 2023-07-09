import { Outlet } from "react-router-dom"
import Footer from "../components/Shared/Footer/Footer"
import Header from "../components/Shared/Header/Header"
import Container from "../components/Shared/Layout/Container"

const Main = () => {
  return (
    <div>
      <Header />
      <div className="mt-28">
        <Container>
          <Outlet />
        </Container>
      </div>
      <Footer />
    </div>
  )
}

export default Main
