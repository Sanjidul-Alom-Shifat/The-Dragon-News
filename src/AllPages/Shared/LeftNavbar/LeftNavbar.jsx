import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './LeftNavbar.css'

const LeftNavbar = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://the-dragon-news-server-sanjidul-alom-shifat.vercel.app/categories')
            .then(response => response.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    }, []);

    return (
        <div>
            <h5>All Caterogy</h5>
            <div className='mt-4 '>
                {
                    categories.map(category =>
                        <p
                            key={category.id}
                            className=' text-center py-3 rounded-2 para'
                        >
                            <Link to={`/category/${category.id}`} className=' text-decoration-none  fs-5 fw-semibold catlink'>
                                {category.name}
                            </Link>
                        </p>
                    )
                }
            </div>
        </div>
    );
};

export default LeftNavbar;