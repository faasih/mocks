import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppNavigation from "./routes/index";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppNavigation />
      </BrowserRouter>
      {/* <DarkModeProvider>
        <Testing />
        <TopBarPublicPage />
      </DarkModeProvider> */}
    </div>
  );
}

export default App;
