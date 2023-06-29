import  { createContext, useState } from "react";

export const ThemeContext = createContext();

function ThemeProvider(props) {
  const [theme, setTheme] = useState("light");

function toggleTheme () {
    setTheme((prevTheme) => 
    (prevTheme === "light" ? "oscuro" : "light"));
  };

  const returnedValue ={
    value: theme,
    changeValue: toggleTheme,
  };

  return (
    <ThemeContext.Provider value={returnedValue}>
      <div>{props.children}</div>
    </ThemeContext.Provider>
  );
}
export default ThemeProvider;

/* function ThemeProvider = ({ children }) => {
  

  

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeContext; */
