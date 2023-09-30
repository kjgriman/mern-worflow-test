import Header from "./components/header"
import reactLogo from "./assets/logo.png"
import './App.css'
import List from "./components/list"
import CreateButton from "./components/buttomAction/create"


function App() {

  return (
    <>
    <Header 
        titleLogo='Kerbin Griman'
        srcLogoImg={reactLogo}
      />
      
    <List/>
    </>
  )
}

export default App
