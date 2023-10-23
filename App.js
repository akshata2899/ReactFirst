/*
*
*<div id="parent">
*   <div id="child">
*       <h1>I'm h1 tag</h1>
*       <h2>I'm h1 tag</h2>
*   </div>
*</div>
*
*ReactElement(Object) => HTML(Browser Understands)
*
*/

//creating an object
const parent = React.createElement("div", {id:"parent"},[
    React.createElement("div", {id:"child"},[
        React.createElement("h1", {}, "I'm an h1 tag"), 
        React.createElement("h2", {}, "I'm an h2 tag")
    ]),
    React.createElement("div", {id:"child2"},[
        React.createElement("h1", {}, "I'm an h1 tag"), 
        React.createElement("h2", {}, "I'm an h2 tag")
    ])
]);

//All this is React 18
//JSX to reduce complexity in programming
//React can only be written using JSX

/*
const heading = React.createElement(
    "h1", 
    {id:"heading", xyz:"abc"}, 
    "Hello World from React!"
);
*/

console.log(parent);    

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);      //rendering on to the DOM //Putting parent inside the root tag

//heading - react element - returns object
//if any tag is already there inside (div id root), then that tag will be replaced by parent
//even if many number of tags are there inside (div id root), all will be replaced by parent

//React is called a library - because it can even work alone on small portion of a page. 