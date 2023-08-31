const header=React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child1"},[React.createElement("h2",{id:"child2"},"I am header2")]),
    React.createElement("div",{id:"child3"},[React.createElement("h2",{id:"child4"},"I am header2")]),
]);
const reactRoot=ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(header);