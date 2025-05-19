import React from "react";
import ReactDOM from "react-dom/client";
import * as Obj from "./components/Header.jsx";
import Body from "./components/Body.js";
import { Contact_us } from "./components/contact.js";
import Footer from "./components/Footer.js";

const Applayout  = () =>
    (
        <>
        <Obj.HeaderComponent/>
        <Body/>
        <Contact_us/>
        <Footer/>
        </>
    )
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Applayout/>)

export default App;