import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'


const App = () => {
  return (
    <div >
      <div>
      <Sidebar className="sidebar"/>
      </div> 
      <div className='main-content'>
        <Main/>
      </div>
      
    </div>
  )
}

export default App