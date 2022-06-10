// import logo from './logo.svg';
import './App.css';

import React, {useState}from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import{  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App =()=> {
  const pageSize = 9;

  const [mode, setmode] = useState("light")
  const [navMode, setnavMode] = useState('DarkMode')

  let handleMode = () => {

    if(mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor = "#091e14"
      setnavMode('LightMode')
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = "white"
      setnavMode('DarkMode')
    }
  }

    return (
      
      <Router>

          <NavBar mode={mode} handleMode={handleMode} navMode={navMode} />

          <div className='container'>
              
          <Routes>
              <Route exact path="/" element={<News key="/"  pageSize={pageSize} country="in" category="general" mode={mode}/>}  />
              <Route exact path="/general" element={<News key="general" pageSize={pageSize} country="in" category="general" mode={mode}/>}  />
              <Route exact path="/science" element={<News key="science" pageSize={pageSize} country="in" category="science" mode={mode}/>}  />
              <Route exact path="/entertainment" element={<News key="entertainment" pageSize={pageSize} country="in" category="entertainment" mode={mode}/>}  />
              <Route exact path="/sports" element={<News key="sports" pageSize={pageSize} country="in" category="sports" mode={mode}/>}  />
              <Route exact path="/business" element={<News key="business" pageSize={pageSize} country="in" category="business" mode={mode}/>}  />
              <Route exact path="/health" element={<News key="health" pageSize={pageSize} country="in" category="health" mode={mode}/>}  />
              <Route exact path="/technology" element={<News key="technology" pageSize={pageSize} country="in" category="technology" mode={mode}/>}  />
              <Route exact path="/sports" element={<News key="sports" pageSize={pageSize} country="in" category="sports" mode={mode}/>}  />
          </Routes>
      </div>
        </Router>
    )
  
}

export default App

