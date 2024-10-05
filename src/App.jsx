import { Routes, Route } from "react-router-dom"
import { Header } from './components/HeaderComponent'
import ProjectComponent from './components/ProjectComponent'
import LoginUser from './components/LoginUser'



function App() {

  return (
    <>
    <div>
      <Routes>
        <Route path="/" element={<LoginUser/>}  />
        <Route path="task-project" element={<ProjectComponent/>}  />
        <Route path="header" element={<Header/>}/>
      </Routes>
    </div>
   
      

    </>
  )
}

export default App
