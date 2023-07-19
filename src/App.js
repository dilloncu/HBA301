import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Selected from "./Components/Selected/Selected";
import data from "./data.json";
import { useState } from "react";

function App() {
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState({});

  function handleModal(beast) {
    setModal(!modal);
    setModalContent(beast);
  }

  function closeModal() {
    setModal(!modal);
    setModalContent({});
  }

  return (
    <div className="App">
      <Header className="App-header" />
      <Main data={data} handleModal={handleModal} />
      {modal && <Selected modalContent={modalContent} closeModal={closeModal} />}
      <Footer />
    </div>
  );
}

export default App;
