import React, { useContext } from 'react';
import { SportShop } from '../../pages/context/useContext';
import { useParams } from 'react-router-dom';

const ProductCart = () => {
    const {productmain} = useContext(SportShop)
    const {proId} = useParams()
    const res = productmain.find((el) => el.id === +proId)
    console.log(res);
    return (
        
<a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={res.image}alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{res.title}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${res.price}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{res.description}</p>
    </div>
</a>

    );
};

export default ProductCart;