import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Home = () => {
const trys = useContext(CategoryContext)
    return (
        <div>
            <h1>This Is Home Page {trys}</h1>
        </div>
    );
};

export default Home;