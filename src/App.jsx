import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./Components/Login"
import Signup from "./Components/Signup"
import Protected from "./Components/Protected"
import Dash from "./Components/Dash/Dash"
import { UserProvider } from "./Components/Dash/UserContext"
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<Protected />}>
            <Route path="/dashboard/*" element={
              <UserProvider>
                <Dash />
              </UserProvider>
            } />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
