import { useEffect, useState } from 'react';
import './App.css';
import Content from './components/Content';
import Navbar from './components/Navbar';
import Slogan from './components/Slogan';

function App() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleChangeSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener('resize', handleChangeSize)
    handleChangeSize()
    return () => window.removeEventListener('resize', handleChangeSize)
  }, [])

  useEffect(() => {
    if(windowSize.width < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false)
    }
  }, [windowSize])
  return (
    <div className="overflow-x-hidden overflow-y-auto text-13 h-screen px-4 py-4 bg-gradient-to-b dark:from-purple-900 from-white to-pink-500 dark:to-purple-700">
      <Navbar isMobile={isMobile} />
      <Slogan />
      <Content />
    </div>
  );
}

export default App;
