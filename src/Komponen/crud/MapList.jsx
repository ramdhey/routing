import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { Formnya } from './Form';



export const MapList = ({ listnya, deleteListnya ,updateList }) => {

    const [edit, setEdit] = useState({
        id: null,
        value: ""
    })

    const accUpdate = (value) => {
        updateList(edit.id,value)
        setEdit({
            id: null,
            value: ""
        })
    }

    if(edit.id){
        return <Formnya edit={edit} onSubmit={accUpdate} />
    }


    // console.log("list", listnya)
    return (
        <div >
            {listnya.map((item, index) => (
                <div key={index}>

                    <Card className='cardnya mb-5' style={{ width: '18rem', backgroundImage: 'linear-gradient(to left,#F6BE00,#F2BB66,#2E8B57)', margin: 'auto', borderRadius: '15px' }} >

                        <Card.Body>
                            <Card.Title className='idnya'>I D : {item.id}</Card.Title>
                            <Card.Text className='textnya'>
                                {item.text}
                            </Card.Text>
                            <Button variant="primary" onClick={() => setEdit({ id: item.id, value: item.text })} className='mt-4 buttoncard' style={{ backgroundImage: 'linear-gradient(to right,#033E3E,#033E3E,#2E8B57)', border: 'none' }}>Edit</Button>{'   '}
                            <Button variant="primary" onClick={() => deleteListnya(item.id)} className='mt-4 buttoncard' style={{ backgroundImage: 'linear-gradient(to right,#4863A0,#151B54,#008B8B)', border: 'none' }}>Delete</Button>
                        </Card.Body>
                    </Card>

                </div>


            ))}

        </div>
    )
}


