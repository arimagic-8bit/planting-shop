import React from 'react';
import {connect} from 'react-redux';
import PlantCard from './PlantCard';

function mapStateToProps(state){
    return{ plants: state.plants}
};

const connectedShop = ({plants}) => {
        return(
            <>
                <h1>This is a shop</h1>
                <ul>
                    {plants.map((plant) => {
                       return <PlantCard key={plant.id} plant={plant} />
                    })}
                </ul>
            </>
        )
}

const Shop = connect(mapStateToProps)(connectedShop);

export default Shop;