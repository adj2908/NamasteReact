import React from 'react';
import ReactDOM from'react-dom/client';
const Title = ()=>
(<h1 className='heading'>
Namaste React using JSX 
</h1>)

const elem=(<h3>elem</h3>)

const header = (
    <span>
        Hello world
        {elem}
    </span>
)


const Heading = ()=>{
    return (<div id='container'>
        <Title/>
        {Title()}
        {header}
        <span>
            heading functional component
        </span>
    </div>)
}

const reactRoot=ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<Heading/>);