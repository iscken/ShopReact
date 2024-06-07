import React from 'react';
import { Link } from 'react-router-dom';

const GetAdmin = () => {
    return (
        <div id='getadmin'>
            <div className="container">
                <div className="w-[300px] h-[300px] bg-[red]">
                <Link to="/admin">Показать свои продукты</Link>
                </div>
            </div>
            
        </div>
    );
};

export default GetAdmin;