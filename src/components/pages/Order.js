import React from 'react';
import { useState } from 'react';
import { Button } from 'reactstrap';
import MenuItem from '../elements/MenuItems.js';
import { specials } from '../../assets/data/menu.js';

const Order = () => {
    const [ order, setOrder ] = useState(false);

    const handleOrder = () => {setOrder(!order)}

    return(
        <section style={{  gridTemplateColumns: "repeat(6, 1fr)" }}>
        <div className="grid-span-3"><h1 id="Order" className="grid-span-3">Order Online</h1>
        { order ? <h3 className="grid-span-3">The order functionality is currently for position only</h3>
                : null
        }
        </div>
        
        <Button className="grid-span-3 right-align grid" style={{backgroundColor: "#F4CE14", color: "#495E57", marginLeft: "auto", marginRight:"auto"}} onClick={handleOrder}>Online Menu</Button>
        {specials.map((item) => {
            return(
                <div className="grid-span-2 padding-half grid-matching-height" key={item.id}>
                    <MenuItem item={item} />
                </div>
                )
            })}
            <div style={{paddingBottom: "22rem"}}>&nbsp;</div>
        </section>
    )
}

export default Order;