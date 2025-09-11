import React from 'react';
// property react function
function Hi(props){
    return <h1>Welcome, {props.name}</h1>;
}
function Hello(){
    return(
        <div>
            {/* <h1>hello my name roshan </h1> */}
            <Hi name = "Roshan"/>
        </div>
    );
}
export default Hello;