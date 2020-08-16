import React from 'react';
import {connect} from 'react-redux';

function mapStateToProps(state){
    return{ plants: state.plants}
};

const connectedShop = ({plants}) => {
        return(
            <>
                <h1>This is a shop</h1>
                <ul>
                    {plants.map((plant) => {
                       return <li key={plant.id}>{plant.name}</li>
                    })}
                </ul>
            </>
        )
}

const Shop = connect(mapStateToProps)(connectedShop);

export default Shop;