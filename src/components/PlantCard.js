import React from 'react';

const PlantCard = (props) =>{
    const {image, name, price} = props.plant;
    return(
        <div>
            <img src={image} alt={name} />
            <h5>{name}</h5>
            <p>${price}</p>
        </div>
    )
}

export default PlantCard;