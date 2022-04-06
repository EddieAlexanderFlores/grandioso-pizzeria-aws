import {Fragment, useState} from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

const App = () => {
  const [contentSelected, setContentSelected] = useState<string>("menu");

  const navMenuSelectHandler = (navMenuSelected: string) => {
    window.scrollTo({top: 0, left: 0, behavior: "auto"});
    setContentSelected(navMenuSelected);
  };

  return (
    <Fragment>
      <Header onNavMenuSelect={navMenuSelectHandler} />
      <Main content={contentSelected} />
      <Footer />
    </Fragment>
  );
};

export default App;
