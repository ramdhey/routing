import React, { useState } from 'react'

import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

export const Formnya = (props) => {

    const [input, setInput] = useState(props.edit ? props.edit.value : "")

    // console.log("input", input)


    const handleForm = (event) => {
        event.preventDefault()
        props.onSubmit({
            id : Math.floor(Math.random() * 1000),
            text : input,
        })
        setInput("")

    }

    const handleChange = (event) => {
        setInput(event.target.value)

    }


    // console.log("props", props)


    return (
        <div>

            <Form onSubmit={handleForm}>
                {props.edit ? (<>
                    <div className="mb-5 forminputan mt-5"  style={{ width: '300px' , margin: 'auto'}}>
                    <Form.Label className='labelinput'>Update To Do</Form.Label>
                    <Form.Control type="text" placeholder="Masukkan data yang mau di Update" className='inputdatanya' onChange={handleChange} value={input} />
                    <button className='mt-4 buttonform text-white' style={{ backgroundImage: 'linear-gradient(to right,#033E3E,#033E3E,#2E8B57)', border: 'none' }} >Update</button>
                    
                    

                    </div>
                    </>):(<>
                        <div className="mt-5 mb-4 justify-content-center forminputan" style={{ width: '300px' , margin: 'auto'}}>
                   
                   <Form.Label className='labelinput mt-5'>Input To Do</Form.Label>
                   <Form.Control type="text" placeholder="Masukkan data yang mau di Input" className='inputdatanya' onChange={handleChange} value={input} />
                   <button className='mt-4 mb-5 buttonform text-white' style={{ backgroundImage: 'linear-gradient(to right,#3F000F, #7D0552, #C58917)', border: 'none' }} >Add</button>

                   </div>
                    </>)}
                
                    
                   

                    




            </Form>

        </div>
    )
}

