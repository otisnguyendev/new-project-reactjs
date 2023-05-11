import { useState } from 'react';
import './App.scss';
import MyComponent from './Example/MyComponent';

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <MyComponent />
    </div >
  )
}

export default App
