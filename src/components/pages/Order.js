import React from 'react';
import { Button } from 'reactstrap';
import MenuItem from '../elements/MenuItems.js';
import { specials } from '../../assets/data/menu.js'

const Order = () => {
    return(
        <section style={{  gridTemplateColumns: "repeat(6, 1fr)" }}>
        <h1 id="Order" className="grid-span-3">Order Online</h1>
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

export default Order;