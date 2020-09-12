import React, { useEffect, useState } from "react";
import HeroHeader from "./components/layout/HeroHeader/HeroHeader";
import Nav from "./components/layout/Nav/Nav";
import NavMenuPanel from "./components/layout/Nav/NavMenuPanel/NavMenuPanel";
const App = () => {

  const [isOpenPanel, setIsOpenPanel] = useState(false)

  return (
    <div className="bg-white w-screen relative">
      <Nav setIsOpenPanel={setIsOpenPanel} />
      <HeroHeader />
      {isOpenPanel && <NavMenuPanel setIsOpenPanel={setIsOpenPanel} />}
    </div>
  );
}

export default App;
