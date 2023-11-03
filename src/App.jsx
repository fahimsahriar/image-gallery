import Gallery from "./compoents/gallery/Gallery"
import Header from "./compoents/heading/Header"
import "./App.css";
import { useState, useRef } from "react";
function App() {
  const deleteList = useRef([]);
  return (
    <>
    <div className='main'>
      <Header deleteList1={deleteList} />
      <Gallery deleteList1={deleteList}/>
    </div>
    </>
  )
}

export default App;
