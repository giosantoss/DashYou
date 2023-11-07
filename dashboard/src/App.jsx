import React,{useState} from 'react';
import './style.css';
import Aside from './components/aside/Aside';
import Main from './components/main/Main';
import Right from './components/right/Right';

function App() {
  const [theme, setTheme] = useState(false);
  const [menu,setMenu] = useState(false)
  const sideMenu = document.querySelector('aside')
  const closeBtn = document.querySelector('#close-btn')

  function showMenu(){
    sideMenu.style.display = 'block'
  }

  function closeMenu(){
    sideMenu.style.display = 'none'
  }

  function toggleTheme() {
    if (theme == false) {
      setTheme(!theme);
      document.body.classList.add('dark-theme-variables');
    } else {
      setTheme(!theme);
      document.body.classList.remove('dark-theme-variables');
    }
  }

  return (
    <div className="App">
      <div className="container">
        <Aside closeMenu={closeMenu}/>
        <Main/>
        <Right theme={theme} onToggleTheme={toggleTheme} showMenu={showMenu}/>
      </div>
    </div>
  );
}

export default App;
