import { Routes, Route, BrowserRouter } from "react-router-dom"
import Header from "./components/Header/Header"
import Home from "./pages/Home/Home"
import SignIn from "./pages/SignIn/SignIn"
import User from "./pages/User/User"
import Footer from "./components/Footer/Footer"
import { Provider } from "react-redux"
import { store } from "./app/store"
import Layout from "./components/Layout/Layout"
import RequireAuth from "./components/RequireAuth/RequireAuth"

/*function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/user" element={<User />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
*/

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* public routes */}
            <Route index element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />
            {/* protected routes */}
            <Route element={<RequireAuth />}>
              <Route path="/user" element={<User />} />
            </Route>
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
