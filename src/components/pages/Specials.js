import React from 'react';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import MenuItem from '../elements/MenuItems.js';
import { specials } from '../../assets/data/menu.js'

const Specials = () => {
    const [ order, setOrder ] = useState(false);

    const handleOrder = () => {setOrder(!order)}

    return(
        <section id="Specials">
            <div className="grid-span-5"><h1 id="Menu" className="grid-span-5">This weeks specials!</h1>
            { order ? <h3 className="grid-span-3">The order functionality is currently for position only</h3>
                    : null
            }
            </div>
            <button onClick={handleOrder}>Online Menu</button>
            {specials.map((item) => {
                return(
                    <div className="grid-span-2 padding-half grid-matching-height" key={item.id}>
                        <MenuItem item={item} />
                    </div>
                    )
                })}
        </section>
    )
}

export default Specials