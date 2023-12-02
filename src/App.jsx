import Header from "./components/Header.jsx"
import Genres from "./components/Genres.jsx"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {

  return (
    <>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route index element={<Genres/>}/>
          <Route path="/genres" element={<Genres/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
