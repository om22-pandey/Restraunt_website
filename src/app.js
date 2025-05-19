// var h1 = document.createElement('h1');
// h1.innerHTML = "hello from js";
// var root= document.querySelector('#root');
// root.appendChild(h1);

// console.log(React);

// var h1 = React.createElement('h1',{},"hello from react")
// console.log(h1);

////////////////////////////////////////////////////////////////////
// import React from "react";
// import ReactDOM from "react-dom/client";
// const heading = React.createElement("h1" , {id : "title",key: "1"} , "hello from  ");
// console.log(heading);
// const heading2 = React.createElement("h1" , {id : "title2",key : "2"} , "hello from 2nd");
// const container = React.createElement("div",
//     {id:"container", hello : "helloContainer"},
//     [heading , heading2])
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(container);
 //////////////////////////////////////////////////////////////////// 1 from notes   //////
// import React from "react";
// import ReactDOM from "react-dom/client";
// const heading = React.createElement("div" , {className : "header"} , [
//     React.createElement("h1",{key : "4"}, "Namaste React"),
//     React.createElement("ul" ,{key : "5"},[
//         React.createElement("li" , {key : "1",},"About us"),
//         React.createElement("li" , {key : "2",},"support"),
//         React.createElement("li" , {key : "3",},"name"),
//     ])
// ])

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);



//////////////////////////////////////////////////////////////////////////

// import {createElement} from "react";
// import ReactDOM from "react-dom/client";
// const heading = createElement("div" , {className : "header"} , [
//     createElement("h1",{key : "4"}, "Namaste React"),
//     createElement("ul" ,{key : "5"},[
//         createElement("li" , {key : "1",},"About us"),
//         createElement("li" , {key : "2",},"support"),
//         createElement("li" , {key : "3",},"name"),
//     ])
// ])

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


 //instead of using this [ React.createElement ] we will be using  [ JSX ]

 ////////////////////////////////////////////////////////////////////////////
// import React from "react";
// import ReactDOM from "react-dom/client";

// const head = <h1 id="header" key={"h1"} >Namaste react</h1>

// const head2 = (
// <h1 id="header" key={"h1"} >Namaste react</h1>
// )

// //components
// const HeaderComponent = () =>{
//     return <h1> hello from react element</h1>
// }
// const HeaderComponent2 = () =>{
//     return (
//     <div>
//         <h2>hello from react component with return</h2>
//         <h2>hello</h2>
//     </div>
//     )
// }

// const HeaderComponent3 = () =>(
//     <div>
//         <h2>hello from react component without return</h2>
//         <h2>hello</h2>
//     </div>
//     );

//     // accesing the react element and react function inside the react function
// const a = 10;    
// const HeaderComponent4 = () =>(
//     <div>
//         {head} 
//         {a}
//         {/* {console.log(a)} */}
//         <HeaderComponent3/>
//         {HeaderComponent3()} 
//         <h2>hello from 4th bolck (accessing block) </h2>
//         <h2>hello</h2>
//     </div>
//     );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeaderComponent4/>);   


import React from "react";
import ReactDOM from "react-dom/client";
// for title exported as default...........
// import Title ,{HeaderComponent} from "./components/Header.jsx"
//headercomponent exported as named........
// import {HeaderComponent} from "./components/Header.jsx";
// import { Title , HeaderComponent } from "./components/Header.jsx";
// To import all the components present in title file. ..... and to access these we can use <Obj.title/>. . . .  and <Obj.headerComponents/>
import * as Obj from "./components/Header.jsx";
import Body from "./components/Body.js";
import { Contact_us } from "./components/contact.js";
import Footer from "./components/Footer.js";


// const BurgerKing = {
//     name : "Burger King",
//     Image : "https://tse2.mm.bing.net/th?id=OIP.RN6-UTVgOPMOcDEUwkI2_gHaEo&pid=Api&P=0&h=180",
//     cusines : ["Burgers" , "Americans"],
//     rating : "4.4"
// }



// const RestrauntCard = (props) =>(
//     <div className="card">
//         {console.log(props.reso?.name)}
//         <img src={props.reso?.image} alt="" />
//         <h2>{props.reso?.name}</h2>
//         <h3>{props.reso?.cuisine}</h3>
//         <h4>{props.reso?.rating} stars</h4>
//         <h5>{props.reso?.contact_number}</h5>
//         <h6>{props.reso?.location}</h6>
//     </div>
// )

// ///////to use [spread operator] for single element////////////
 
// // const Body = () =>(
// //   <div className="restraunt-list">
// //   <RestrauntCard {...restraunts[0]}/>
// //   <RestrauntCard {...restraunts[1]}/>
// //   <RestrauntCard {...restraunts[2]}/>
// //   <RestrauntCard {...restraunts[3]}/>
// //   <RestrauntCard {...restraunts[4]}/>
// //   <RestrauntCard {...restraunts[5]}/>
// //   </div>
// // )
// // /////////////////////////to not repeat all the things done above you can use map in restraunts lists/////
// // this portion is shifted to Body.js file
// const Body = () =>(
//   <div className="restraunt-list">
//     {
//       restraunts.map((res)=>{
//         return <RestrauntCard key={res.id} {...res}/> 
//       })
//     }
//   </div>
// )

// instead of using props we can use destructuring as shown below......
// const RestrauntCard = ({reso}) =>(
//     <div className="card">
//         {console.log(reso?.name)}
//         <img src={reso?.image} alt="" />
//         <h2>{reso?.name}</h2>
//         <h3>{reso?.cuisine}</h3>
//         <h4>{reso?.rating} stars</h4>
//         <h5>{reso?.contact_number}</h5>
//         <h6>{reso?.location}</h6>
//     </div>
// )
// // instead of using destructuring in reso we can use destructuring of reso as well as shown below...... but we need to use return type function for this.....
// // const RestrauntCard = ({reso}) =>{
// //     const {name ,image , cuisine , rating , contact_number , location}=reso;
// //     return(
// //         <div className="card">
// //         {console.log(name)} 
// //         <img src={image} alt="" />
// //         <h2>{name}</h2>
// //         <h3>{cuisine}</h3>
// //         <h4>{rating} stars</h4>
// //         <h5>{contact_number}</h5>
// //         <h6>{location}</h6>
// //     </div>
// //     )
// // }
//////////////////////////////////this can also be written as.........
// // const RestrauntCard = ({ reso: { name, image, cuisine, rating, contact_number, location } }) => (
// //   <div className="card">
// //       {console.log(name)}
// //       <img src={image} alt="" />
// //       <h2>{name}</h2>
// //       <h3>{cuisine}</h3>
// //       <h4>{rating} stars</h4>
// //       <h5>{contact_number}</h5>
// //       <h6>{location}</h6>
// //   </div>
// // );

// const Body = () =>(
//     <div className="restraunt-list">
//     <RestrauntCard reso = {restraunts[0]}/>
//     <RestrauntCard reso = {restraunts[1]}/>
//     <RestrauntCard reso = {restraunts[2]}/>
//     <RestrauntCard reso = {restraunts[3]}/>
//     <RestrauntCard reso = {restraunts[4]}/>
//     <RestrauntCard reso = {restraunts[5]}/>
//     {/* <RestrauntCard reso = {restraunts[5]}/>
//     <RestrauntCard reso = {restraunts[]}/>
//     <RestrauntCard reso = {restraunts[]}/>
//     <RestrauntCard reso = {restraunts[]}/> */}
//     </div>
// )


const Applayout  = () =>
    (
        <>
        <Obj.HeaderComponent/>
        <Body/>
        <Contact_us/>
        <Footer/>
        </>
    )



// const Applayout = () =>{
//     return (
//         <>
//         {/* {when it is imported as default or named} */}
//         {/* <Title></Title>
//         <HeaderComponent/> */}
//         {/* {use as this when it is imported as *} */}
//         {/* <Obj.Title/> */}
//         <Obj.HeaderComponent/>
//         <Body/>
//         <Footer/>
//         </>
//     );
// };


 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Applayout/>)