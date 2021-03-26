import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Shipment = () => {
const just = useContext(CategoryContext)
    return (
        <div>
            <h1>This is Shipment {just} </h1>
        </div>
    );
};

export default Shipment;