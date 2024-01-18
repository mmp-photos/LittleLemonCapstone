import React from 'react';
import { Button } from 'react-bootstrap';

import MenuItem from './elements/MenuItems.js';
import { specials } from '../assets/data/menu.js'

const Specials = () => {

    return(
        <section style={{  gridTemplateColumns: "repeat(6, 1fr)" }}>
            <h1 className="grid-span-3">This weeks specials!</h1>
            <Button className="grid-span-3 right-align grid" style={{backgroundColor: "#F4CE14", color: "#495E57", marginLeft: "auto", marginRight:"auto"}}>Online Menu</Button>
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