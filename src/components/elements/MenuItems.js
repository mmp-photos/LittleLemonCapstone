import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle } from 'react-bootstrap';

const MenuItem = ({item}) => {
    // console.log(item)
    const { name, image, price, description } = item;
    return(
        <Card style={{backgroundColor: "#EDEFEE", position: "relative"}}>
            <img className="card-image" src={image} style={{borderTopLeftRadius: "16px", borderTopRightRadius: "16px"}} alt={name} />
            <CardBody>
                <CardTitle style={{position: "relative", display: "inline-block", marginLeft: "0px"}}>
                    {name}
                </CardTitle>
                <CardSubtitle style={{float: "right", display: "inline-block", marginRight: "0px", color: "#EE9972"}}>
                    ${price}
                </CardSubtitle>
                <p>{description}</p>
            </CardBody>
        </Card>
    )
}

export default MenuItem;