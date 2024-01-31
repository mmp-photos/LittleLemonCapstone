import React from 'react';
import { Button } from 'react-bootstrap';

import MenuItem from '../elements/MenuItems.js';
import { specials } from '../../assets/data/menu.js'

const Specials = () => {

    return(
        <section>
            <h1 id="Menu" className="grid-span-5">This weeks specials!</h1>
            <button>Online Menu</button>
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