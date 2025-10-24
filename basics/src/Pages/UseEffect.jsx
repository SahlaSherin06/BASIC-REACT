import React, { useState } from "react";

function Theme() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark" : "light"}>
      <h1>{isDark ? "Dark Mode" : "Light Mode"}</h1>
      <button onClick={toggleTheme}>Switch Theme</button>
    </div>
  );
}

export default Theme;
