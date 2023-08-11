import { Routes, Route, BrowserRouter } from "react-router-dom"
import Header from "./components/Header/Header"
import Home from "./pages/Home/Home"
import SignIn from "./pages/SignIn/SignIn"
import User from "./pages/User/User"
import Footer from "./components/Footer/Footer"
import Layout from "./components/Layout/Layout"
import RequireAuth from "./components/RequireAuth/RequireAuth"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public routes */}
          <Route index element={<Home />} />
          <Route path="/login" element={<SignIn />} />
          {/* protected routes */}
          <Route element={<RequireAuth />}>
            <Route path="/profile" element={<User />} />
          </Route>
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
