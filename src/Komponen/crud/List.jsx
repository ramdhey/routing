import React, { useState } from 'react'

import { MapList } from './MapList'
import { Formnya } from './Form';

export const List = () => {

    const [listnya, setListnya] = useState([])

    const tambahList = (list) => {
        const listBaru = [list, ...listnya]

        setListnya(listBaru)
        console.log(listBaru)


    }

    const deleteListnya = (id) => {
        const deleted = [...listnya].filter((list) => list.id !== id)
        setListnya(deleted)
    }


    const updateList = (idList, valueBaru) => {
        setListnya((previous) => previous.map((item) => item.id === idList ? valueBaru : item))
    }
    // console.log(listnya)

    return (
        <section id='todo'>
             <div>
                <h3 className='mt-5'></h3>

                <Formnya onSubmit={tambahList} />
                <MapList listnya={listnya} deleteListnya={deleteListnya} updateList={updateList} />
            </div>

        </section>
       

    )
}



