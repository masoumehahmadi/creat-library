import React from 'react';
import './App.css'
import Button from './components/Button/Button'
function App() {
 
  return (
    <>
       <h1>My UI Library</h1>
      <Button variant="danger" size="md" onClick={() => alert('Clicked!')}>
        Primary Button
      </Button>
    </>
  )
}

export default App
