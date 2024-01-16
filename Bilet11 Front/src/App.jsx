import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayouts from "./assets/layouts/MainLayout/MainLayouts"
import Home from "./assets/pages/Home/Home"
import "./app.scss"
import AddPage from "./assets/pages/Add/AddPage"
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayouts />}>
          <Route index element={<Home />} />
          <Route path="/add" element={< AddPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>

    
    </>
  )
}

export default App
