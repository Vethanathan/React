import React from 'react'

// function Greet(){
//     return <h1>Hello this is vetha just created a component</h1>
// }
const Greet = props => {
    console.log(props)
 return <h1>Vanakam da {props.name} maapla Functional component la irunthu</h1>
}
export default Greet;