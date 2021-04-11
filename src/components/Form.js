import React, { useState } from 'react';

// you can set a primitive or a complex/reference -> one unit or a collection
// [form, setValue] = useState('')
// [form, setValue] = useState({1:'', 2,''})

// for a computed value, must have name="" in input
// [e.target.name]

// for a key.value, must have value={} in input 
// :e.target.value

// [e.target.name]:e.target.value 

const Form = () => {

    const [value, setValue] = useState('')
    const [value2, setValue2] = useState('')

    const printValues = e => {
        e.preventDefault();
        console.log(value, value2);
    }

    return (
        <div>
            <h1>Smallest Registration Issue</h1>
            <form action="#" onSubmit={printValues}>
            <label htmlFor="fname">First Name:</label>
            <input id="fname" type="text" placeholder="Enter Your Name" value={value} onChange={(e)=> setValue(e.target.value)}/>
            <input id="lname" type="text" placeholder="Enter Your LName" value={value2} onChange={(e)=> setValue2(e.target.value)}/>

            <button type="submit">Enter</button>
            </form>
        </div>
    )
}

export default Form
