import React, { useState, useEffect } from "react";
import { setTheme } from './themes';



  function ToggleBtn() {
    const [toggleClass, setToggleClass] = useState('dark');

    let theme = localStorage.getItem('theme');

    function handleThemeToggle() {
        if(localStorage.getItem('theme') === 'theme-dark') {
            setTheme('theme-light');
            setToggleClass('light')
        } else {
            setTheme('theme-dark');
            setToggleClass('dark');
        }
    }

    useEffect(() => {
        if(localStorage.getItem('theme') === 'theme-dark') {
            setToggleClass('dark')
        } else if(localStorage.getItem('theme') === 'theme-light') {
            setToggleClass('light');
        }
    }, [theme])
    
    return (
        <div className="dark-toggle">
            {
                toggleClass === 'light' ? 
                <button onClick={handleThemeToggle} id="light" className="toggle-btn">Dark Mode</button>
                :
                <button onClick={handleThemeToggle} id="dark" className="toggle-btn">Light Mode</button>
            }
        </div>    
    )
  }

  export default ToggleBtn;