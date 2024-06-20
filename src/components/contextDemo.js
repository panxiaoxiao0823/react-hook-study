import React, { useContext } from 'react';

const theme = {
  light: {
    foreground: '#222',
    background: '#eee'
  },
  dark: {
    foreground: '#fff',
    background: '#000'
  }
}
const ThemeContext = React.createContext(theme.dark); // 初始值是dark主题色

function ThemeButton() {
  const themes = useContext(ThemeContext); // useContext获取传递的context的value值

  return <div>
    <button style={{background: themes.background, color: themes.foreground}}>主题色</button>
  </div>
}  

function Toolbar() {
  return <ThemeButton></ThemeButton>
}  

function ContextDemo() {
    return <ThemeContext.Provider value={ theme.light }> 
      {/* 默认主题色是light */}
      <Toolbar></Toolbar>
    </ThemeContext.Provider>
}

export default ContextDemo;